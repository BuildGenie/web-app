"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ComponentPropsWithoutRef, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import ReactMarkdown, { type ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowRight, ArrowUpRight, CheckCircle2, Lightbulb, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { getPublicServices, submitPublicLead, sendAdvisorMessage, type AdvisorMessage, type PublicService } from "@/lib/public-api";

const suggestions = [
  { title: "Explore an idea", prompt: "I have an idea I want to explore, but I'm not sure where to start." },
  { title: "Find my next move", prompt: "Help me figure out the next step for my business." },
  { title: "Reach more customers", prompt: "I'd like to find more customers. Can we brainstorm a growth plan?" },
  { title: "Build a digital product", prompt: "I want to build a digital product. Help me think through the possibilities." },
];

function AdvisorAvatar() {
  return <span className="advisor-chat-avatar" aria-hidden="true"><span className="brand-mark"><span/><span/><span/><span/></span></span>;
}

type ServiceDetails = { name: string; description: string; href: string };
const MarkdownLinkContext = createContext(false);

function serviceHref(value: unknown): string {
  return typeof value === "string" && /^\/services(?:\/[a-z0-9-]+)*\/?$/.test(value) ? value : "/services";
}

function matchService(name: string, catalogue: PublicService[]): ServiceDetails | undefined {
  const normalized = name.trim().normalize("NFKC").toLowerCase();
  for (const service of catalogue) {
    const pkg = service.packages.find(item => item.name.trim().normalize("NFKC").toLowerCase() === normalized);
    if (pkg) return { name: pkg.name, description: pkg.description || service.description || "Discuss this engagement with the BuildGenie team.", href: serviceHref(pkg.configuration?.href) };
  }
  const service = catalogue.find(item => item.name.trim().normalize("NFKC").toLowerCase() === normalized);
  if (!service) return undefined;
  return { name: service.name, description: service.description || "Discuss this service with the BuildGenie team.", href: serviceHref(service.packages[0]?.configuration?.href) };
}

function ServiceStrong({ children, node, catalogue, onServiceSelect }: ComponentPropsWithoutRef<"strong"> & ExtraProps & { catalogue: PublicService[]; onServiceSelect: (service: ServiceDetails) => void }) {
  const insideLink = useContext(MarkdownLinkContext);
  const text = node?.children.every(child => child.type === "text") ? node.children.map(child => child.type === "text" ? child.value : "").join("") : "";
  const service = insideLink ? undefined : matchService(text, catalogue);
  return service ? <strong><button className="advisor-service-link" type="button" onClick={() => onServiceSelect(service)}>{children}</button></strong> : <strong>{children}</strong>;
}

function ServiceDialog({ service, onClose, onDiscuss }: { service: ServiceDetails; onClose: () => void; onDiscuss: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (dialog.current && !dialog.current.open) dialog.current.showModal(); }, []);
  return <dialog ref={dialog} className="advisor-service-dialog" aria-labelledby="advisor-service-title" onClose={onClose} onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); event.currentTarget.close(); } }} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
    <button className="advisor-modal-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close service details"><X size={19}/></button>
    <span className="advisor-service-label">BUILDGENIE SERVICE</span>
    <h2 id="advisor-service-title">{service.name}</h2>
    <p>{service.description}</p>
    <div className="advisor-service-actions">
      <Link href={service.href}>Read more <ArrowUpRight size={15}/></Link>
      <button className="button button-orange" type="button" onClick={onDiscuss}>Discuss this service <ArrowRight size={16}/></button>
    </div>
  </dialog>;
}

