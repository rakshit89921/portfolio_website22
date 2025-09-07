import { ThemeProvider } from './hooks/useTheme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
}

export default App;