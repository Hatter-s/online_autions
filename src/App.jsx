import { useEffect } from 'react'
import './App.css'
import { resetToken } from './pages/user/userSlice'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from '@/app/routes';
import { handleToDateProduct } from '@/utils';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(dispatch) {
      dispatch(resetToken());
    }
    
  }, [dispatch])

  useEffect(() => {
    handleToDateProduct();
  }, [])
  
  
  return (
    <>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </>
  )
}

export default App
