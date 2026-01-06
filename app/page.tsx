import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      <OurStory />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}
