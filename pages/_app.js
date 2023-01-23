import '@styles/globals.css';

function Application({ Component, pageProps }) {
  return <div className='flex h-full flex-col'>
    <div className=''>
      <Component {...pageProps} />
    </div>
  </div>
}

export default Application
