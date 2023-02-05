import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()

  if (!session?.user.username) return null

  return (
    <div className="flex flex-row gap-4 mb-10">
      <h2>{session.user.username}</h2>
      <Link href="/">Matches</Link>
      {session.user.id === process.env.NEXT_PUBLIC_ADMIN ? (
        <Link href="/admin">Dashboard</Link>
      ) : null}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default Navbar
