import Link from '@/components/Link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-14rem)] flex-col justify-center overflow-hidden bg-canvas py-12 md:py-20 dark:bg-gray-950">
      {/* Ink splash - Light mode */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-full w-1/2 -translate-y-1/2 bg-[url('/static/images/ink_splash.png')] bg-contain bg-left bg-no-repeat opacity-15 hue-rotate-[-10deg] saturate-200 sepia dark:hidden" />
      {/* Ink splash - Dark mode (PNG with transparent bg) */}
      <div className="pointer-events-none absolute top-1/2 left-0 hidden h-full w-1/2 -translate-y-1/2 bg-[url('/static/images/ink_splash.png')] bg-contain bg-left bg-no-repeat opacity-[0.08] invert [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] dark:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left: Text */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-primary-500 font-serif text-4xl leading-tight font-bold md:text-5xl">
              I'm Gian, and I'm building a fantasy world in public.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Follow along as I create <strong>Najik</strong>, a complete fantasy setting, from
              scratch. Every decision, every draft, every mistake. No hidden process.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/blog/e1-why-im-building-this-world"
                className="bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                Start from the beginning
              </Link>
              <Link
                href="#world-log"
                className="border-primary-500 text-primary-500 hover:bg-primary-500 inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors hover:text-white"
              >
                Latest posts
              </Link>
            </div>
          </div>

          {/* Right: Glyph */}
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <Image
              src="/static/images/Najik_Kaelith.svg"
              alt="Najik Kaelith glyphs"
              width={500}
              height={213}
              className="w-full max-w-lg opacity-25 hue-rotate-[-10deg] saturate-200 sepia dark:opacity-15 dark:invert dark:mix-blend-lighten"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
