export default function QoorkWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <a href="#home" className="text-2xl font-semibold tracking-tight text-slate-900">
              Qoork <span className="text-sky-700">Web Services</span>
            </a>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Services</a>
            <a href="#process" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Process</a>
            <a href="#about" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Book a Free Call
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800">
                Modern websites for clinics and service businesses
              </div>
              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 lg:text-6xl">
                Websites that bring you more clients.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Qoork Web Services builds clean, high-converting websites for businesses that need a stronger online presence, better credibility, and more qualified leads.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-sky-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Get Your Free Website Audit
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 px-6 py-4 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  See Services
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-2xl font-semibold text-slate-950">Fast</p>
                  <p className="mt-1 text-sm text-slate-600">Efficient builds and clear timelines.</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-950">Clean</p>
                  <p className="mt-1 text-sm text-slate-600">Professional design that builds trust.</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-950">Focused</p>
                  <p className="mt-1 text-sm text-slate-600">Built to convert visitors into leads.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-slate-300" />
                    <span className="h-3 w-3 rounded-full bg-slate-300" />
                    <span className="h-3 w-3 rounded-full bg-slate-300" />
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
                    <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                      <p className="text-sm font-medium text-slate-500">Sample homepage preview</p>
                    </div>
                    <div className="space-y-6 p-6">
                      <div className="space-y-3">
                        <div className="h-4 w-24 rounded bg-sky-100" />
                        <div className="h-6 w-3/4 rounded bg-slate-200" />
                        <div className="h-6 w-2/3 rounded bg-slate-200" />
                        <div className="h-4 w-full rounded bg-slate-100" />
                        <div className="h-4 w-5/6 rounded bg-slate-100" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <div className="h-4 w-16 rounded bg-slate-200" />
                          <div className="mt-3 h-3 w-full rounded bg-slate-100" />
                          <div className="mt-2 h-3 w-4/5 rounded bg-slate-100" />
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <div className="h-4 w-16 rounded bg-slate-200" />
                          <div className="mt-3 h-3 w-full rounded bg-slate-100" />
                          <div className="mt-2 h-3 w-4/5 rounded bg-slate-100" />
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <div className="h-4 w-16 rounded bg-slate-200" />
                          <div className="mt-3 h-3 w-full rounded bg-slate-100" />
                          <div className="mt-2 h-3 w-4/5 rounded bg-slate-100" />
                        </div>
                      </div>
                      <div className="rounded-2xl bg-sky-700 px-5 py-4 text-center text-sm font-semibold text-white">
                        Book an Appointment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
              Built for businesses that need a better online presence.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you need a simple landing page or a polished multi-page website, Qoork delivers websites designed to look professional and generate inquiries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Landing Pages',
                text: 'Single-page websites designed for offers, services, and direct lead generation.',
              },
              {
                title: 'Business Websites',
                text: 'Professional multi-page websites that build authority and trust online.',
              },
              {
                title: 'Website Redesigns',
                text: 'Transform outdated websites into modern experiences that convert better.',
              },
              {
                title: 'Ongoing Support',
                text: 'Maintenance, updates, and improvements to keep your site performing well.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-sky-50" />
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Process</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                A simple process from idea to launch.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['01', 'Discovery', 'We understand your business, audience, and website goals.'],
                ['02', 'Structure', 'We organize the content and design a clear, effective layout.'],
                ['03', 'Build', 'Your website is developed with a clean and responsive experience.'],
                ['04', 'Launch', 'After revisions and approval, your site goes live and ready to convert.'],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-sky-700">{number}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">About Qoork</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                A modern web partner for businesses that want to grow.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Qoork Web Services helps businesses build credibility online through websites that are clean, strategic, and easy to use. The goal is simple: create a site that not only looks good, but also helps your business win more clients.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We focus on clarity, trust, and performance, so your website supports your business instead of holding it back.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Why clients choose us</p>
              <div className="mt-8 space-y-6">
                {[
                  'Professional, modern design',
                  'Clear communication and efficient delivery',
                  'Websites built with business goals in mind',
                  'Strong focus on usability and conversion',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-300" />
                    <p className="text-base leading-7 text-slate-100">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Ready to improve your website?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Let’s talk about your business, your goals, and how a better website can help you get more clients.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@qoorkweb.com"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:opacity-90"
              >
                hello@qoorkweb.com
              </a>
              <a
                href="https://wa.me/5500000000000"
                className="rounded-2xl border border-slate-700 px-6 py-4 text-sm font-semibold text-white transition hover:border-slate-500"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Qoork Web Services. All rights reserved.</p>
          <p>Built for growth, clarity, and conversion.</p>
        </div>
      </footer>
    </div>
  );
}
