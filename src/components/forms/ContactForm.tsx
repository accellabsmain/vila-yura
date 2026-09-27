"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getContactSchema, ContactFormData } from "@/lib/validations/contact";

interface ContactFormProps {
  messages: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    submit?: string;
    submitting?: string;
    success?: string;
    errors?: Record<string, string>;
    [key: string]: unknown;
  };
}

export function ContactForm({ messages }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const schema = getContactSchema(messages.errors);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form data submitted:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-2xl mx-auto glass-panel gold-border-glow p-6 sm:p-10 rounded-3xl">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-gold-dark">
          {messages.name}
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full bg-white/80 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          placeholder={messages.name}
        />
        {errors.name && <span className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-gold-dark">
          {messages.email}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full bg-white/80 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          placeholder={messages.email}
        />
        {errors.email && <span className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs font-semibold tracking-widest uppercase text-gold-dark">
          {messages.subject}
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full bg-white/80 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          placeholder={messages.subject}
        />
        {errors.subject && <span className="text-red-500 text-xs font-medium mt-1">{errors.subject.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-gold-dark">
          {messages.message}
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full bg-white/80 border border-gold/30 rounded-xl px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
          placeholder={messages.message}
        />
        {errors.message && <span className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 bg-gradient-to-r from-gold via-gold-light to-gold text-charcoal-dark font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-gold/20 hover:scale-[1.02] transition-all disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? messages.submitting : messages.submit}
      </button>

      {isSuccess && (
        <div className="p-4 bg-emerald-500/10 text-emerald-800 border border-emerald-500/30 rounded-xl text-center text-sm font-medium">
          {messages.success}
        </div>
      )}
    </form>
  );
}
