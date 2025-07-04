import { jwtDecode } from 'jwt-decode'

function getUserFromToken() {
  const token = localStorage.getItem('userToken')
  if (!token) {
    return null
  }
  try {
    // The decoded object will contain { id: ..., email: ..., iat: ..., exp: ... }
    const decodedToken = jwtDecode(token)
    return decodedToken
  } catch (error) {
    console.error('Invalid token:', error)
    return null
  }
}

export { getUserFromToken }

// --- Example Usage ---
const userData = getUserFromToken()
if (userData) {
  console.log('User ID is:', userData.id)
  console.log('User Email is:', userData.email)
}
