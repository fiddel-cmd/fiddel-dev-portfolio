import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  external?: boolean;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  external = false,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
