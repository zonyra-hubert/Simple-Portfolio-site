"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { BarButton, SectionTitle, ZigzagDivider } from "./ui";
import { Reveal } from "./motion";
import { profile } from "./content";

const contactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fields: {
  name: keyof ContactFormData;
  label: string;
  type?: string;
  multiline?: boolean;
}[] = [
  { name: "name", label: "Enter your name*" },
  { name: "email", label: "Enter your email*", type: "email" },
  { name: "subject", label: "Subject*" },
  { name: "message", label: "Your message*", multiline: true },
];

const inputClasses =
  "block w-full border-b-2 border-l-2 border-ink bg-transparent px-3 pb-1.5 pt-4 text-sm text-ink outline-none transition-[background-color,border-color,padding] duration-300 focus:pl-4 placeholder:font-display placeholder:text-[9px] placeholder:font-semibold placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-ink/45 focus:bg-white/40 aria-[invalid=true]:border-red-700";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionTitle>Contact</SectionTitle>
        <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-md text-xs leading-relaxed text-muted sm:text-[13px]">
          Have a project in mind, a role to fill, or just want to say hi? Drop
          me a message below or email me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-ink underline-offset-2 hover:underline"
          >
            {profile.email}
          </a>
          .
        </p>
        </Reveal>
        <ZigzagDivider className="mt-8" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto mt-14 max-w-sm space-y-7 sm:max-w-md"
      >
        {fields.map(({ name, label, type, multiline }, i) => {
          const err = errors[name];
          const errId = `${name}-error`;
          const common = {
            id: name,
            placeholder: label,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": err ? errId : undefined,
            className: inputClasses,
            ...register(name),
          };
          return (
            <Reveal key={name} delay={i * 0.1}>
              <label htmlFor={name} className="sr-only">
                {label.replace("*", "")}
              </label>
              {multiline ? (
                <textarea {...common} rows={6} className={`${inputClasses} resize-none`} />
              ) : (
                <input {...common} type={type ?? "text"} />
              )}
              {err && (
                <p id={errId} className="mt-1.5 text-[11px] text-red-700">
                  {err.message}
                </p>
              )}
            </Reveal>
          );
        })}

        <Reveal delay={0.4} className="pt-6 text-center">
          <BarButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </BarButton>
          <div aria-live="polite" className="mt-4 text-xs">
            {status === "success" && (
              <p className="text-green-800">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-700">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </Reveal>
      </form>
    </section>
  );
};

export default ContactPage;
