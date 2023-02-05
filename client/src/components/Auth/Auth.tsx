import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import {
  CreateUserDocument,
  CreateUserMutation,
} from '../../graphql/generated/graphql'
import graphqlRequestClient from '../../graphql/graphql-client'
import { useMutation } from '@tanstack/react-query'

const Auth = () => {
  const { data: session } = useSession()

  const [username, setUsername] = useState('')

  const { mutate } = useMutation({
    mutationFn: (username: string) => {
      return graphqlRequestClient.request(CreateUserDocument, {
        username,
      })
    },
    onSuccess: (data: CreateUserMutation) => {
      console.log('data', data.createUser?.success)
      location.reload()
    },
    onError: (error: Error) => {
      console.log('error', error)
    },
  })

  const triggerLogin = () => {
    signIn()
  }

  return (
    <div>
      {session ? (
        <>
          <h2>Create a username</h2>
          <input
            placeholder="Username"
            type="text"
            name=""
            required={true}
            onChange={event => setUsername(event.target.value)}
            value={username}></input>
          <button onClick={() => mutate(username)}>Submit</button>
          <button onClick={() => signOut()}>Exit</button>
        </>
      ) : (
        <>
          <h2>Football betting game</h2>
          <button onClick={() => triggerLogin()}>Login using Google</button>
        </>
      )}
    </div>
  )
}

export default Auth
