import type { Metadata } from "next";
import { i18n } from "@/i18n-config";
import Link from "next/link";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui";
import StoreProvider from "@/store/StoreProvider";
import { poppins } from "@/components/fonts";
import "./globals.css";
import { DesktopNav } from "@/components/site/Navigation/DesktopNav";
import { Navigation } from "@/components/site/Navigation";

export const metadata: Metadata = {
  title: "Hotel Quinto Nivel RD",
  description:
    "Discover unmatched comfort and elegance at Hotel Quinto Nivel RD. Perfect for solo travelers, families, and romantic getaways. Book your stay now!",
  keywords:
    "Hotel Quinto Nivel, luxury hotel Salcedo, comfortable accommodations, family-friendly hotel, romantic getaways, hotel reservations, Salcedo tourism",
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
      <body className={`${poppins.className} antialiased`}>
        <StoreProvider lastUpdate={new Date().getTime()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Navigation */}
            <Navigation lang={lang} />
            {/* Page Content */}
            {children}
            {/* Footer */}
            <p>Footer</p>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
