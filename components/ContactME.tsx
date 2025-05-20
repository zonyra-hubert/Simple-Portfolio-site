"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "service_k07sji8",
        "template_cnzaeqm",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "9m71a-l_CMHNqv2yw"
      );

      setSuccess(true);
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccess(false);
    }
  };

  return (
    <section className=" bg-[#1c2b3a] text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full p-3 rounded bg-[#2d3e50] text-white focus:outline-green-600 focus:ring-green-600 outline-none focus:ring-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-3 rounded bg-[#2d3e50] text-white focus:outline-green-600 focus:ring-green-600 outline-none focus:ring-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full p-3 rounded bg-[#2d3e50] text-white focus:outline-green-600 focus:ring-green-600 outline-none focus:ring-2 "
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}

          <textarea
            {...register("message")}
            placeholder="Message"
            className="w-full p-3 rounded bg-[#2d3e50] text-white h-40 resize-none focus:outline-green-600 focus:ring-green-600 outline-none focus:ring-2"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 mt-3">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
