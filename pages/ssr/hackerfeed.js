import { useRouter } from 'next/router'
import Link from 'next/link'

const SSRHackerFeed = ({ postIds, error }) => {
  const router = useRouter()

  return (
    <div>
      <h1>Static-generated HackerFeed</h1>
      <p>Fetching post Ids from top posts: { postIds.join(', ').substring(0,50) + '...' }</p>
      <ul>
        {
          postIds.map((pId) => (
           <li><Link href={`/ssr/hackerfeed/${pId}`}><a>{pId}</a></Link></li>
         ))
        }
      </ul>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await(fetch('https://hacker-news.firebaseio.com/v0/topstories.json?'))
  const data = await res.json()
  return { props: { postIds: data }}
}


export default SSRHackerFeed