import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import CountriesTicker from './components/CountriesTicker';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import ProductCollection from './components/ProductCollection';
import ProcessFlow from './components/ProcessFlow';
import TrustSection from './components/TrustSection';
import ExportLogistics from './components/ExportLogistics';
import Testimonials from './components/Testimonials';
import Applications from './components/Applications';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <CountriesTicker />
        <AboutUs />
        <WhyChooseUs />
        <ProductCollection />
        <ProcessFlow />
        <TrustSection />
        <ExportLogistics />
        <Testimonials />
        <Applications />
        <Newsletter />
        <FAQ />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
