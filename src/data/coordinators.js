import { images } from "./images";

/**
 * COORDINATORS
 * ============
 * Exactly as supplied — nothing added, nothing guessed. `department` and
 * `designation` are blank where they were not provided; type them in and they
 * appear on the site.
 *
 * `phone` is the digits used by the tap-to-call link (no spaces).
 * `phoneDisplay` is what people read.
 */

export const facultyCoordinators = [
  {
    id: "shefali-arora-chouhan",
    name: "Dr. Shefali Arora Chouhan",
    role: "Faculty Coordinator",
    department: "",
    designation: "",
    phone: "9888813400",
    phoneDisplay: "98888 13400",
    email: "chouhansa@nitj.ac.in",
    image: images.coordinators.faculty.shefali,
  },
  {
    id: "manjeet-singh",
    name: "Dr. Manjeet Singh",
    role: "Faculty Coordinator",
    department: "Electronics and Communication Engineering",
    designation: "",
    phone: "9882744651",
    phoneDisplay: "98827 44651",
    email: "singhm@nitj.ac.in",
    image: images.coordinators.faculty.manjeet,
  },
];

export const studentCoordinators = [
  {
    id: "vikram-singh",
    club: "reverie",
    clubName: "Reverie",
    name: "Vikram Singh",
    role: "Student Coordinator",
    phone: "8837510630",
    phoneDisplay: "88375 10630",
    email: "vikrams.ce.23@nitj.ac.in",
    image: images.coordinators.students.reverie.vikram,
  },
  {
    id: "pushpendra",
    club: "merveilleux",
    clubName: "Merveilleux",
    name: "Pushpendra",
    role: "Student Coordinator",
    phone: "9039740547",
    phoneDisplay: "90397 40547",
    email: "pushpendraj.ee.23@nitj.ac.in",
    image: images.coordinators.students.merveilleux.pushpendra,
  },
];

export default { facultyCoordinators, studentCoordinators };
