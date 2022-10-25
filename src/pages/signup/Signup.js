import { useState } from 'react'
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <form className="auth-form">
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input required type="file" />
      </label>

      <button className="btn">Sign up</button>
    </form>
  )
}

export default Signup
