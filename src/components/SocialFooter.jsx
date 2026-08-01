import { siteContent } from '../content/siteContent';

const iconPaths = {
  instagram:
    'M7.5 2h9C19.988 2 22 4.012 22 7.5v9c0 3.488-2.012 5.5-5.5 5.5h-9C4.012 22 2 19.988 2 16.5v-9C2 4.012 4.012 2 7.5 2zm0 2C5.113 4 4 5.113 4 7.5v9C4 18.887 5.113 20 7.5 20h9c2.387 0 3.5-1.113 3.5-3.5v-9C20 5.113 18.887 4 16.5 4h-9z M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z',
  tiktok:
    'M13 2v8.1c1.1 1 2.5 1.6 4 1.6V14a8 8 0 01-4-1.1V18a6 6 0 11-6-6c.2 0 .4 0 .6.1V15a3 3 0 00-.6-.1 3 3 0 103 3V2h3z',
  youtube:
    'M21.8 8.1a2.8 2.8 0 00-2-2c-1.7-.5-7.8-.5-7.8-.5s-6.1 0-7.8.5a2.8 2.8 0 00-2 2A29.8 29.8 0 002 12a29.8 29.8 0 00.2 3.9 2.8 2.8 0 002 2c1.7.5 7.8.5 7.8.5s6.1 0 7.8-.5a2.8 2.8 0 002-2A29.8 29.8 0 0022 12a29.8 29.8 0 00-.2-3.9zM9.8 15.1V8.9L15.2 12l-5.4 3.1z',
  spotify:
    'M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zm4.05 13.18a.82.82 0 01-1.11.31c-2.73-1.67-6.19-2.05-10.23-1.12a.82.82 0 11-.37-1.6c4.45-1.03 8.27-.58 11.35 1.3.42.25.56.81.36 1.11zm1.42-3.19a.95.95 0 01-1.29.35c-3.12-1.92-7.92-2.47-11.64-1.33a.95.95 0 11-.56-1.82c4.22-1.27 9.43-.64 12.88 1.46.45.27.59.85.61 1.34zm.17-3.36c-3.93-2.34-10.45-2.55-14.23-1.4a1.08 1.08 0 11-.63-2.06c4.31-1.32 11.4-1.09 15.89 1.58a1.08 1.08 0 11-1.03 1.88z',
};

function SocialIcon({ icon }) {
  if (icon === 'spotify') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 9.7c3.8-1.1 7-.9 10 .3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M7.7 12.4c2.9-.9 5.4-.7 7.8.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M8.7 15c1.9-.6 3.6-.5 5.2.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPaths[icon]} />
    </svg>
  );
}

function SocialFooter({ links = siteContent.socialLinks }) {
  return (
    <footer className="social-footer" aria-label="Social media links">
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          className="social-footer-link"
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          <SocialIcon icon={icon} />
        </a>
      ))}
    </footer>
  );
}

export default SocialFooter;
