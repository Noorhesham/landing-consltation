import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "../globals.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { FloatingNav } from "../components/NavBar";
import Footer from "../components/Footer";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const cinzel = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "consult",
  description: "consult",
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await (params as any);
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  console.log(locale);
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body
          className={` ${locale === "ar" ? "rtl text-right arabic" : "ltr"} ${
            locale === "ar" ? cairo.className : cinzel.className
          } antialiased`}
        >
          <div className=" bg-rose-50/30 relative">
            <FloatingNav
              navItems={[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "contact", link: "/contact" },
              ]}
            />
            {children}
          </div>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
