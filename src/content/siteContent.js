import artistNameImage from '../assets/artist-images/artistName.png';
import artistCardFront from '../assets/artist-images/artistImage.png';
import artistCardBack from '../assets/artist-images/image.png';

export const siteContent = {
  theme: {
    colors: {
      background: '#dfcaac',
      surface: '#dfcaac',
      text: '#5b4735',
      textMuted: 'rgba(91, 71, 53, 0.72)',
      border: 'rgba(91, 71, 53, 0.14)',
      panel: 'rgba(255, 255, 255, 0.16)',
      panelHover: 'rgba(255, 255, 255, 0.22)',
      panelBorder: 'rgba(91, 71, 53, 0.14)',
      panelBorderStrong: 'rgba(91, 71, 53, 0.28)',
      panelShadow: '0 10px 30px rgba(91, 71, 53, 0.08)',
      panelShadowStrong: '0 18px 40px rgba(91, 71, 53, 0.14)',
      panelEmpty: 'rgba(255, 255, 255, 0.18)',
      heroBackground: '#120e08',
      heroGraphicFilter: 'invert(0.1)',
      footerBackground: 'rgba(223, 202, 172, 0.72)',
      footerBorder: 'rgba(91, 71, 53, 0.14)',
      cardBackground: '#5b4735',
      cardBackgroundHover: '#6a5340',
      cardText: '#f8f1e8',
      cardTitle: '#5b4735',
      cardBody: '#6a5340',
      cardTextMuted: 'rgba(91, 71, 53, 0.82)',
      cardAccent: '#4f3d2d',
      cardAccentSoft: 'rgba(91, 71, 53, 0.94)',
      textMutedStrong: 'rgba(91, 71, 53, 0.82)',
      textMutedEmphasis: 'rgba(91, 71, 53, 0.94)',
      musicIntro: 'rgba(255, 255, 255, 0.3)',
      musicIntroFilter: 'invert(1)',
      emptyStateBackground: 'rgba(255, 255, 255, 0.18)',
      emptyStateBorder: 'rgba(91, 71, 53, 0.18)',
    },
    fonts: {
      display: 'neue-haas-grotesk-display',
      body: 'monospace',
      mono: 'monospace',
    },
  },
  navigation: [
    { slug: 'music', label: 'Music' },
    { slug: 'tour', label: 'Tour' },
    { slug: 'about', label: 'About' },
  ],
  home: {
    enterText: '[ PRESS PASS ENTRY ]',
    backgroundImage: artistNameImage,
    frontImage: artistCardFront,
    backImage: artistCardBack,
    camera: {
      position: [0, 0, 20],
      gravity: [0, -40, 0],
      fov: 12,
      imageFit: 'contain',
      lanyardWidth: 1,
    },
  },
  music: {
    intro: 'An atlas of the ephemeral spun ethereal.',
  },
  about: {
    paragraphs: [
      'Keara is a Montreal-based singer-songwriter who writes music rooted in storytelling, emotional honesty, and quiet reflection.',
      'She has been following her passion for songwriting and performing from a young age, drawing inspiration from folk, r&b, alternative, and indie elements while crafting songs that feel both intimate and expansive. Keara’s work invites listeners into moments of vulnerability and connection. She is deeply inspired by lived experiences not just from her life, but from other people’s. Keara has appeared on established stages such as Rainbow Stage in Winnipeg, where she performed an original song, “Quiet Little Place” for a large audience in their “Pot of Gold” charity banquet.',
      'Since relocating to Montreal, Keara has expanded her presence within the city’s music community, performing at local venues and continuing to build her audience.',
      'Keara has independently released singles such as “Shaelyn” and “Red Thunder,” marking important milestones in her growing catalogue. With additional music currently in development, she is focused on expanding her discography while continuing to refine her sound. Grounded in strong vocals and thoughtful songwriting, Keara is committed to growing her career through live performance, collaboration, and new releases.',
    ],
  },
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/kearatyx/?hl=en',
      icon: 'instagram',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@keke44life',
      icon: 'tiktok',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@kearatyx',
      icon: 'youtube',
    },
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/artist/6YALsMz2ws27NObJDGGefz',
      icon: 'spotify',
    },
  ],
  tour: {
    labels: {
      upcoming: 'Upcoming',
      recent: 'Recent',
    },
    emptyUpcomingText: 'No upcoming shows announced... yet!',
    events: [
      {
        year: '2026',
        date: '24 Jul',
        event: 'Highway Girl Café',
        location: 'Grand Bend, ON',
      },
      {
        year: '2026',
        date: '06 Aug',
        event: 'Bar Notre Dame Des Quilles',
        location: 'Montreal, QC',
      },
      {
        year: '2026',
        date: '10 Jul',
        event: 'Winnipeg Folk Festival',
        location: 'Winnipeg, MB',
      },
      {
        year: '2026',
        date: '30 Apr',
        event: 'Bar Notre Dame Des Quilles',
        location: 'Montreal, QC',
      },
      {
        year: '2025',
        date: '21 Aug',
        event: 'Parc Sir Wilfried Laurier',
        location: 'Montreal, QC',
      },
      {
        year: '2024',
        date: '12 Nov',
        event: 'La Mai/son Jam for Justice',
        location: 'Montreal, QC',
      },
      {
        year: '2024',
        date: '10 Jul',
        event: 'Café Tuyo',
        location: 'Montreal, QC',
      },
      {
        year: '2021',
        date: '27 Aug',
        event: 'Chien Bleu',
        location: 'Montreal, QC',
      },
      {
        year: '2021',
        date: '12 Sep',
        event: 'Pot of Gold Benefit Concert',
        location: 'Winnipeg, MB',
      },
    ],
  },
};

export default siteContent;
