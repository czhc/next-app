import { useRouter } from 'next/router'
import Link from 'next/link'

const StaticHackerFeed = ({ postIds, error }) => {
  const router = useRouter()
  return (
    <div>
      <h1>Static-generated HackerFeed</h1>
      <p>Fetching post Ids from top posts: { postIds.join(', ').substring(0,50) + '...' }</p>
      <ul>
        {
          postIds.map((pId) => (
           <li><Link href={`/static/hackerfeed/${pId}`}><a>{pId}</a></Link></li>
         ))
        }
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  //http://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken
  const res = await(fetch('https://hacker-news.firebaseio.com/v0/topstories.json?'))
  const data = await res.json()
  if (!data){
    return {
      notFound: true
    }
  }
  return {
    props: { postIds: data }, revalidate: 10
  }
}


export default StaticHackerFeed