import { ThemeProvider } from "@/components/ui/theme-provider";
import { Urbanist } from "next/font/google";
import structuredData from "../structured-data.json";
import Footer from "./Footer";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import Navbar from "./Navbar";
import ToasterComponent from "./ToasterComponent";

export const metadata = {
  title: "Mostafa Meerzad | Full Stack Developer",
  description:
    "Portfolio of Mostafa Meerzad - React, Node.js, MongoDB, Tailwind, and more.",
  keywords: [
    "Mostafa Meerzad",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Mostafa Meerzad | Full Stack Developer",
    description:
      "Showcasing beautiful, real-world projects built with modern web tech.",
    url: "https://portfolio-navy-seven-11.vercel.app",
    siteName: "Mostafa Meerzad Portfolio",
    images: [
      {
        url: "/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Meerzad | Full Stack Developer",
    description: "Explore Mostafa's projects and experience.",
    images: ["/preview-image.webp"],
  },
  metadataBase: new URL("https://portfolio-navy-seven-11.vercel.app"),
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ToasterComponent />
        <LayoutWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="px-3 md:px-8 lg:px-12">{children}</main>
            <Footer />
          </ThemeProvider>
        </LayoutWrapper>
      </body>
    </html>
  );
}
