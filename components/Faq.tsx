import { Plus } from "lucide-react";
import { SectionTitle, ZigzagDivider } from "./ui";
import { Reveal } from "./motion";
import { faqs } from "./content";

/**
 * Visible FAQ. Answers are in the HTML even when collapsed (<details>), so
 * crawlers and answer engines read them; the same Q&As feed FAQPage JSON-LD.
 */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-6 pt-20 sm:px-8 md:pt-24">
      <div className="text-center">
        <SectionTitle id="faq-title">FAQ</SectionTitle>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-ink/15 border-y border-ink/15">
        {faqs.map(({ q, a }, i) => (
          <Reveal key={q} delay={i * 0.05}>
            <details className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xs font-bold uppercase tracking-[0.15em] text-ink">
                <h3>{q}</h3>
                <Plus
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{a}</p>
            </details>
          </Reveal>
        ))}
      </div>

      <ZigzagDivider className="mt-16" />
    </section>
  );
}
