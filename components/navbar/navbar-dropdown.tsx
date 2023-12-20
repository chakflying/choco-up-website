"use client";

import type React from "react";
import { useState } from "react";

/**
 * navbar dropdown, toggles on hover
 * @param {any} props - component props
 * @param {React.JSX.Element} props.summary - The heading of the dropdown
 * @param {React.JSX.Element} props.children - The contents of the dropdown
 * @returns {React.JSX.Element}
 */
export default function NavbarDropdown({
  summary,
  children,
}: {
  summary: React.JSX.Element;
  children: React.JSX.Element;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDetails = () => {
    setIsOpen(true);
  };

  const closeDetails = () => {
    setIsOpen(false);
  };

  return (
    <details
      open={isOpen}
      onMouseEnter={openDetails}
      onMouseLeave={closeDetails}
    >
      <summary className="lg:!py-0 list-none">{summary}</summary>
      {children}
    </details>
  );
}
