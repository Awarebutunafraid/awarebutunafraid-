import type { Metadata } from "next";
import { EB_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

// Refined historic serif — used for headings AND body (replaces the old
// condensed-sans + Lora pairing). Mapped onto the existing --font-oswald
// and --font-source-serif variables so all current usages pick it up.
const ebGaramond = EB_Garamond({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const ebGaramondSerif = EB_Garamond({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Playfair Display — high-contrast didone serif for the big hero title (caps).
const playfair = Playfair_Display({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aware But Unafraid",
  description: "A movement for Americans who see clearly, speak honestly, and refuse to be silenced by fear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${ebGaramondSerif.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
