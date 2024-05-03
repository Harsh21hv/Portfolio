import './app.scss';
import Contact from './Components/navbar/contact/Contact';
import Hero from './Components/navbar/hero/Hero';
import Navbar  from "./Components/navbar/Navbar"
import Parallax from './Components/navbar/parallax/Parallax';
import Portfolio from './Components/navbar/portfolio/Portfolio';
import Services from './Components/navbar/services/Services';

const App = () => {
  return (
    <div>
      <section id='About'>
        <Navbar />
        <Hero />
      </section>
      <section id='Skills'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />

      <section id='Contact me'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
