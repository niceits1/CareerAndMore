import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Consulting from '@/pages/Consulting';
import ConsultingDetail from '@/pages/ConsultingDetail';
import Career from '@/pages/Career';
import CareerJobs from '@/pages/CareerJobs';
import CareerApplication from '@/pages/CareerApplication';
import CareerEmployeeBranding from '@/pages/CareerEmployeeBranding';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import Impressum from '@/pages/Impressum';
import Privacy from '@/pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main 
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/consulting/:id" element={<ConsultingDetail />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/jobs" element={<CareerJobs />} />
              <Route path="/career/application" element={<CareerApplication />} />
              <Route path="/career/employee-branding" element={<CareerEmployeeBranding />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
