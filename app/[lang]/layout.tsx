import { poppins } from "@/components/fonts";
import { i18n, Locale } from "@/i18n-config";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Quinto Nivel RD",
  description:
    "Discover unmatched comfort and elegance at Hotel Quinto Nivel RD. Perfect for solo travelers, families, and romantic getaways. Book your stay now!",
  keywords:
    "Hotel Quinto Nivel, luxury hotel Salcedo, comfortable accommodations, family-friendly hotel, romantic getaways, hotel reservations, Salcedo tourism",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto"
    >
      <body className={`${poppins.className} h-dvh antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
