import { poppins } from "@/components/fonts";
import { i18n } from "@/i18n-config";
import { ThemeProvider } from "@/providers/ThemeProvider";
import StoreProvider from "@/store/StoreProvider";
import type { Metadata } from "next";
import type { Viewport } from "next";

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

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto"
    >
      <body className={`${poppins.className} h-dvh antialiased`}>
        <StoreProvider lastUpdate={new Date().getTime()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
