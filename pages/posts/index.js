import Head from 'next/head'
import Link from 'next/link'

import { fetchEntries } from '@utils/contentfulPosts'

import Post from '@components/Post'
import Footer from '@components/Footer'
import Layout, { siteTitle } from '@components/layout';

export default function Home({ posts }) {
  return (
    <Layout className="container">
      <main>
        <div className="mx-auto max-w-7xl py-12 px-6 grid grid-cols-1 gap-y-16">
          {posts.map((p, index) => {
            return <div key={p.slug}><Post post={p} tags={p.tags ?? JSON.stringify(p.tags)} index={index}/></div>
          })}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}