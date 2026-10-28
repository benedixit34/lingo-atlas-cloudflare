import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const openRoles = [
  {
    slug: "digital-product-manager",
    title: "Digital Product Manager",
    description:
      "Drive product strategy and development by translating user needs and business goals into impactful digital solutions.",
    field: "Digital Product Management",
  },
  {
    slug: "human-resource-manager",
    title: "Human Resource Manager",
    description:
      "Lead people strategy and HR operations, fostering a positive workplace culture while supporting talent development, employee engagement, and organisational growth.",
    field: "Human Resource Management",
  },
  {
    slug: "yoruba-language-instructor",
    title: "Yoruba Language Tutor",
    description:
      "Help learners discover the Yoruba language and culture through engaging, practical lessons. Teach speaking, listening, pronunciation, vocabulary, and everyday expressions in a way that makes learning accessible and enjoyable.",
    field: "Language Education",
  },
  {
    slug: "twi-teaching-professional",
    title: "Twi Teaching Professional",
    description:
      "Help learners develop their Twi language skills and connect with Ghanaian culture through engaging, practical lessons. Teach speaking, listening, pronunciation, vocabulary, and everyday expressions in a way that makes learning accessible and enjoyable.",
    field: "Language Education",
  },
  {
    slug: "urdu-teaching-professional",
    title: "Urdu Teaching Professional",
    description:
      "Help learners develop their Urdu language skills and explore the rich cultural heritage of Urdu-speaking communities through engaging, practical lessons. Teach speaking, listening, pronunciation, vocabulary, and everyday expressions in a way that makes learning accessible and enjoyable.",
    field: "Language Education",
  },
  {
    slug: "igbo-teaching-professional",
    title: "Igbo Teaching Professional",
    description:
      "Help learners develop their Igbo language skills and connect with Igbo culture and heritage through engaging, practical lessons. Teach speaking, listening, pronunciation, vocabulary, and everyday expressions in a way that makes learning accessible and enjoyable.",
    field: "Language Education",
  },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader desktopJoinEmail="aerecruitment@mylingoatlas.com" />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-orb" aria-hidden="true"></div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.7fr] lg:gap-16 lg:px-10 lg:py-24">
            <div className="relative">
              <h1 className="hero-title brand-font max-w-3xl text-5xl font-extrabold text-white sm:text-6xl lg:text-[76px]">
                Make words
                <br />
                <span className="text-amber-400">mean more.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-purple-100 sm:text-lg sm:leading-9">
                Language brings people closer. Join us in creating learning
                experiences that help people discover new languages, understand
                different cultures, and connect with the world.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#open-positions"
                  className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#61008f] transition hover:bg-purple-50"
                >
                  Explore the opportunity
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14m-7-7 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hidden justify-center lg:flex" aria-hidden="true">
              <div className="relative flex h-75 w-75 items-center justify-center rounded-[48px] border border-white/20 bg-white/8 -rotate-6">
                <div className="absolute inset-5 rounded-[36px] border border-white/15"></div>
                <div className="absolute -right-5 -top-4.5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl text-white backdrop-blur-md">
                  文
                </div>
                <div className="absolute -bottom-4.5 -left-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl text-white backdrop-blur-md">
                  A
                </div>
                <div className="hero-decoration text-4xl font-bold text-white">あ</div>
                <div className="absolute bottom-12 left-0 right-0 text-center text-sm font-semibold tracking-[0.25em] text-purple-100">
                  WORDS CONNECT US
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section
          id="open-positions"
          className="bg-[#fcfaff] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
          aria-labelledby="positions-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="positions-heading"
                  className="brand-font mt-3 text-3xl font-extrabold tracking-[-0.045em] text-[#191321] sm:text-4xl"
                >
                  Find your place on the team
                </h2>
              </div>
            </div>

            <div className="jobs-grid">
              {openRoles.map((role) => (
                <article className="job-card" key={role.slug}>
                  <div className="job-card-body">
                    <h3 className="brand-font text-2xl font-extrabold tracking-[-0.045em] text-[#191321]">
                      {role.title}
                    </h3>

                    <p className="job-desc mt-3 text-sm leading-7 text-[#716a7c] sm:text-[15px]">
                      {role.description}
                    </p>

                    <div className="job-meta-row flex flex-wrap gap-2.5">
                      <span className="job-meta">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          aria-hidden="true"
                        >
                          <rect x="3" y="7" width="18" height="14" rx="2" />
                          <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
                        </svg>
                        Full-time
                      </span>

                      <span className="job-meta">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          aria-hidden="true"
                        >
                          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        Onsite
                      </span>

                      <span className="job-meta">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                        </svg>
                        {role.field}
                      </span>
                    </div>

                    <div className="job-cta">
                      <Link href={`/careers/${role.slug}#apply`} className="apply-button">
                        Apply for this role
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
