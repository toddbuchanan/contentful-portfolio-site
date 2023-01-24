import { fetchEntries } from '@utils/contentfulPosts';

import Post from '@components/Post';
import Layout from '@components/Layout';

export default function Home({ posts }) {
  posts.sort((a,b)=>{
    return new Date(b.publishDate) - new Date(a.publishDate);
  })
  return (
    <Layout className="container">
      <main>
        <div className="mx-auto max-w-7xl py-12 px-6 grid grid-cols-1 gap-y-16">
          {posts.map((p, index) => {
            return <Post key={p.slug} post={p} tags={p.tags ?? JSON.stringify(p.tags)} index={index}/>
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