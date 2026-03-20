import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alfitofebriansyah.blog"),
  title: {
    default: "Alfito Febriansyah — Software Engineer & QA",
    template: "%s | Alfito Febriansyah",
  },
  description:
    "Personal portfolio and blog of Alfito Febriansyah — Software Engineer and Quality Assurance Engineer based in Tangerang Selatan, Indonesia. Specializing in frontend development, QA, and AI agent development.",
  keywords: [
    "Alfito Febriansyah",
    "Software Engineer",
    "Quality Assurance",
    "Frontend Developer",
    "Next.js",
    "React",
    "QA Engineer",
    "Indonesia",
    "Tangerang",
    "Portfolio",
    "Blog",
  ],
  authors: [
    { name: "Alfito Febriansyah", url: "https://www.alfitofebriansyah.blog" },
  ],
  creator: "Alfito Febriansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.alfitofebriansyah.blog",
    siteName: "Alfito Febriansyah",
    title: "Alfito Febriansyah — Software Engineer & QA",
    description:
      "Personal portfolio and blog of Alfito Febriansyah — Software Engineer and Quality Assurance Engineer based in Tangerang Selatan, Indonesia.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Alfito Febriansyah — Software Engineer & QA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfito Febriansyah — Software Engineer & QA",
    description:
      "Personal portfolio and blog of Alfito Febriansyah — Software Engineer and Quality Assurance Engineer.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.alfitofebriansyah.blog",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch untuk resource eksternal */}
        <link rel="dns-prefetch" href="https://api.resend.com" />
        {/* Favicon — Apple */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />

        {/* Favicon — Android & standard */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Manifest & MS */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alfito Febriansyah",
              url: "https://www.alfitofebriansyah.blog",
              jobTitle: "Software Engineer & Quality Assurance Engineer",
              worksFor: {
                "@type": "Organization",
                name: "PT Bank CIMB Niaga Tbk",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tangerang Selatan",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              sameAs: [
                "https://github.com/alfitof",
                "https://linkedin.com/in/alfito-febriansyah",
              ],
              knowsAbout: [
                "Software Engineering",
                "Quality Assurance",
                "Frontend Development",
                "React",
                "Next.js",
                "AI Agent Development",
              ],
            }),
          }}
        />
      </head>
      <body className={GeistMono.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
