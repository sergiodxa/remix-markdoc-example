import type { ReactNode } from "react";

type Types = "check" | "error" | "note" | "warning";

type CalloutProps = { children: ReactNode; type: Types };

export function Callout({ children, type }: CalloutProps) {
  return (
    <div>
      <strong>{type.toUpperCase()}</strong>: {children}
    </div>
  );
}

Callout.scheme = {
  render: Callout.name,
  description: "Display the enclosed content in a callout box",
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "note",
      matches: ["check", "error", "note", "warning"],
    },
  },
};
