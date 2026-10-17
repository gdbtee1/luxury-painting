import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import Expertise from "../components/home/Expertise";
import SelectedWork from "../components/home/SelectedWork";
import Craftsmanship from "../components/home/Craftsmanship";
import ClosingStatement from "../components/home/ClosingStatement";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Expertise />
      <SelectedWork />
      <Craftsmanship />
      <ClosingStatement />
      <Footer />
    </main>
  );
}
