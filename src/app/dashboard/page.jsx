"use client"
import { useSession } from 'next-auth/react'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {

  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store"
  //     })
  //     if (!res.ok) {
  //       setErr(true)
  //     }

  //     const data = await res.json()
  //     setIsLoading(false)
  //     setData(data)
  //   }
  //   getData()
  // }, [])

  const session = useSession()
  console.log(session)

  const fetcher = (...arg) => fetch(...arg).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  return (
    <div className={styles.container}>
      Dashboard
    </div>
  )
}

export default Dashboard
