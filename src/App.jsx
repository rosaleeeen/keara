import { useEffect, useState } from 'react';
import MainWebContent from './MainWebContent';
import Lanyard from './components/Lanyard';
import SocialFooter from './components/SocialFooter';
import { siteContent } from './content/siteContent';
import './App.css'

const mainRoutes = new Set(siteContent.navigation.map(({ slug }) => `/${slug}`));

function resolvePath(pathname) {
  if (pathname === '/') {
    return '/';
  }

  return mainRoutes.has(pathname) ? pathname : '/music';
}


function Home({ onEnterMain }) {
  const [isFading, setIsFading] = useState(false);
  const { enterText, backgroundImage, frontImage, backImage, camera } = siteContent.home;

  const handleEntryClick = () => {
    if (isFading) return;               // prevent multiple clicks during fade-out
    setIsFading(true);
    setTimeout(() => {
      onEnterMain();
    }, 1000);
  };

  return (
    <>
      <div className={`home ${isFading ? 'fade-out' : ''}`}
        style={{ '--bg-image': `url(${backgroundImage})` }}>
        <div className="lanyard-wrapper" onClick={handleEntryClick}>
          <Lanyard
            position={camera.position}
            gravity={camera.gravity}
            frontImage={frontImage}
            backImage={backImage}
            fov={camera.fov}
            imageFit={camera.imageFit}
            lanyardImage={backImage}
            lanyardWidth={camera.lanyardWidth}
          />
        </div>

        <span className="enter-text">{enterText}</span>
      </div>
    </>
  );
}

function App() {
  const [path, setPath] = useState(() => resolvePath(window.location.pathname));

  useEffect(() => {
    const rootStyle = document.documentElement.style;

    Object.entries(siteContent.theme.colors).forEach(([tokenName, tokenValue]) => {
      const cssName = `--${tokenName.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/_/g, '-')}`;
      rootStyle.setProperty(cssName, tokenValue);
    });

    Object.entries(siteContent.theme.fonts).forEach(([tokenName, tokenValue]) => {
      rootStyle.setProperty(`--font-${tokenName}`, tokenValue);
    });

    const normalizedPath = resolvePath(window.location.pathname);

    if (normalizedPath !== window.location.pathname) {
      window.history.replaceState({}, '', normalizedPath);
    }

    const handlePopState = () => {
      setPath(resolvePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath, { replace = false } = {}) => {
    const normalizedPath = resolvePath(nextPath);

    if (replace) {
      window.history.replaceState({}, '', normalizedPath);
    } else {
      window.history.pushState({}, '', normalizedPath);
    }

    setPath(normalizedPath);
  };

  if (path === '/') {
    return (
      <>
        <Home onEnterMain={() => navigate('/music', { replace: true })} />
        <SocialFooter links={siteContent.socialLinks} />
      </>
    );
  }

  return (
    <>
      <MainWebContent pathname={path} onNavigate={navigate} />
      <SocialFooter links={siteContent.socialLinks} />
    </>
  );
}

export default App;