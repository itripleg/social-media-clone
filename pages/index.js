import Head from 'next/head'
import Image from 'next/image'
import { getSession } from 'next-auth/client'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-200">
      <Head>
        <title>Fakebook</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />

        {/*Widgets*/}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}