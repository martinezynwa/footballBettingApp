import type { NextPage, NextPageContext } from 'next'
import MatchesList from '../components/Matches/Matches'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session?.user.username) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const Matches: NextPage = () => {
  return (
    <>
      <MatchesList />
    </>
  )
}

export default Matches
