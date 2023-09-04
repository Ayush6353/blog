import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const useAuthProtection = () => {
  const router = useNavigate
  ()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if (!auth.user) {
      router.replace('/')
    }
  }, [auth.user, router])

  return auth.user
}

export default useAuthProtection
