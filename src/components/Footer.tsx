const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-12 border-t border-border mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="font-display text-2xl text-primary tracking-wider">PORTFOLIO</h2>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Jeet Dubey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
