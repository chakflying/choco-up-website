import type React from "react";

/**
 * A Section of the Footer Navigation Links
 * @param {any} props - component props
 * @param {React.JSX.Element} props.heading - The heading of the section
 * @param {Array<{ name: string, href: string }>} props.links - The links in the section
 * @returns {React.JSX.Element}
 */
export default function FooterNavSection({ heading, links }: { heading: React.JSX.Element, links: Array<{ name: string, href: string }> }) {
  return (
    <div className="flex flex-col font-bold text-white mr-8 mb-12">
      <div className="text-2xl font-bold text-cyan-200 mb-2">{heading}</div>
      {links.map((link) => (
        <a key={link.href} className="mt-2" href={link.href}>{link.name}</a>
      ))}
    </div>
  );
}
