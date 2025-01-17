import { useState } from "react";
import { useRouter } from 'next/router'

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

export default function ContactForm() {
  const [state, setState] = useState({})

  const router = useRouter()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    .then(() => router.push('/success'))
    .catch((error) => alert(error))
  }

  return (
    <div className="flex flex-col md:flex-row text-left">
      <div className="bg-amber-400 flex flex-1 flex-col justify-center px-4 py-8 sm:py-4">
        <h3 className="text-3xl mb-2 font-medium">Want to chat?</h3>
        <p>Have a project or just want to dicuss an idea? Fill out the form to get started.</p>
      </div>
      <div className="flex-grow">
      <form name="contact" action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <div className="p-6">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
          </p>
          <div className="">
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="full-name" id="full-name" autoComplete="given-name" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" onChange={handleChange}/>
          </div>
          <div className="mt-6">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" onChange={handleChange}/>
          </div>
          <div className=" mt-6">
            <label htmlFor="form-message" className="block text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1">
              <textarea id="form-message" name="form-message" rows="5" className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm" placeholder="What would you like to discuss?" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Send</button>
        </div>
      </form>
      </div>
    </div>
  )
}