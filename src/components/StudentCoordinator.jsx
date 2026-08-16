import SmartImage from "./SmartImage";

/** One student card — identical for both clubs, only the data differs. */
export default function StudentCoordinator({ person }) {
  return (
    <article className="group flex flex-col items-center text-center">
      <SmartImage
        src={person.image}
        alt={`Portrait of ${person.name}`}
        label={person.name}
        ratio="3 / 4"
        className="w-40 sm:w-48"
        imgClassName="group-hover:scale-[1.03]"
      />

      <p className="mt-5 text-[10px] uppercase tracking-label text-ash">{person.clubName}</p>

      <h4 className="mt-2 font-display text-2xl font-light sm:text-3xl">{person.name}</h4>

      <p className="mt-1 text-[10px] uppercase tracking-label text-brass">{person.role}</p>

    <div className="mt-4 flex flex-col gap-2 border-t border-paper/10 pt-4">
  <a
    href={`tel:+91${person.phone}`}
    className="link-underline w-fit text-sm font-light text-paper/75 hover:text-paper"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-paper/45">
      Phone
    </span>
    {person.phoneDisplay || person.phone}
  </a>

  <a
    href={`mailto:${person.email}`}
    className="link-underline w-fit break-all text-sm font-light text-paper/75 hover:text-paper"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-paper/45">
      Gmail
    </span>
    {person.email}
  </a>
</div>
    </article>
  );
}
