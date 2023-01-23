
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link';
import ContactForm from '@components/ContactForm';

export default function Header({ title }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  return (
    <div className="bg-amber-400 border border-b-amber-300">
      <div className="px-6 py-4 lg:px-8 mx-auto max-w-7xl">
        <nav className="flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" className="-m-1.5 p-1.5">
              <Link href="/">
                <span className='font-medium text-lg'>Todd Buchanan</span>
              </Link>
            </a>
          </div>
          <div className="flex lg:hidden">
            <div className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setIsNavExpanded(true)} >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            <Link href="posts" className="font-semibold text-gray-900 hover:text-gray-900">Works</Link>
            <Link href="about" className="font-semibold text-gray-900 hover:text-gray-900">About</Link>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:self-end">
            <button type="button" onClick={openModal} className="mt-4 block rounded-lg py-2 px-6 text-sm font-semibold leading-6 bg-[#39393A] text-white hover:bg-[#39393A]/90 self-start cursor-pointer">Contact Me!</button>
          </div>
        </nav>
        <div role="dialog" aria-modal="true" className={isNavExpanded ? 'block' : 'hidden'}>
          <div focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <Link href="/" className="-m-1.5 p-1.5 font-semibold">
                  <span>Todd Buchanan</span>
                </Link>
              </div>
              <div className="flex">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setIsNavExpanded(!isNavExpanded)} >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10">
                    <Link href="/posts" >Works</Link>
                  </div>
                  <div className="-mx-3 block rounded-lg py-2 px-3 text-base font-normal leading-7 text-gray-900 hover:bg-gray-400/10">
                    <Link href="/about">About</Link>
                  </div>
                </div>
                <div className="py-6">
                  <button type="button" onClick={openModal} className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-normal leading-6 text-gray-900 hover:bg-gray-400/10">Contact Me!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <ContactForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
