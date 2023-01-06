import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

export function Profile() {
  const auth = useContext(AuthContext)

  return (
    <div>
      <h2>PROFILE</h2>

      <p>Hello {auth.user?.name}!</p>
    </div>
  )
}