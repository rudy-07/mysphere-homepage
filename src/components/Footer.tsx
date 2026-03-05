import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { name: "myCloud", href: "/products/mycloud" },
    { name: "myCam", href: "/products/mycam" },
    { name: "myTune", href: "/products/mytune" },
    { name: "myLink", href: "/products/mylink" },
    { name: "myMoney", href: "/products/mymoney" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Contact", href: "/about" },
  ],
  Company: [
    { name: "About", href: "/about" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="gradient-text">my</span>Sphere
            </h3>
            <p className="text-sm text-muted-foreground">Your personal ecosystem of powerful apps.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 mySphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
