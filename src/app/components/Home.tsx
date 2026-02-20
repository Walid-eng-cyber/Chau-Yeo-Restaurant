import { Hero } from './Hero';
import { MenuSection } from './MenuSection';
import { About } from './About';
import { Footer } from './Footer';

export function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <About />
      <Footer />
    </>
  );
}
