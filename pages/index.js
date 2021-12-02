import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../service'

export default function Home({postsData}) {
  console.log('from serve:', postsData)
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {postsData.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span1">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const postsData = (await getPosts()) || []

  return { props: { postsData } }
}
