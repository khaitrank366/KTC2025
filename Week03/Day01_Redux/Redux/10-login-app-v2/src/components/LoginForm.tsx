import React, { useState } from 'react'
import { login } from '../features/auth/authSlice'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../' // Đảm bảo bạn đã export 2 type này từ store.ts

// ✅ Custom hook đúng cú pháp
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ✅ Nếu login là createAsyncThunk, truyền object như dưới
    dispatch(login({ email, password }))
  }

  return (
    <div>
      <h2>Login</h2>
      {loading && <p>Loading...</p>}
      {isAuthenticated && (
        <p style={{ color: "green" }}>Logged in successfully</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
