import Layout from "@components/Layout"

export default function Success() {
  return (
    <Layout fullscreen>
      <div className="flex flex-col grow bg-amber-400 items-center justify-center py-12 px-6">
        <h1 className="text-8xl leading-3 font-semibold mb-16">Thanks! </h1>
        <p className="text-lg ">The form was succussfully submitted. I'll take a look and be in contact with you shortly.</p>
      </div>
    </Layout>
  )
}