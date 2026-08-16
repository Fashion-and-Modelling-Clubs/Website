/**
 * SITE COPY
 * =========
 * All the wording that belongs to the site itself rather than to a club:
 * navigation, headings, and the neutral editorial text. Components hold no
 * words — edit them here.
 */

export const site = {
  brand: {
    line1: "NITJ",
    line2: "Fashion & Modelling Clubs",
    institute: "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
    year: "2026",
  },

  nav: [
    { id: "about", label: "About" },
    { id: "clubs", label: "Clubs" },
    { id: "events", label: "Events" },
    { id: "archive", label: "Archive" },
    { id: "people", label: "People" },
    { id: "contact", label: "Contact" },
  ],


  hero: {
    eyebrow: "NIT Jalandhar",
    lineOne: "Fashion",
    ampersand: "&",
    lineTwo: "Modelling",
    tagline: "Styling, movement and performance, made by students on campus.",
    scroll: "Scroll",
  },

  about: {
    label: "About",
    heading: ["Fashion", "is a", "language."],
    lead:
      "Before anyone speaks on stage, something has already been said — by a silhouette, by a walk, by the choice to stand still while the music moves.",
    body:
      "Here it means practising confidence in public: deciding how you want to be seen, then holding that under lights in front of people you sit next to in class the next morning. What reaches the audience lasts eight minutes. What builds it takes a semester.",
    vocabulary: ["Expression", "Confidence", "Styling", "Movement", "Storytelling"],

     sponsors: [
    "Lakmé",
    "Kapsons",
    "IJM Toyota",
  ],
  },



  clubs: {
    label: "Clubs",
    heading: "The clubs",
    intro: "Reverie and Merveilleux, both run by students, both on this stage.",
    
    ideologyHeading: "What we believe",
  },

  events: {
    label: "Events",
    heading: "The stage",
    intro: "Dates appear here as soon as they are confirmed.",
    tba: "Date TBA",
    empty: "No events match this filter yet.",
  },

  archive: {
    label: "Archive",
    heading: "The archive",
    intro: "The ramp, the stage, and the rooms in between.",
    empty: "No photographs match this filter yet.",
  },

  people: {
    label: "People",
    heading: ["The people", "behind the stage"],
    facultyHeading: "Faculty coordinators",
    studentHeading: "Student coordinators",
  },

  contact: {
    label: "Contact",
    heading: "Get in touch",
    lead: "Want to collaborate, participate, perform, model, contribute or know more?",
    sub: "Drop us a message on Instagram — that reaches us fastest.",
    cta: "Drop a message",
    studentHeading: "Student coordinators",
    facultyHeading: "Faculty coordinators",
    callLabel: "Call : +91",
  },

  footer: {
    columns: [
      { label: "About", href: "#about" },
      { label: "Clubs", href: "#clubs" },
      { label: "Events", href: "#events" },
      { label: "Archive", href: "#archive" },
      { label: "Contact", href: "#contact" },
    ],
    note: "A student-run website for the fashion and modelling clubs of NIT Jalandhar.",
  },

  placeholder: {
    line1: "Image",
    line3: "To be added",
  },
};

export default site;
