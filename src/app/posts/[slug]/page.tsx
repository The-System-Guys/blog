import * as fs from 'fs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'
import matter, { GrayMatterFile } from 'gray-matter'
import getPostMetadata from '@/types/getPostMetadata'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'

const getPostContent = (slug: string): GrayMatterFile<string> => {
  const folder = 'articles/'
  const file = `${folder}${decodeURI(slug)}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props: any) => {
  const post = getPostContent(props?.params?.slug)

  return (
    <>
      <header>
        <title>{decodeURI(props.params.slug)}</title>
      </header>

      <div className="w-full flex justify-center items-center px-4 text-pretty mt-4">
        <div className="w-full mobile:w-full tablet:w-2/3 desktop:w-1/3 flex flex-col justify-center items-center">
          <h1 className="font-extrabold items-start text-3xl mb-4">
            {decodeURI(props.params.slug)}
          </h1>
          <article className="prose prose-zinc prose-pre:bg-black dark:prose-invert tablet:prose-md desktop:prose-lg max-w-none scroll-smooth focus:scroll-auto">
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              remarkPlugins={[remarkGfm, remarkFrontmatter]}
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '')

                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={dracula}
                      PreTag="div"
                      customStyle={{
                        backgroundColor: 'transparent',
                        opacity: '1',
                      }}
                      language={match[1]}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  )
}

export default PostPage
