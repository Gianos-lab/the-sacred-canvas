import Link from '@/components/Link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#f5f3ee' }}
    >
      {/* Ink splash - positioned from LEFT edge, behind text content */}
      <div
        className="absolute left-0 top-1/2 w-1/2 h-full pointer-events-none opacity-15 dark:opacity-10"
        style={{
          backgroundImage: 'url(/static/images/ink_splash.jpg)',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          transform: 'translateY(-50%)',
          filter: 'sepia(100%) saturate(200%) hue-rotate(-10deg)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-500 leading-tight">
            The Sacred Canvas
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
<strong>Najik</strong> is a fantasy world where the words you speak determine which gods hear you. Watch it take shape from first foundations to finished setting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/blog/why-im-building-this-world"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              Start Here
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
            >
              World Log
            </Link>
          </div>
        </div>

        {/* Right: Glyph */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/static/images/Najik_Kaelith.svg"
            alt="Najik Kaelith glyphs"
            width={500}
            height={213}
            className="w-full max-w-lg opacity-25 sepia saturate-200 hue-rotate-[-10deg] dark:opacity-15 dark:invert"
            priority
          />
        </div>
      </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#world-log"
          className="text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Scroll to World Log"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
