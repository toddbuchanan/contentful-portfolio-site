import Link from 'next/link';

import * as contentful from "contentful";

import Post from '@components/Post';
import Layout from '@components/Layout';


var client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function FirstPost(props) {
  if(props.error) {
    return (
      <Layout home className="container">
        <h1>An Error Occurred:</h1>
        <h2>{props.error}</h2>
      </Layout>
    )
  }

  return (
    <Layout home className="container">
      <main className='mx-auto max-w-7xl'>
        <div className="posts flex flex-col gap-4">
          <Link href="/">
            <Post key={props.slug} post={props} tags={props.tags ?? JSON.stringify(props.tags)} index={props.index}/>
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await client
    .getEntries({
      content_type: 'blogPost',
    }
  )

  const paths = posts.items.map(post => ({
    params: {
      slug: post.fields.slug
    }
  }))

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps(context) {
  const post = await client
    .getEntries({
      limit: 1,
      content_type: 'blogPost',
      'fields.slug': context.params.slug
    }
  )

  return {
    props: {
      error: !post.items.length
        && `No Post found for slug: ${context.params.slug}`,
      ...post?.items?.[0]?.fields
    },
  }
}