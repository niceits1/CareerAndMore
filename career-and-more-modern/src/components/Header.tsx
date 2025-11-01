import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { companyInfo, navigationItems } from '@/data/company';
// @ts-ignore
import logoImage from '@/assets/logo_careerandmore-neu.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verhindere Body-Scroll wenn Desktop-Dropdown offen ist
  useEffect(() => {
    if (activeDropdown && window.innerWidth >= 1024) {
      // Verhindere Body-Scroll nur wenn es ein Desktop-Dropdown ist
      const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        const isDropdown = target.closest('[class*="max-h-[70vh]"]');
        if (!isDropdown && activeDropdown) {
          // Erlaube Scroll nur wenn Maus nicht über Dropdown
          e.preventDefault();
        }
      };
      document.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        document.removeEventListener('wheel', handleWheel);
      };
    }
  }, [activeDropdown]);

  // Verhindere Body-Scroll wenn Mobile-Menü offen ist
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Scroll to top immediately when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-br from-primary-900/95 via-primary-900/95 to-primary-800/95 backdrop-blur-md shadow-large border-b border-white/10' 
          : 'bg-gradient-to-br from-primary-900 via-primary-900 to-primary-800'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div
              className="relative h-12 md:h-14 flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={logoImage} 
                alt="career & more Logo" 
                className="h-full w-auto max-h-12 md:max-h-14 object-contain"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
              />
            </motion.div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                {companyInfo.name}
              </h1>
              <p className="text-xs md:text-sm text-white/80 transition-colors duration-300">
                Personalberatung
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-all duration-300 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 ${
                        location.pathname.startsWith(item.href) ? 'text-white bg-white/10' : ''
                      }`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 bg-gradient-to-br from-primary-900 via-primary-900 to-primary-800 rounded-2xl shadow-large border border-white/10 py-2 min-w-[280px] max-h-[70vh] overflow-y-auto overscroll-contain backdrop-blur-md z-50"
                          initial={{ opacity: 0, y: -15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -15, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onWheel={(e) => {
                            e.stopPropagation();
                            const target = e.currentTarget;
                            const isScrolledToTop = target.scrollTop === 0;
                            const isScrolledToBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1;
                            
                            // Verhindere weiteres Scrollen wenn am Anfang/Ende
                            if ((e.deltaY < 0 && isScrolledToTop) || (e.deltaY > 0 && isScrolledToBottom)) {
                              e.preventDefault();
                            }
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.children.map((child, index) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                to={child.href}
                                className="block px-5 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200 font-medium rounded-lg mx-2"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 ${
                      location.pathname === item.href 
                        ? 'text-white bg-white/10' 
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-primary-600 hover:bg-white/90 shadow-medium hover:shadow-large"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-300 hover:bg-white/10 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-white/10 bg-gradient-to-br from-primary-900/98 via-primary-900/98 to-primary-800/98 backdrop-blur-md transition-colors duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onWheel={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="py-6 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-5 py-3 text-left font-medium rounded-lg mx-2 transition-all duration-200 text-white hover:bg-white/10"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                        <motion.div
                          className="ml-6 space-y-1 max-h-[300px] overflow-y-auto overscroll-contain"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          onWheel={(e) => {
                            e.stopPropagation();
                          }}
                        >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="block px-5 py-2.5 rounded-lg mx-2 transition-all duration-200 text-white/80 hover:bg-white/10 hover:text-white"
                                  onClick={handleLinkClick}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-5 py-3 rounded-lg mx-2 font-medium transition-all duration-200 text-white hover:bg-white/10 ${
                          location.pathname === item.href 
                            ? 'text-white bg-white/10' 
                            : ''
                        }`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="w-full text-center block px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-primary-600 hover:bg-white/90 shadow-medium"
                    onClick={handleLinkClick}
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;


