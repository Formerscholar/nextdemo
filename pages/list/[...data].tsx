import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MoreQuery() {
  const router = useRouter()
  console.log('====================================')
  console.log(router.query)
  console.log('====================================')

  return (
    <div className="container">
      <Head>
        <title>teacher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>多个参数{router.query.data}</h1>
      <span
        onClick={() => {
          router.back()
        }}
      >
        返回上一页
      </span>
    </div>
  )
}
