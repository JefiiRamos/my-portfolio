import { navItems, profile } from "@/lib/profile";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-logo">
          <span className="site-logo__mark" aria-hidden />
          <span>
            <span className="site-logo__name">{profile.name}</span>
            <span className="site-logo__role">{profile.role}</span>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="site-header__cta button-primary button-primary--compact"
        >
          GitHub
        </a>
      </div>

      <nav className="site-nav-mobile" aria-label="Mobile">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="site-nav-mobile__link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
