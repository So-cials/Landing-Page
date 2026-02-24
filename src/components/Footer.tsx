export default function Footer() {
  return (
    <footer className="border-t-3 border-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold text-foreground">Socials</span>
            <p className="text-sm text-muted-foreground mt-1">Infrastructure for creator-client work.</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:hello@socials.app" className="hover:text-foreground transition-colors">hello@socials.app</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Socials. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
