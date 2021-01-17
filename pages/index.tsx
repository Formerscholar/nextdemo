import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '@/styles/index.less'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'
import { getLoginCode } from '@/services/login'
import request from '@/services'
import { startClock } from '@/store/actions'

import dynamic from 'next/dynamic' //懒加载组件
const Phone = dynamic(import('@/components/phone/phone')) //懒加载组件

// 服务端渲染 Server-side rendering
export async function getServerSideProps() {
  const { code, msg } = await getLoginCode({
    mobile: '18083795906',
  })
  if (code !== 200) {
    message.error(msg)
  }

  return { props: { msg } }
}

export default function Home(props) {
  console.log('====================================')
  console.log(props)
  console.log('====================================')
  const router = useRouter()

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [])

  // 表单提交请求
  async function handleClick() {
    let res = await request({
      url: '/api/home/hello',
      method: 'GET',
      params: {
        id: 123,
      },
    })
    console.log('====================================')
    console.log(res)
    console.log('====================================')
  }

  const linkClick = () => {
    router.push({
      pathname: '/about',
      query: {
        set: 'xxx',
      },
    })
    // router.push('/about?name=123')
  }

  const linkDeailClick = () => {
    console.log('====================================')
    console.log('prefetch')
    console.log('====================================')
    router.push(`/list?data=obj`)
  }

  return (
    <div className="container">
      <Head>
        <title>teacher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <code>{JSON.stringify(state, null, 4)}</code>
      <Button type="primary" onClick={handleClick}>
        hello
      </Button>
      <span>{props.msg}</span>
      <img src="./images/1.png" alt="logo" />
      <Link href="/about">
        <h1>跳转about</h1>
      </Link>
      <Link
        href={{
          pathname: '/about',
          query: {
            name: '123',
          },
        }}
      >
        <h1>跳转about传参</h1>
      </Link>
      <Button type="primary" onClick={linkClick}>
        js跳转about
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={linkDeailClick}>
        js跳转list
      </Button>
      <br />
      <br />
      <Phone />
    </div>
  )
}
