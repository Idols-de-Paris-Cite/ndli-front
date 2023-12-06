// Login using fetch
const connexion = async (username, password) => {
    const response = await fetch('/api/connexion', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    return data
}

export default connexion;