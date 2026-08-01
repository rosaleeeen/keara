import { useEffect, useState } from "react";
import { siteContent } from "./content/siteContent";
import Tour from "./webpages/Tour";
import Music from "./webpages/Music";
import About from "./webpages/About";
import "./App.css";

const pageComponents = {
  music: Music,
  tour: Tour,
  about: About,
};

function getActivePage(pathname) {
  const currentSlug = pathname?.replace(/^\//, "") || "music";

  return siteContent.navigation.find(({ slug }) => slug === currentSlug) || siteContent.navigation[0];
}

function MainWebContent({ pathname, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePage = getActivePage(pathname);
  const isTourPage = activePage.slug === "tour";
  const ActivePageComponent = pageComponents[activePage.slug] || Music;

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!event.target.closest(".page-switcher")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const handleSelectPage = (slug) => {
    onNavigate(`/${slug}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="main-content-container">
      <section className="bio-name-header">
        <div className="name-container">
          <img src={siteContent.home.backgroundImage} alt="Keara" />
          <div className="menu-page-header page-switcher">
            <button
              type="button"
              className="page-switcher-trigger"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-haspopup="menu"
              aria-expanded={isMenuOpen}
            >
              <span>{activePage.label}</span>
              <svg
                fill="currentColor"
                version="1.1"
                id="Icons"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M16,25c-0.6,0-1.1-0.2-1.6-0.6l-9.4-9.3c-0.7-0.7-1-1.6-1-2.5c0-1,0.4-1.8,1-2.5c1.4-1.4,3.6-1.4,5,0l5.8,5.7c0.1,0.1,0.2,0.1,0.3,0l5.8-5.7c1.4-1.4,3.6-1.4,5,0c0.7,0.7,1,1.6,1,2.5c0,1-0.4,1.8-1,2.5l-9.4,9.3C17.1,24.8,16.6,25,16,25z" />
                </g>
              </svg>
            </button>

            {isMenuOpen && (
              <div className="page-switcher-menu" role="menu">
                {siteContent.navigation.map(({ slug, label }) => (
                  <button
                    key={slug}
                    type="button"
                    className={`page-switcher-option${slug === activePage.slug ? " is-active" : ""}`}
                    role="menuitem"
                    onClick={() => handleSelectPage(slug)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={`content-container${isTourPage ? " content-container--tour" : ""}`}>
        <ActivePageComponent />
      </section>
    </div>
  );
}

export default MainWebContent;
