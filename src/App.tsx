/**
 * Norwegian Spa — medcom build
 *
 * Section order (deviating from AI default):
 *   Nav → Hero (full-bleed with stats) → SpaModelPicker [weird thing] →
 *   SwimPro → Services → WhyChoose → Showroom → Contact → Footer
 */
import { Nav }            from './components/Nav';
import { Hero }           from './components/Hero';
import { SpaModelPicker } from './components/SpaModelPicker';
import { SwimPro }        from './components/SwimPro';
import { Services }       from './components/Services';
import { WhyChoose }      from './components/WhyChoose';
import { Showroom }       from './components/Showroom';
import { Contact }        from './components/Contact';
import { Footer }         from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SpaModelPicker />
        <SwimPro />
        <Services />
        <WhyChoose />
        <Showroom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
