import './About.css';
import { siteContent } from '../content/siteContent';

function About() {
  const { paragraphs } = siteContent.about;

  return (
    <div className="about-container">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default About;