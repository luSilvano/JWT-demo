import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";

export function Login() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameInput(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePasswordInput(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    if (username && password) {
      const isLogged = await auth.signin(username, password)
      if (isLogged) {
        navigate('/')
      }
      else {
        alert('Invalid credentials')
      }
    }

  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <input
          type="text"
          value={username}
          onChange={handleUsernameInput}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
          placeholder="Password"
        />

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}