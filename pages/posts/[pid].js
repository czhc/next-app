import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid, foo } = router.query

  return <p>Post: {pid}, foo: {foo} </p>
}

export default Post