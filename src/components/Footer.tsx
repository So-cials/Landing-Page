import { Mail, Twitter, Linkedin, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-3 border-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <img src="/logo-alt.png" alt="Socials logo" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground mt-1">Infrastructure for creator-client work.</p>
          </div>

          <div className="flex flex-col items-start gap-2 text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="TikTok">
                <Music2 className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:hello@socials.app" className="hover:text-foreground transition-colors flex items-center gap-2 mt-2 text-sm">
              <Mail className="w-4 h-4" /> hello@socials.app
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} WIRA LABS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
