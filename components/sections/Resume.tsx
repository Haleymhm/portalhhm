import { resume } from "@/data/resume";

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title mx-auto">
        <h2>Resume</h2>
        <p>{resume.intro}</p>
      </div>

      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="resume-title text-xl font-bold mt-4 mb-5">
              Sumary
            </h3>
            <div className="resume-item border-l-2 border-[var(--accent)] pl-4 pb-5">
              <h4 className="text-lg font-bold uppercase">
                {resume.summary.name}
              </h4>
              <p className="fst-italic my-2 text-gray-600">
                <em>{resume.summary.intro}</em>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                {resume.summary.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {resume.groups
              .filter((g) => g.heading === "Education")
              .map((g) => g.items)
              .flat()
              .map((item) => (
                <div
                  key={item.title}
                  className="resume-item border-l-2 border-[var(--accent)] pl-4 pb-5"
                >
                  <h4 className="text-lg font-bold uppercase">
                    {item.title}
                  </h4>
                  <h5 className="text-sm text-gray-500 mt-1">
                    {item.period}
                  </h5>
                  <p className="fst-italic text-sm text-gray-600 my-2">
                    <em>{item.subtitle}</em>
                  </p>
                  {item.description && (
                    <p className="text-sm text-gray-700">{item.description}</p>
                  )}
                </div>
              ))}
          </div>

          <div>
            <h3 className="resume-title text-xl font-bold mt-4 mb-5">
              Professional Experience
            </h3>
            {resume.groups
              .filter((g) => g.heading === "Professional Experience")
              .map((g) => g.items)
              .flat()
              .map((item) => (
                <div
                  key={item.title}
                  className="resume-item border-l-2 border-[var(--accent)] pl-4 pb-5"
                >
                  <h4 className="text-lg font-bold uppercase">
                    {item.title}
                  </h4>
                  <h5 className="text-sm text-gray-500 mt-1">
                    {item.period}
                  </h5>
                  <p className="fst-italic text-sm text-gray-600 my-2">
                    <em>{item.subtitle}</em>
                  </p>
                  {item.bullets && (
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
