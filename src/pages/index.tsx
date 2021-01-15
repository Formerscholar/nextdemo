import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/index.less'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd'
import { startClock } from '../store/actions'
import { getLoginCode, getLogin } from '../services/login'

// 服务端渲染
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
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [])

  return (
    <div className="container">
      <Head>
        <title>teacher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <code>{JSON.stringify(state, null, 4)}</code>
      <Button type="primary">hello</Button>
      <span>{ props.msg}</span>
    </div>
  )
}
