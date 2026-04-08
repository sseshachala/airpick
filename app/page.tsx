import WaitlistForm from "../components/waitlist-form";

const reasons = [
  {
    title: "Search fatigue is real",
    body: "Most flight sites make you compare endless combinations of price, stops, timing, and airline tradeoffs. AirPick is built to remove that mental load.",
  },
  {
    title: "Cheap is not always better",
    body: "The lowest fare can mean bad layovers, longer travel time, and more stress. AirPick helps you see the best overall choice, not just the lowest number.",
  },
  {
    title: "People want clarity, not tabs",
    body: "Instead of bouncing between airline sites, aggregators, and alerts, travelers need one calm place that explains the best options simply.",
  },
];

const steps = [
  {
    title: "Search once",
    body: "Enter your route and date in seconds.",
  },
  {
    title: "We analyze",
    body: "AirPick compares price, duration, stops, and tradeoffs behind the scenes.",
  },
  {
    title: "You choose confidently",
    body: "See the top picks instantly, with a clear reason for each one.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight">AirPick</div>
          <a
            href="#waitlist"
            className="rounded-full border border-black px-4 py-2 text-sm transition hover:bg-black hover:text-white"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-black/10 px-3 py-1 text-xs text-black/60">
              AI flight decision assistant
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Booking flights should not feel like work.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/60 md:text-lg">
              AirPick helps you skip the noise. Instead of forcing you to sort through pages of fares, it highlights the best flight options with clear reasons you can trust.
            </p>
            <div id="waitlist">
              <WaitlistForm />
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-black/50">
              <span>Fewer tabs</span>
              <span>Faster decisions</span>
              <span>Clear tradeoffs</span>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-[#fafafa] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-6">
            <div className="rounded-[24px] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">IAH → JFK</p>
                  <p className="text-sm text-black/45">Tue, May 12</p>
                </div>
                <div className="rounded-full bg-black px-3 py-1 text-xs text-white">
                  Top picks ready
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-black bg-black p-4 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/70">Best Overall</p>
                      <h3 className="mt-1 text-lg font-semibold">United · 5h 18m · 1 stop</h3>
                    </div>
                    <p className="text-xl font-semibold">$326</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Best balance of total price, travel time, and stop quality.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Cheapest", "$279", "Lower fare, longer trip"],
                    ["Fastest", "$388", "Shortest total travel time"],
                    ["Least Stressful", "$341", "Safer connection timing"],
                    ["Smart Alternative", "$309", "Saves money with minor tradeoff"],
                  ].map(([title, price, body]) => (
                    <div key={title} className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-sm font-semibold">{price}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-black/55">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#fcfcfc]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm text-black/45">Why this matters</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Flight booking tools are good at showing options. They are not good at helping people decide.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/10 bg-white p-6">
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm text-black/45">What AirPick does</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A calmer way to choose the right flight.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
              AirPick is designed for travelers who want speed, trust, and clarity. It compares flight options behind the scenes and brings forward the few that are actually worth your attention.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-black/60">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-4 text-center">
        <div className="rounded-[32px] border border-black/10 bg-black px-6 py-14 text-white md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Less searching. Better decisions.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            AirPick helps travelers move from comparison overload to a confident choice, without the usual friction of flight booking tools.
          </p>
          <WaitlistForm dark />
        </div>
      </section>

      <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-black/35">
        © {new Date().getFullYear()} AirPick.ai
      </footer>
    </main>
  );
}
