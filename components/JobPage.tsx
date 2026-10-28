import type { ReactNode } from "react";
import type { Job, ListItem } from "@/lib/jobs";
import { ApplicationProvider, ApplyButton } from "./ApplicationModal";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

function renderItem(item: ListItem) {
  if (typeof item === "string") return item;
  return (
    <>
      <strong>{item.strong}</strong> {item.text}
    </>
  );
}

const ARROW_ICON = (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const chipIcon = (children: ReactNode) => (
  <svg
    className="h-4 w-4 text-amber-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CHIP_ICONS = [
  chipIcon(
    <>
      <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  chipIcon(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 2v4m8-4v4M3 10h18" />
    </>
  ),
  chipIcon(
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
];

export default function JobPage({ job }: { job: Job }) {
  return (
    <ApplicationProvider
      position={job.formPosition}
      coverLetterPlaceholder={job.coverLetterPlaceholder}
    >
      <SiteHeader desktopJoinEmail="careers@lingoatlas.com" />

      <main>
        {/* Hero */}
        <section className="hero text-white">
          <div className="hero-ring" aria-hidden="true"></div>

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="hero-title brand-font mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                {job.headline.lead} <span className="hero-highlight">{job.headline.highlight}</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-purple-100 sm:text-lg">
                {job.heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {job.chips.map((chip, index) => (
                  <span className="detail-chip" key={index}>
                    {CHIP_ICONS[index]}
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <ApplyButton className="apply-button">
                  Apply for this role
                  {ARROW_ICON}
                </ApplyButton>
              </div>
            </div>
          </div>
        </section>

        {/* Job details */}
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            {/* Main description */}
            <div className="max-w-3xl space-y-9">
              <section className="content-section">
                <div className="section-heading">
                  <div>
                    <h2 className="brand-font text-xl font-bold tracking-tight sm:text-2xl">
                      {job.aboutHeading}
                    </h2>
                    <p className="mt-4 text-sm leading-8 text-[#5f566a] sm:text-base">
                      {job.about}
                    </p>
                  </div>
                </div>
              </section>

              {job.sections.map((section) => (
                <section className="content-section" key={section.heading}>
                  <div className="section-heading">
                    <div className="min-w-0 flex-1">
                      <h2 className="brand-font text-xl font-bold tracking-tight sm:text-2xl">
                        {section.heading}
                      </h2>

                      <ul className="content-list">
                        {section.items.map((item, index) => (
                          <li key={index}>{renderItem(item)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}

              {/* Application */}
              <section id="apply" className="application-card scroll-mt-28 p-6 sm:p-8">
                <h2 className="brand-font mt-3 text-2xl font-extrabold tracking-tight">
                  Ready to apply?
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#5f566a]">{job.applyText}</p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <ApplyButton className="apply-button w-full sm:w-auto">
                    Submit application
                    {ARROW_ICON}
                  </ApplyButton>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-[#e9e3ed] bg-[#fcfafc] p-6 sm:p-7 lg:sticky lg:top-28">
              <h2 className="brand-font text-lg font-bold">Role overview</h2>

              <div className="mt-6 space-y-5">
                {(
                  [
                    ["Position", job.overview.position],
                    ["Location", job.overview.location],
                    ["Work arrangement", job.overview.arrangement],
                    ["Field", job.overview.field],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#716a7c]">
                      {label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[#e9e3ed] pt-6">
                <p className="text-sm leading-7 text-[#716a7c]">
                  Have a question about the role or application process?
                </p>
                <a
                  href={job.enquiryMailto}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900"
                >
                  Contact the team
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </ApplicationProvider>
  );
}
