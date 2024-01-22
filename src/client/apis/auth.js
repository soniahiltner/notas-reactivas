export const fetch = async (url, user) => { 
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

// Petición post a /api/register
export const register = fetch('/api/register', user)

// Petición post a /api/login
export const login = fetch('/api/login', user)