import getPostMetadata from '@/types/getPostMetadata'
import PostReview from '@/types/PostReview'

export default function Home() {
  const postPostMetadata = getPostMetadata()

  const postPreviews = postPostMetadata.map((post) => {
    return <PostReview key={post.slug} {...post} />
  })

  return (
    <main>
      <div className="flex flex-col w-full min-h-[calc(100vh-10rem)] items-center mt-4">
        <div className="w-auto tablet:w-1/2 desktop:w-1/3  ">
          {postPreviews}
        </div>
      </div>
    </main>
  )
}
