import Link from 'next/link';
import Layout from '@components/Layout';

export default function Home({ posts }) {
  return (
    <Layout fullscreen>
      <main className='flex flex-col grow bg-amber-400 py-2 lg:py-16'>
        <div className="mx-auto max-w-5xl h-full py-6 px-6 grid grid-cols-1 gap-y-8 items-center md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          <div className="mt-8 lg:mt-0 relative flex flex-col gap-6 justify-self-center sm:flex-row md:flex-col lg:flex-row lg:justify-self-center">
            <svg height="300" viewBox="0 0 293 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_10_208)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M181.114 159.889C181.114 160.721 181.086 161.559 181.032 162.401C180.911 164.282 180.66 166.183 180.298 168.083L180.278 168.187C180.005 169.6 179.671 171.011 179.283 172.414C180.066 169.804 180.646 166.964 180.923 163.885C181.048 162.587 181.114 161.255 181.114 159.889Z" fill="#39393A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M130.731 217.538L168.106 210.611V210.603L244.264 196.488C270.904 191.55 292.5 165.682 292.5 138.709C292.5 116.246 277.521 100.1 257.123 98.1827C271.281 87.0486 280.77 69.6545 280.77 51.7752C280.77 24.8026 259.174 6.93961 232.534 11.877L232.527 11.8783L179.538 21.7801L58.736 44.1695C32.096 49.1069 10.5 74.9751 10.5 101.948C10.5 128.92 32.096 146.783 58.736 141.846L83.0661 137.337V177.526C83.0661 204.305 104.354 222.105 130.731 217.526V217.538ZM240.284 115.619C258.158 112.306 272.648 124.291 272.648 142.389C272.648 160.486 258.158 177.843 240.284 181.156L168.438 194.471C168.855 193.92 169.269 193.349 169.679 192.762C173.618 187.122 177.215 179.9 179.283 172.414C180.066 169.804 180.646 166.964 180.923 163.885C181.048 162.587 181.114 161.255 181.114 159.889V126.585V110.228L183.842 109.722C183.842 109.722 186.32 108.461 186.32 104.882C186.32 101.303 183.842 100.961 183.842 100.961L170.469 103.439L162.205 104.971V113.894V162.858C162.205 180.138 148.369 196.711 131.302 199.874C114.235 203.038 100.399 191.593 100.399 174.313L100.399 125.349V116.575L91.7326 118.181L58.736 124.296C41.6687 127.46 27.833 116.016 27.833 98.7352C27.833 81.4549 41.6687 64.8821 58.736 61.7188L91.7326 55.6033L230.632 29.8469C247.662 26.6906 261.467 38.1099 261.467 55.3527C261.467 72.5955 247.662 89.1323 230.632 92.2886L211.823 95.7745C211.823 95.7745 198.403 99.8097 198.403 111.595C198.403 123.381 211.823 120.893 211.823 120.893L240.284 115.619Z" fill="#39393A"/>
              </g>
              <defs>
              <filter id="filter0_d_10_208" x="0.5" y="11.0568" width="292" height="219.187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-6" dy="8"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_208"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_208" result="shape"/>
              </filter>
              </defs>
            </svg>
          </div>
          <div className='mt-8 lg:mt-0 relative flex flex-col gap-3'>
            <h1 className="text-2xl font-medium tracking-tight text-gray-[#39393A] sm:text-4xl">
              Hi, I'm Todd Buchanan.
            </h1>
            <p className='font-normal text-base leading-7'>
              I've been working as a UI developer and designer for the past 10+ years in San Francisco and now I'm currently based in Detroit, Michigan. I love to work on innovative and intuitive user experiences for the web and mobile devices. I'm passionite about UI/UX design, Frontend technologies and helping companies optimize their design and development efforts through design systems.
            </p>
            <Link href="/work">
              <div className="mt-4 block rounded-lg py-2 px-6 text-base font-semibold leading-6 bg-[#39393A] text-white hover:bg-[#39393A]/90 self-start cursor-pointer">
                View Work
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}