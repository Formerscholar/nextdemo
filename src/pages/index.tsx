import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/index.less'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { startClock } from '../store/actions'

export default function Home() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <code>{JSON.stringify(state, null, 4)}</code>
      <Button type="primary">hello</Button>
    </div>
  )
}
