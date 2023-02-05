import type { NextPage, NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Auth from '../components/Auth/Auth'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (session?.user.username) {
    return {
      redirect: {
        destination: '/matches',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Auth />
    </>
  )
}

export default Home
