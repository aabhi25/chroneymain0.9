import logoImage from "@assets/Chroney_logo_1769900142416.png";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="AI Chroney Logo" 
      className={`${className} object-contain`}
    />
  );
}
