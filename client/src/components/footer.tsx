import { Link } from "wouter";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity gap-2">
                <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
                <span className="text-lg sm:text-xl font-bold">AI Chroney</span>
              </div>
            </Link>
          </div>
          
          <p className="text-sm sm:text-base font-medium opacity-90">
            AI that talks business
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-3 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm opacity-75" data-testid="text-copyright">
            © 2024 AI Chroney. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-xs sm:text-sm opacity-75 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-xs sm:text-sm opacity-75 hover:opacity-100 transition-opacity">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
