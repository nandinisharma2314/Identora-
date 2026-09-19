import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | Harshika Jain`,
    description: service.tagline,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <article>
      <section className="bg-plum py-20 text-cream md:py-24">
        <div className="mx-auto max-w-content px-6">
          <Link href="/#services" className="text-sm text-cream/60 hover:text-coral">
            ← Back to services
          </Link>

          <p className="mt-6 text-sm text-gold">Service</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-xl text-cream/70">{service.intro}</p>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-coral">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-cream/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <p className="text-sm text-coral">{service.includedHeading}</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {service.itemsHeading}
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/10 p-6"
              >
                <h3 className="font-display text-lg text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream md:py-24">
        <div className="mx-auto max-w-content px-6">
          <p className="text-sm text-gold">How It Works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {service.processHeading}
          </h2>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="border-l-2 border-coral pl-5">
                <span className="font-display text-2xl text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-cream/60">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {service.tools && (
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-content px-6">
            <p className="text-sm text-coral">{service.toolsHeading}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/10 px-4 py-2 text-sm text-ink/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-plum py-20 text-cream md:py-24">
        <div className="mx-auto max-w-content px-6 text-center">
          <h2 className="font-display text-3xl italic sm:text-4xl">
            {service.closingHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            {service.closingText}
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-coral px-8 py-3.5 text-sm text-cream transition-colors hover:bg-gold"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </article>
  );
}
