import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [location] = useLocation();
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const closeDropdown = () => setIsProductsOpen(false);
  const closeMobile = () => { setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); };

  return (
    <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-shadow duration-200 ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                <Logo className="w-10 h-10" />
                <span className="text-xl font-bold text-foreground">AI Chroney</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative" ref={productsDropdownRef}>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-testid="nav-products"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-xl py-2 z-50">
                    <div className="px-4 pt-2 pb-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">AI Agents</span>
                    </div>
                    <Link 
                      href="/products/chroney-assist"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">Website Agent</div>
                        <div className="text-xs text-muted-foreground">AI chatbot for your website</div>
                      </div>
                    </Link>
                    <Link 
                      href="/products/whatsapp-agent"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <FaWhatsapp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">WhatsApp Agent</div>
                        <div className="text-xs text-muted-foreground">Automated WhatsApp conversations</div>
                      </div>
                    </Link>
                    <Link 
                      href="/products/instagram-agent"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)' }}>
                        <FaInstagram className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">Instagram Agent</div>
                        <div className="text-xs text-muted-foreground">DM automation for Instagram</div>
                      </div>
                    </Link>
                    <hr className="my-2 border-border" />
                    <div className="px-4 pt-1 pb-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Tools</span>
                    </div>
                    <Link 
                      href="/products/ai-vista"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                      onClick={closeDropdown}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">AI Vista</div>
                        <div className="text-xs text-muted-foreground">Visual Intelligence Platform</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/playground"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-playground"
              >
                Playground
              </Link>
              <Link 
                href="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-faq"
              >
                FAQs
              </Link>
              <Link 
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="nav-contact"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                data-testid="button-demo-desktop"
              >
                Book a Demo
              </Button>
            </a>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-menu"
          className="md:hidden bg-background border-t border-border"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div>
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
                data-testid="nav-products-mobile"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileProductsOpen && (
                <div className="pl-4 space-y-0.5">
                  <div className="px-3 pt-2 pb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">AI Agents</span>
                  </div>
                  <Link 
                    href="/products/chroney-assist"
                    className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-3 h-3 text-white" />
                    </div>
                    Website Agent
                  </Link>
                  <Link 
                    href="/products/whatsapp-agent"
                    className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    <div className="w-6 h-6 rounded-md bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="w-3 h-3 text-white" />
                    </div>
                    WhatsApp Agent
                  </Link>
                  <Link 
                    href="/products/instagram-agent"
                    className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)' }}>
                      <FaInstagram className="w-3 h-3 text-white" />
                    </div>
                    Instagram Agent
                  </Link>
                  <hr className="my-1.5 mx-3 border-border" />
                  <div className="px-3 pt-1 pb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Tools</span>
                  </div>
                  <Link 
                    href="/products/ai-vista"
                    className="flex items-center gap-2.5 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3 h-3 text-white" />
                    </div>
                    AI Vista
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/playground"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              data-testid="nav-playground-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Playground
            </Link>
            <Link 
              href="/faq"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              data-testid="nav-faq-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
              data-testid="nav-contact-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer" className="w-full mt-2 block">
              <Button 
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                data-testid="button-demo-mobile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
