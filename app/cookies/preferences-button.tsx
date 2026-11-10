"use client";

import { Settings2 } from "lucide-react";

export function PreferencesButton() {
  return (
    <button
      className="button button-orange"
      type="button"
      onClick={() => window.dispatchEvent(new Event("buildgenie:open-analytics-settings"))}
    >
      <Settings2 size={16} /> Manage analytics preferences
    </button>
  );
}
