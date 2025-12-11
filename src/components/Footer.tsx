const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Gustavo — Engenheiro Civil
        </p>
        <p className="text-muted-foreground text-sm">
          CREA-XX: 000000000
        </p>
      </div>
    </footer>
  );
};

export default Footer;
