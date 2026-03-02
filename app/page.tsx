import TerminalShell from '@/components/TerminalShell/TerminalShell';
import { content } from '@/lib/content';

// Visually hidden but fully crawlable by search engines.
// Mirrors the content accessible via terminal commands so bots see the same
// information users do — this is not cloaking.
function CrawlableContent() {
  const { identity, about, services, certifications, links } = content;
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
      <h1>{identity.name} — {identity.title}</h1>
      <p>{identity.location}</p>
      <h2>About</h2>
      <p>{about.bio}</p>
      <h2>Services</h2>
      <p>{services.body}</p>
      <h2>Certifications</h2>
      <p>{certifications.details}</p>
      <a href={certifications.verificationUrl}>{certifications.verificationLabel}</a>
      <h2>Links</h2>
      <a href={links.linkedin}>LinkedIn</a>
      <a href={links.github}>GitHub</a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <CrawlableContent />
      <TerminalShell />
    </>
  );
}
