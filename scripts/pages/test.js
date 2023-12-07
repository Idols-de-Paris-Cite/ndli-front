const testapi = (success) => {
    fetch('http://158.178.192.184:8080/ndli-back/testapi', {
        method: 'GET',
        params: JSON.stringify({
            name: 'Bob'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        console.log(data);
        success(data);
    });
}