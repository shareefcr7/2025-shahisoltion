import { Container } from "@/components/ui/container";
import { Code2, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-foreground mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="tracking-tight hover:scale-105 transition-transform duration-300">
                <span className="text-foreground font-extrabold tracking-wide">Shahi</span>
                <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#3b82f6,45%,#ffffff,55%,#3b82f6)] bg-[length:250%_100%] animate-shimmer font-extrabold tracking-wide">
                  Solution
                </span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Building Future Software Engineers & Real-World Solutions. 
              Bridging the gap between theory and practical coding skills with MERN Stack mastery.
            </p>
          </div>

          <div>
            <h3 className="font-['var(--font-bebas)'] text-3xl uppercase tracking-wider mb-6 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary">Training</Link></li>
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['var(--font-bebas)'] text-3xl uppercase tracking-wider mb-6 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+917012313325" className="hover:text-primary">
                  +91 70123 13325
                </a>
              </li>
              <li>
                <a href="mailto:rshahi.eng@gmail.com" className="hover:text-primary">
                  rshahi.eng@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShahiSolution. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
