// Register using fetch
const inscription = async (username, password) => {
    const response = await fetch('/api/inscription', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    return data
}

export default inscription;