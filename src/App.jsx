import { useEffect } from 'react'
import './App.css'
import User from './pages/user/User'
import { resetToken } from './pages/user/userSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetToken());
    
  }, [])
  
  return (
    <>
    <User />
    </>
  )
}

export default App
