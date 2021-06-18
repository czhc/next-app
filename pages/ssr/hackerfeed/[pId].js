import {useRouter} from 'next/router'

const StaticPost = ({post}) =>  {
  const date = new Date(post.time).toDateString()
  return (<div>
    <p>Page: SSR Post </p>
    <p> Contents in this post are server-side/dynamic rendered. Data is fetched on every request to pre-render frequently updated data. </p>

    <h1>#{post.id}: {post.title}</h1>
    <p>URL: <a href={post.url}>{post.url}</a></p>
    <p>Date: {date}</p>
  </div>)
}

// on each request. data returend by function to populate compeontn props
// only if you can access data need for page at _build time_
// this function is only run on the server, never run in client.
export async function getServerSideProps({params}){
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.pId}.json`)
  const post = await res.json()
  return {props: {post}}
}

export default StaticPost