export function ProjectAdvisor({ initialService, initialSelection }: { initialService: string; initialSelection: string }) {
  const initialInterest = initialSelection
    ? [initialService, initialSelection].filter(Boolean).join(" — ")
    : initialService.toLowerCase() === "start a project" ? "" : initialService;
  const [interest, setInterest] = useState(initialInterest);
  const [messages, setMessages] = useState<AdvisorMessage[]>(() => initialInterest
    ? [{ role: "user", content: `I'm interested in ${initialInterest}. Can you help me explore it?` }]
    : []);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadBusy, setLeadBusy] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [catalogue, setCatalogue] = useState<PublicService[]>([]);
  const [catalogueError, setCatalogueError] = useState(false);
  const [catalogueVersion, setCatalogueVersion] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const request = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let active = true;
    getPublicServices().then(services => {
      if (active) { setCatalogue(services); setCatalogueError(false); }
    }).catch(() => {
      if (active) setCatalogueError(true);
    });
    return () => { active = false; };
  }, [catalogueVersion]);

  const getReply = useCallback(async (conversation: AdvisorMessage[]) => {
    const controller = new AbortController();
    request.current = controller;
    setBusy(true);
    setError("");
    try {
      const recent: AdvisorMessage[] = [];
      let total = 0;
      for (const message of conversation.slice(-20).reverse()) {
        if (total + message.content.length > 16000) break;
        recent.unshift(message);
        total += message.content.length;
      }
      const reply = await sendAdvisorMessage(recent, controller.signal);
      if (!controller.signal.aborted) setMessages(current => [...current, { role: "assistant", content: reply }]);
    } catch (err) {
      if (!controller.signal.aborted) setError(err instanceof Error ? err.message : "The advisor is unavailable. Please try again.");
    } finally {
      if (request.current === controller) {
        request.current = null;
        setBusy(false);
      }
    }
  }, []);

  useEffect(() => {
    if (initialInterest) {
      void getReply([{ role: "user", content: `I'm interested in ${initialInterest}. Can you help me explore it?` }]);
    }
    return () => request.current?.abort();
  }, [getReply, initialInterest]);

  function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const conversation: AdvisorMessage[] = [...messages, { role: "user", content }];
    trackEvent("advisor_message_sent", { message_length: Math.min(content.length, 2000) });
    setMessages(conversation);
    setDraft("");
    void getReply(conversation);
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function reset() {
    request.current?.abort();
    request.current = null;
    setBusy(false);
    setInterest("");
    setMessages([]);
    setDraft("");
    setError("");
    setSelectedService(null);
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (leadBusy) return;
    setLeadBusy(true);
    setLeadError("");
    try {
      await submitPublicLead({
        email: leadEmail.trim(),
        contactName: leadName.trim(),
        companyName: leadCompany.trim() || leadName.trim(),
        serviceName: interest || "Initial project conversation",
        source: "website-project-advisor",
        advisorContext: messages.map(message => `${message.role === "user" ? "VISITOR" : "ADVISOR"}: ${message.content}`).join("\n\n").slice(-2000),
      });
      setSubmitted(true);
      trackEvent("advisor_lead_submitted", { has_conversation: messages.length > 0 });
    } catch (err) {
      setLeadError(err instanceof Error ? err.message : "We couldn't save your enquiry. Please try again.");
    } finally {
      setLeadBusy(false);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      send(draft);
    }
  }

  return <section className="advisor-chat-page">
    <div className="advisor-chat-shell">
      <div className="advisor-chat-content">
        {messages.length === 0 ? <div className="advisor-chat-welcome">
          <h1>Big idea? <em>Let&apos;s talk it through.</em></h1>
          <p>Bring your questions, your half-formed ideas, or the thing keeping you up at night. We&apos;ll find a way forward together.</p>
          <div className="advisor-chat-suggestions">{suggestions.map((item, index) => <button key={item.title} type="button" onClick={() => send(item.prompt)}><span>{index < 2 ? <Lightbulb size={18}/> : <MessageCircle size={18}/>}</span><strong>{item.title}</strong><small>{item.prompt}</small><ArrowRight size={15}/></button>)}</div>
        </div> : <div className="advisor-chat-thread" aria-live="polite">
          {messages.map((message, index) => <article key={index} className={`advisor-chat-bubble advisor-chat-bubble-${message.role}`}>
            {message.role === "assistant" && <AdvisorAvatar/>}
            <div><strong>{message.role === "user" ? "You" : "BuildGenie Advisor"}</strong>{message.role === "assistant"
              ? <div className="advisor-chat-markdown"><ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml components={{
                img: () => null,
                a: ({ href, title, children }) => <a href={href} title={title}><MarkdownLinkContext.Provider value>{children}</MarkdownLinkContext.Provider></a>,
                strong: props => <ServiceStrong {...props} catalogue={catalogue} onServiceSelect={setSelectedService}/>,
              }}>{message.content}</ReactMarkdown></div>
              : <p>{message.content}</p>}</div>
          </article>)}
          {busy && <div className="advisor-chat-thinking" role="status"><AdvisorAvatar/> Thinking through your idea…</div>}
          <div ref={endRef}/>
        </div>}
        {error && <div className="advisor-chat-error" role="alert">{error} <button type="button" onClick={() => void getReply(messages)} disabled={busy}>Try again</button></div>}
        {catalogueError && <p className="advisor-catalogue-error" role="status">Service details are unavailable. <button type="button" onClick={() => setCatalogueVersion(version => version + 1)}>Retry</button></p>}
        <form className="advisor-chat-composer" onSubmit={event => { event.preventDefault(); send(draft); }}>
          <label className="sr-only" htmlFor="advisor-chat-input">Message Project Advisor</label>
          <textarea id="advisor-chat-input" value={draft} onChange={event => setDraft(event.target.value)} onKeyDown={onKeyDown} maxLength={2000} rows={2} placeholder="Tell me what you're thinking about…"/>
          <div><span>Enter to send · Shift + Enter for a new line</span><button type="submit" disabled={!draft.trim() || busy} aria-label="Send message"><Send size={18}/></button></div>
        </form>
        <p className="advisor-chat-privacy">AI responses can be inaccurate. Messages are sent to OpenAI to generate replies. Please don&apos;t share sensitive information. <Link href="/privacy">Privacy details</Link></p>
        <div className="advisor-chat-actions">{messages.length > 0 && <button type="button" onClick={reset}><RotateCcw size={15}/> New chat</button>}<button type="button" className="advisor-chat-contact" onClick={() => { trackEvent("advisor_work_with_us_click", { has_conversation: messages.length > 0 }); setSubmitted(false); setLeadError(""); setShowLeadForm(true); }}>Work with us <ArrowUpRight size={15}/></button></div>
      </div>
      {selectedService && <ServiceDialog service={selectedService} onClose={() => setSelectedService(null)} onDiscuss={() => {
        setInterest(selectedService.name);
        trackEvent("advisor_work_with_us_click", { has_conversation: messages.length > 0 });
        setSelectedService(null);
        setSubmitted(false);
        setLeadError("");
        setShowLeadForm(true);
      }}/>}
    </div>
    {showLeadForm && <div className="advisor-modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setShowLeadForm(false); }}>
      <div className="advisor-lead-modal" role="dialog" aria-modal="true" aria-labelledby="advisor-lead-title">
        <button type="button" className="advisor-modal-close" onClick={() => setShowLeadForm(false)} aria-label="Close"><X size={19}/></button>
        {submitted ? <div role="status"><div className="advisor-modal-icon"><CheckCircle2 size={20}/></div><h2 id="advisor-lead-title">Thanks, {leadName}.</h2><p>Your enquiry and recent conversation have been saved for our team to review.</p></div> : <>
          <div className="advisor-modal-icon"><MessageCircle size={20}/></div><h2 id="advisor-lead-title">Let&apos;s build together.</h2><p>Share your details and we&apos;ll save your enquiry and recent conversation for the team to review.</p>
          <form onSubmit={submitRequest}>
            <label>Your name<input value={leadName} onChange={event => setLeadName(event.target.value)} required autoComplete="name" maxLength={160}/></label>
            <label>Company or product <input value={leadCompany} onChange={event => setLeadCompany(event.target.value)} autoComplete="organization" maxLength={160}/></label>
            <label>Email address<input type="email" value={leadEmail} onChange={event => setLeadEmail(event.target.value)} required autoComplete="email" maxLength={254}/></label>
            {leadError && <p role="alert">{leadError}</p>}
            <button className="button button-orange" type="submit" disabled={leadBusy}>{leadBusy ? "Sending…" : "Send project enquiry"} <ArrowUpRight size={17}/></button>
          </form>
        </>}
      </div>
    </div>}
  </section>;
}
