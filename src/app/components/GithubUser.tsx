import { Dialog } from "./Dialog"

export interface GithubUserProps {
  username: string
}

export async function GithubUser({ username }: GithubUserProps) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <Dialog />
    </div>
  )
}