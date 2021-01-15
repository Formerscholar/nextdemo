import Head from 'next/head'
import '../styles/index.less'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button type="primary">hello</Button>
    </div>
  )
}
