"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Request failed");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title mx-auto">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="info-wrap space-y-4">
            <InfoItem icon="bi-geo-alt" title="Address" value={profile.contact.address} />
            <InfoItem icon="bi-telephone" title="Call Us" value={profile.contact.phone} />
            <InfoItem icon="bi-envelope" title="Email Us" value={profile.contact.email} />
          </div>
          <div className="mt-4">
            <iframe
              src={profile.contact.mapEmbedUrl}
              title="Map"
              style={{ border: 0, width: "100%", height: 270 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="php-email-form space-y-4"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                id="name-field"
                label="Your Name"
                error={errors.name?.message}
                {...register("name")}
              />
              <Field
                id="email-field"
                label="Your Email"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <Field
              id="subject-field"
              label="Subject"
              error={errors.subject?.message}
              {...register("subject")}
            />
            <TextAreaField
              id="message-field"
              label="Message"
              rows={10}
              error={errors.message?.message}
              {...register("message")}
            />

            <div className="text-center">
              {status === "loading" && <div className="loading text-sm">Loading</div>}
              {status === "error" && (
                <div className="error-message text-sm text-red-600">
                  {serverError || "An error occurred. Please try again."}
                </div>
              )}
              {status === "success" && (
                <div className="sent-message text-sm text-green-600">
                  Your message has been sent. Thank you!
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-4 inline-block rounded bg-[var(--accent)] px-6 py-3 text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="info-item flex items-start gap-3">
      <i className={`bi ${icon} text-2xl text-[var(--accent)]`} />
      <div>
        <h3 className="text-sm font-bold uppercase">{title}</h3>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  ...input
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="mb-2 block pb-2 text-sm font-medium" htmlFor={input.id}>
        {label}
      </label>
      <input
        {...input}
        aria-invalid={!!error}
        className={`w-full rounded border px-3 py-2 text-sm outline-none focus:border-[var(--accent)] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  error,
  ...input
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="mb-2 block pb-2 text-sm font-medium" htmlFor={input.id}>
        {label}
      </label>
      <textarea
        {...input}
        aria-invalid={!!error}
        className={`w-full rounded border px-3 py-2 text-sm outline-none focus:border-[var(--accent)] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
