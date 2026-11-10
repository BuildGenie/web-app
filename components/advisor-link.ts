export function advisorLink(service: string, selection?: string) {
  const params = new URLSearchParams({ service });
  if (selection) params.set("selection", selection);
  return `/contact?${params.toString()}`;
}
