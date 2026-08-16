import Hero from "../components/Hero";
import About from "../components/About";
import Clubs from "../components/Clubs";
import EventsCalendar from "../components/EventsCalendar";
import Gallery from "../components/Gallery";
import People from "../components/People";
import ContactSection from "../components/ContactSection";

/**
 * Page order. Light (paper) and dark (ink) sections alternate so the page reads
 * like a magazine instead of one long scroll.
 */
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Clubs />
      <EventsCalendar />
      <Gallery />
      <People />
      <ContactSection />
    </main>
  );
}
