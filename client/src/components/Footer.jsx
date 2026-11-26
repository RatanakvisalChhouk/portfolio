import { profile } from "../data/profile";

export default function Footer() {
  const { github, linkedin } = profile.links;
  return (
    <footer className="bg-ink text-white/60 [&_a:hover]:text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 border-t border-white/10 text-sm sm:flex-row sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          {github && <a href={github} target="_blank" rel="noreferrer" className="">GitHub</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="">LinkedIn</a>}
          <a href="#top" className="">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
