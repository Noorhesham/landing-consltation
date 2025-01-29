"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FormInput from "./FormItem";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { EMAIL, PHONE, PUBLI_KEY, ServiceId, Template } from "../constants";
import { useLocale, useTranslations } from "next-intl";

const servicesArray = [
  { en: "Digital Transformation", ar: "التحول الرقمي" },
  { en: "PMO Services", ar:"مكتب إدارة المشاريع (PMO)" },
  { en: "Tech Outsourcing", ar: "الاستعانة بالتكنولوجيا الخارجية" },
];

const messageSchema = z.object({
  from_name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  message: z.string().nonempty("Message is required"),
  company_name: z.string().optional(),
  job_title: z.string().optional(),
  services: z.array(z.string()).optional(),
});

const ContactForm = ({ services }: { services: string }) => {
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      services: services ? [services] : [],
    },
  });

  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (data: any) => {
    setPending(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
    }
  };

  const t = useTranslations(); // Use translations
  const locale = useLocale();
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <FormInput name="from_name">
              <Input
                type="text"
                placeholder={t("yourName")}
                {...form.register("from_name")}
                className="w-full bg-white text-black border-gray-300"
              />
            </FormInput>
            <FormInput name="email">
              <Input
                type="email"
                placeholder={t("yourEmail")}
                {...form.register("email")}
                className="w-full bg-white text-black border-gray-300"
              />
            </FormInput>
          </div>

          <FormInput name="phone">
            <Input
              type="text"
              placeholder={t("yourPhoneNumber")}
              {...form.register("phone")}
              className="w-full bg-white text-black border-gray-300"
            />
          </FormInput>

          <FormInput name="company_name">
            <Input
              type="text"
              placeholder={t("yourCompanyName")}
              {...form.register("company_name")}
              className="w-full bg-white text-black border-gray-300"
            />
          </FormInput>

          <FormInput name="job_title">
            <Input
              type="text"
              placeholder={t("yourJobTitle")}
              {...form.register("job_title")}
              className="w-full bg-white text-black border-gray-300"
            />
          </FormInput>

          <FormInput name="services">
            <div className="flex flex-wrap gap-4">
              {servicesArray.map((service, index) => (
                <label key={index} className="flex  text-black items-center space-x-2">
                  <input
                    type="checkbox"
                    value={service.en} // or use service.ar if Arabic is preferred
                    {...form.register("services")}
                    className="h-5 w-5"
                  />
                  <span>{service[locale]}</span> {/* or use {service.ar} for Arabic */}
                </label>
              ))}
            </div>
          </FormInput>

          <FormInput name="message">
            <Textarea
              placeholder={t("yourMessage")}
              {...form.register("message")}
              className="w-full bg-white text-black border-gray-300"
            />
          </FormInput>

          <Button className="bg-blue-500 text-white py-2 hover:bg-blue-400 transition" disabled={pending}>
            {pending ? t("sending") : t("sendOut")}
          </Button>

          {success && <p className="text-green-500 mt-4">{t("messageSent")}</p>}
          {error && <p className="text-red-500 mt-4">{t("messageError")}</p>}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
