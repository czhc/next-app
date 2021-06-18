import { useRouter } from 'next/router'
import useSWR from 'swr'

function Post() {
  const router = useRouter()
  const { pId } = router.query
  const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/item/${pId}.json`, fetcher)


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const { id, title, url, time } = data
  const date = new Date(time).toDateString()

  return  <div>
      <p> Client-side Render Post using SWR </p>
      <p> Contents in this page are fetched on client-side. SWR returns data from stale cache, fetch, and update with new data.  </p>

      <h1>#{id}: {title}</h1>
      <p>URL: <a href={url}>{url}</a></p>
      <p>Date: {date}</p>
    </div>
}


const fetcher = (...args) => fetch(...args).then(res => res.json())

export default Post
