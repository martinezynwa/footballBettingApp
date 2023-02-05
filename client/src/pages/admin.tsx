import type { NextPage, NextPageContext } from 'next'
import AdminDashboardItems from '../components/Admin/AdminDashboard'
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

const AdminDashboard: NextPage = () => {
  return (
    <>
      <AdminDashboardItems />
    </>
  )
}

export default AdminDashboard
