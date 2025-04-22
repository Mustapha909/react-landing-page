import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import AboutUs from './components/sections/AboutUs';
import Pricing from './components/sections/Pricing';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <Layout title="Edge AI">
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}

export default App;
