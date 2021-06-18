import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { pid, foo, comment } = router.query

  return <div>
    <p>Post: {pid}, foo: {foo} </p>
    <p>comment: {comment}</p>
  </div>
}

export default Comment