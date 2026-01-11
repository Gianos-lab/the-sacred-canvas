import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-32 pb-24 text-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl text-primary">The Sacred Canvas</h1>
        <h2 className="text-3xl text-foreground-secondary">
          A fantasy world being built in public
        </h2>
        <p className="text-foreground-secondary max-w-xl leading-[1.8]">
          This site documents the creation of <span className="relative"><span className="absolute inset-0 bg-primary/20 -skew-y-1 rounded"></span><span className="relative">Tsejam Qal</span></span>, a fantasy world from the ground up. As the work progresses, it collects its cosmology, history, languages, cultures, and conflicts, organized as a setting that can be explored, read, and eventually played in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/blog"
            className="inline-block font-serif text-lg font-semibold text-primary-foreground bg-primary px-8 py-3 rounded transition-all hover:bg-primary/90"
          >
            Start here
          </Link>
          <Link
            href="/blog"
            className="inline-block font-serif text-lg font-semibold text-primary px-8 py-3 border-2 border-primary rounded transition-all hover:bg-primary hover:text-primary-foreground"
          >
            World Log
          </Link>
        </div>
      </div>
    </div>
  );
}
