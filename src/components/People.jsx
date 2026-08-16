import { site } from "../data/site";
import { facultyCoordinators, studentCoordinators } from "../data/coordinators";
import SectionHeading from "./SectionHeading";
import FacultyCoordinator from "./FacultyCoordinator";
import StudentCoordinator from "./StudentCoordinator";
import Reveal from "./Reveal";

export default function People() {
  return (
    <section id="people" className="bg-ink py-14 sm:py-20">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <SectionHeading label={site.people.label} lines={site.people.heading} />

        <div className="mt-12">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="eyebrow">{site.people.facultyHeading}</h3>
              <span className="h-px flex-1 rule" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {facultyCoordinators.map((person, i) => (
              <Reveal key={person.id} delay={0.06 * i}>
                <FacultyCoordinator person={person} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="eyebrow">{site.people.studentHeading}</h3>
              <span className="h-px flex-1 rule" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {studentCoordinators.map((person, i) => (
              <Reveal key={person.id} delay={0.06 * i}>
                <StudentCoordinator person={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
