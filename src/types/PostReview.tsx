import Link from 'next/link'
import { PostMetadata } from './PostMetadata'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PostReview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <Card
        className="w-auto border-2 border-slate-300 rounded-md shadow-sm bg-white 
        dark:bg-dark-300 dark:border-transparent m-4
        transition ease-in-out delay-50 
        hover:-translate-y-2 hover:scale-x-105 motion-reduce:transition-none motion-reduce:hover:transform-none 
        duration-300 delay-150 drop-shadow-xl "
      >
        <CardHeader>
          <CardTitle className=" w-fit text-wrap text-pink-700 hover:underline mb-2 dark:text-pink-700">
            {props.slug.replaceAll('-', ' ')}
          </CardTitle>
          <CardDescription className=" text-wrap text-slate-700 dark:text-gray-200 italic font-bold">
            description: {props.subtitle}
          </CardDescription>
          <CardDescription className=" text-wrap text-slate-700 dark:text-gray-200 ">
            author: {props.author}
          </CardDescription>
          <CardDescription className=" text-wrap text-sm text-slate-400 dark:text-gray-200 ">
            {props.date}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default PostReview
