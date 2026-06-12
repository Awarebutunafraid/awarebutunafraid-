import type { Metadata } from "next";
import { EB_Garamond, IM_Fell_English } from "next/font/google";
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

// Antique inked type (Trattatello-adjacent) — used only for the big hero title.
const imFellEnglish = IM_Fell_English({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${ebGaramond.variable} ${ebGaramondSerif.variable} ${imFellEnglish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
