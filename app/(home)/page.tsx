import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <main className="page-background min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-8 xl:px-20">
        {/* Introduction and newsletter */}
        <section className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <div className="mb-8 max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              A new world awaits
            </p>

            <h1 className="text-[60px] font-bold leading-tight tracking-tighter sm:text-6xl xl:text-7xl">
              Lingo Atlas
              <span className="mt-2 block text-amber-400">Is Coming</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-neutral-200 sm:text-base lg:mx-0">
              Discover a new way to explore languages and cultures. Join our
              newsletter and be among the first to know when Lingo Atlas
              launches.
            </p>
          </div>

          {/* Newsletter form */}
          <NewsletterForm />
        </section>

        {/* Hero image */}
        <section className="flex items-center justify-center lg:min-h-[600px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/main.webp"
            alt="Discover the world of languages with Lingo Atlas"
            fetchPriority="high"
            decoding="async"
            className="hero-image h-64 w-full max-w-2xl rounded-2xl object-cover shadow-2xl sm:h-96 lg:h-[min(78vh,800px)] lg:max-w-none"
          />
        </section>
      </div>
    </main>
  );
}
