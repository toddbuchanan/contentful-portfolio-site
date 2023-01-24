import { Linkedin, GitHub, Dribbble } from 'react-feather';

export default function Footer({colored}) {
  return (
    <footer className={`border border-t-neutral-600/20 border-b-0 ${colored ? colored : ''}`}>
      <div className="mx-auto w-full flex flex-row items-center justify-between px-6 lg:max-w-7xl">
        <div className="flex items-center lg:min-w-0 lg:flex-1">
          <span className=' h-3 w-3 mr-2 bg-green-700 rounded-full'></span>
          <span className='pr-6 py-4 border-r border-r-neutral-600/20 text-sm font-semibold'>Available for work</span>
        </div>
        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <ul className="flex flex-row">
            <li className="px-5 py-4 border-l border-l-neutral-600/20">
              <a href="https://github.com/toddbuchanan" target="_blank">
                <GitHub className='text-gray-900 font-semibold' size={21}/>
              </a>
            </li>
            <li className="px-5 py-4 border-x border-x-neutral-600/20">
              <a href="https://www.linkedin.com/in/buchanantodd/" target="_blank">
                <Linkedin className='text-gray-900 font-semibold' size={21}/>
              </a>
            </li>
            <li className="px-5 py-4 border-r border-r-neutral-600/20">
              <a href="https://dribbble.com/toddmbuchanan" target="_blank">
                <Dribbble className='text-gray-900 font-semibold' size={21}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
