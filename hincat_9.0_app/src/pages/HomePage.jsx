import Navbar from '../components/homePage_components/Navbar';
import Hero_Section from '../components/homePage_components/Hero_Section';
import Metrics from '../components/homePage_components/Metrics';
import Features from '../components/homePage_components/Features';
import Pipeline_Diagram from '../components/homePage_components/Pipeline_Diagram';
import Footer from '../components/homePage_components/Footer';
import BackgroundDecor from '../components/homePage_components/BackgroundDecor';

function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <BackgroundDecor />
      <Navbar />
      <main className="relative flex-1 overflow-x-hidden pt-16">
        <Hero_Section />
        <Metrics />
        <Features />
        <Pipeline_Diagram />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
