import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const CareerJobs = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Sachbearbeiter Qualitätssicherung mit Schwerpunkt: Messtechnik',
      location: 'Neustadt a.d.Saale',
      description: 'Qualitätssicherung und Messtechnik',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/SB_Sachbearbeiter_QM-Messtechnik_WUe_.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/SB_Qualitaet_Messtechnik.jpg',
      status: 'active'
    },
    {
      id: 2,
      title: 'Hardware-Entwicklungsingenieur Elektrotechnik (a bis z)',
      location: 'Rheinland-Pfalz',
      description: 'Hardware-Entwicklung im Bereich Elektrotechnik',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/20232_03_HW_ING_Elektrotechnik_RLP.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/20232_03_HW_ING_Elektrotechnik_RLP.jpg',
      status: 'active'
    },
    {
      id: 3,
      title: 'Software-Ingenieur im Bereich Embedded-Linux (a bis z)',
      location: 'Rheinland-Pfalz',
      description: 'Software-Entwicklung für Embedded-Linux Systeme',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_03_SW_ING_Embedded-Linux_RLP.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_03_SW_ING_Embedded-Linux_RLP.jpg',
      status: 'active'
    },
    {
      id: 4,
      title: 'Entwicklungsingenieur für Steuerungssoftware (a bis z)',
      location: 'Rheinland-Pfalz',
      description: 'Entwicklung von Steuerungssoftware',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_03_SW_ING_Steuerung_RLP.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_03_SW_ING_Steuerung_RLP.jpg',
      status: 'active'
    },
    {
      id: 5,
      title: 'Werkstatt - Techniker (a bis z)',
      location: 'Zwickau',
      description: 'Technische Arbeiten in der Werkstatt',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_06_Werkstatttechniker_ME.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/Werkstatttechniker_ME.jpg',
      status: 'active'
    },
    {
      id: 6,
      title: 'Servicetechniker (a bis z)',
      location: 'Berlin und Dresden',
      description: 'Service und Wartung von technischen Anlagen',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_08_Servicetechniker_BDD.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/Servicetechniker_BDD.jpg',
      status: 'active'
    },
    {
      id: 7,
      title: 'Hardware-Ingenieur Elektrifizierung (a bis z)',
      location: 'Baden-Württemberg',
      description: 'Hardware-Entwicklung für Elektrifizierung',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2022_03_HW_ING_Elektrotechnik_BW.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/HW_ING_Elektrotechnik_BW.jpg',
      status: 'active'
    },
    {
      id: 8,
      title: 'Project Manager Electronic Solutions (a bis z)',
      location: 'Rheinland-Pfalz',
      description: 'Projektmanagement für elektronische Lösungen',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2023/05/2023_7_ProjMan_Electronic_Solutions.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2023/05/ProjManager_Electr_Solutions.jpg',
      status: 'active'
    },
    {
      id: 9,
      title: 'Initiativ-Bewerbung (a bis z)*',
      location: 'bundesweit',
      description: 'Für alle anderen interessanten Positionen',
      pdfUrl: '/careerandmore.de/wp-content/uploads/2022/01/Stellenanzeige_initiativ_2022.pdf',
      imageUrl: '/careerandmore.de/wp-content/uploads/2022/01/Stellenanzeige_initiativ_2022.png',
      status: 'active'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="section-padding bg-gradient-to-br from-gray-50 to-white"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Aktuelle Stellenangebote</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Entdecken Sie spannende Jobmöglichkeiten und werden Sie Teil unseres 
              Expertenteams. Wir bieten vielfältige Positionen in verschiedenen 
              technischen Bereichen.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Job Openings Table */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="gradient-text">offenen Positionen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schauen Sie sich unsere aktuellen Stellenangebote an und finden Sie 
              die perfekte Position für Ihre Karriere.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <motion.div
            className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            variants={itemVariants}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stelle</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standort</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Beschreibung</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {jobOpenings.map((job) => (
                    <motion.tr
                      key={job.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                      variants={itemVariants}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{job.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-600">{job.description}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center space-x-3">
                          <a
                            href={job.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            PDF
                          </a>
                          <Link
                            to="/career/application"
                            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                          >
                            Bewerben
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <motion.div
            className="lg:hidden space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    {job.location}
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={job.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-600 text-sm font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Stellenbeschreibung
                  </a>
                  <Link
                    to="/career/application"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    Jetzt bewerben
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        className="section-padding bg-gray-50"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nicht das Richtige dabei?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schauen Sie regelmäßig vorbei oder bewerben Sie sich initiativ. 
              Wir freuen uns auf Ihre Bewerbung und prüfen gerne, ob wir eine 
              passende Position für Sie haben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/career/application"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Initiativbewerbung</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@careerandmore.de"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CareerJobs;
