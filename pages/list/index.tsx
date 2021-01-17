import Head from 'next/head'
import { useRouter } from "next/router";


export default function Index() {

  const router = useRouter()
  console.log('====================================');
  console.log(router.query);
  console.log('====================================');
  

  const detailPage = () => {
    router.push(`/list/456?name=chad`)
  }

  const pageMoreClick = () => {
    router.push(`/list/lilei/zhaosi/chad`)
    
  }

  return (
    <div className="container">
      <Head>
        <title>teacher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>list</h1>
      <h2 onClick={detailPage}>新闻1</h2>
      <h2 onClick={pageMoreClick}>跳转多个参数</h2>
      <span onClick={() => {
        router.back()
      }}>返回列表页</span>
    </div>
  )
}
