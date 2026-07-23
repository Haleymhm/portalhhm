import { profile } from "@/data/profile";

export default function About() {
  const left = profile.info.slice(0, 4);
  const right = profile.info.slice(4);

  return (
    <section id="about" className="about section">
      <div className="container section-title mx-auto">
        <h2>About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-full rounded shadow"
            width={400}
            height={400}
          />
        </div>
        <div className="md:col-span-8">
          <h2 className="text-2xl font-bold uppercase">{profile.title}</h2>
          <p className="fst-italic py-3 text-gray-600">
            {profile.bio[0]}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <ul className="space-y-2">
              {left.map((i) => (
                <li key={i.label} className="text-sm">
                  <i className={`bi ${i.icon} mr-1 text-[var(--accent)]`} />
                  <strong>{i.label}:</strong> <span>{i.value}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {right.map((i) => (
                <li key={i.label} className="text-sm">
                  <i className={`bi ${i.icon} mr-1 text-[var(--accent)]`} />
                  <strong>{i.label}:</strong> <span>{i.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="py-3 text-gray-700">{profile.bio[1]}</p>
        </div>
      </div>
    </section>
  );
}
