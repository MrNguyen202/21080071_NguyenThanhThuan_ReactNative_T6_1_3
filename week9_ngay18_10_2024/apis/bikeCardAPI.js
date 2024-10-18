const uri = 'https://66ff35a72b9aac9c997e861d.mockapi.io/bikeCard'

export const addCard = async(bike) =>{
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bike)
  })
  return response.json();
}