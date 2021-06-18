import {useRouter} from 'next/router'

const StaticPost = ({post}) =>  {
  const date = new Date(post.time).toDateString()
  return (
  <div>
    <p> Static-generated Post </p>
    <p> Contents in this post are statically-generated. Data is fetched at build time and passed to page on pre-render.</p>
    <h1>#{post.id}: {post.title}</h1>
    <p>URL: <a href={post.url}>{post.url}</a></p>
    <p>Date: {date}</p>
  </div>
  )
}


// pre-rendered *paths* depend on external data
// list of dynamic routes you expect to need later. rendered at npm run build.
// fallback is used when user requests a non-predefined page, and can be detected with router.isFallback

export async function getStaticPaths(){
  const res = await(fetch('https://hacker-news.firebaseio.com/v0/topstories.json?'))
  const data = await res.json()
  const paths = data.map((pId) => ({
    params: { pId: pId.toString() }
  }))
  return { paths, fallback: false }
}


export async function getStaticProps({ params }){
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.pId}.json`)
  const post = await res.json()
  return {props: {post}}
}



export default StaticPost
