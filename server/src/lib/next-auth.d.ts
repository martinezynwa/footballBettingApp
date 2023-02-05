import 'next-auth'

declare module 'next-auth' {
  type Session =  {
    user: User
  }

  type User = {
    id: string
    username: string
    image: string
  }
}
