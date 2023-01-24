import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

const name = 'Todd Buchanan';
export const siteTitle = `Portfolio of ${name}`;

export default function Layout({ children, fullscreen }) {
  return (
    <div className={fullscreen ? 'flex flex-col h-screen' : ''}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Todd Buchanan"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {fullscreen ? (
        <>
          <Header />
          {children}
          <Footer colored="bg-amber-400"/>
        </>
      ) : (
        <>
          <Header />
          <div className="flex flex-col grow bg-zinc-200/30">
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}