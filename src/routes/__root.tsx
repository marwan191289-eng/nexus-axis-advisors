import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="serif text-8xl gold-text">404</div>
        <h2 className="mt-4 serif text-2xl text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-accent hover:text-ink transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="serif text-2xl text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-ink text-bone px-5 py-2.5 text-xs uppercase tracking-[0.22em]"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-2.5 text-xs uppercase tracking-[0.22em]">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} | ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "keywords", content: "UAE law firm, corporate law Dubai, commercial litigation, corporate tax UAE, HR consultancy, business setup, Golden Visa, legal consultants Ajman, Nexus Axis" },
      { name: "theme-color", content: "#0a1226" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE.name} | ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.name },
      { name: "twitter:description", content: SITE.description },
      { title: "Nexus Axis Consultants — Strategic Legal & Corporate Counsel" },
      { property: "og:title", content: "Nexus Axis Consultants — Strategic Legal & Corporate Counsel" },
      { name: "twitter:title", content: "Nexus Axis Consultants — Strategic Legal & Corporate Counsel" },
      { name: "description", content: "Premier legal advisory, corporate strategy and business consultancy across the UAE and Egypt. The nexus of legal precision and business growth." },
      { property: "og:description", content: "Premier legal advisory, corporate strategy and business consultancy across the UAE and Egypt. The nexus of legal precision and business growth." },
      { name: "twitter:description", content: "Premier legal advisory, corporate strategy and business consultancy across the UAE and Egypt. The nexus of legal precision and business growth." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wzwj7BVu8tQja2pIx8BWybmbIK12/social-images/social-1779633218873-og-image_(1).webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/wzwj7BVu8tQja2pIx8BWybmbIK12/social-images/social-1779633218873-og-image_(1).webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: SITE.name,
          description: SITE.description,
          telephone: SITE.phone,
          email: SITE.emails.info,
          address: SITE.offices.map((o) => ({
            "@type": "PostalAddress",
            addressCountry: o.country,
            addressLocality: o.city,
            streetAddress: o.address,
          })),
          areaServed: ["AE", "EG", "GCC"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
