import type { HomePageProps, Post } from 'blogkit'
import { Container } from './Container'
import { Footer } from './Footer'
import Link from 'next/link'
import Head from 'next/head'
import { date } from '../date'

export function Home({ posts, siteConfig, themeConfig }: HomePageProps) {
  return (
    <Container>
      <Head>
        <title>{siteConfig.title}</title>
        <link rel="icon" href="https://raw.githubusercontent.com/lingPoint/my-blog/main/blogkit-theme-minimal/src/favicon.ico" />
      </Head>

      <div className="flex items-center">
  <img src="https://avatars.githubusercontent.com/u/44696270?s=40&v=4" alt="Logo" className="w-10 h-10 mr-2" />
  <h1 className="text-4xl font-extrabold">{siteConfig.name}</h1>
</div>


      {themeConfig?.links && (
        <div className="flex gap-2">
          {themeConfig?.links?.map((link: any) => {
            return (
              <Link href={link.url} key={link.url}>
                <a target="_blank">{link.name}</a>
              </Link>
            )
          })}
        </div>
      )}

      <article
        className="post-body"
        dangerouslySetInnerHTML={{ __html: themeConfig?.introduceHTML }}
      ></article>

      <div className="mt-12 mb-12">
        <ul className="pl-0">
          {posts.map((post) => {
            return <PostItem key={post.attributes.slug} post={post} />
          })}
        </ul>
      </div>

      <div className="my-16">
        <Footer />
      </div>
    </Container>
  )
}

function PostItem({ post }: { post: Post }) {
  return (
    <li className="post-item my-6 list-none pl-0">
      <h3 className="text-2xl font-bold mb-2">
        <Link href={'/' + post.attributes.slug}>
          <a className="hover:underline no-underline cursor-pointer">
            {post.attributes.title}
          </a>
        </Link>
      </h3>

      {post.attributes.description && (
        <p className="text-slate-500 mb-2">{post.attributes.description}</p>
      )}
      <time className="text-slate-400 text-sm">
        {date(post.attributes.date)}
      </time>
    </li>
  )
}
