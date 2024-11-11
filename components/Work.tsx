export function Work() {
  return (
    <section id="work" className="min-h-[80vh] bg-black/50 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#E2FF3F]">WORK {'{}'}</h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-400">
          I built all of Solana's infrastructure from scratch, serving as the first SRE when Solana was a 10-person team in early 2021. I was promoted twice—to Senior SRE and then to Lead SRE—and managed a team of five. I'm retired now, just looking for good investment opportunities.
        </p>
        <div className="relative">
          <div className="absolute left-3 sm:left-4 h-full w-0.5 bg-[#E2FF3F]" />
          <div className="space-y-8 sm:space-y-10">
            {[
              { year: '2025', company: 'Investor/Advisor' },
              { year: '2021', company: 'Solana Labs' },
              { year: '2017', company: 'Trilogy' },
              { year: '2015', company: 'Freelancer' },
            ].map((item, index) => (
              <div key={index} className="relative ml-8 sm:ml-12">
                <div className="absolute -left-[2.75rem] sm:-left-[3.5rem] mt-1.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#E2FF3F]" />
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-base sm:text-lg font-bold text-[#E2FF3F]">{item.year}</div>
                  <div className="text-sm sm:text-base font-semibold">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
