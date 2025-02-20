import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Ms_Madi } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tippsy",
  description: "Find your next drink date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header className={msMadi.className} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
