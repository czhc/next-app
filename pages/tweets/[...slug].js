import { useRouter } from 'next/router'

const Tweets = () => {
  const router = useRouter()
  const { slug } = router.query

  return <div>
    <p>Slugs are: { typeof(slug)} with value(s): {slug} </p>
    <p> routing follows: predefined routes > dynamic routes > catchall routes </p>
    </div>
}

export default Tweets