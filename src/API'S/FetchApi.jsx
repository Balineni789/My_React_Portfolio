
import React, { useEffect, useState } from 'react'

function FetchApi() {
  const [data, setdata] = useState([]);
  const Api_Url = 'https://fakestoreapi.com/prodmucts';

  const fetchData = async() => {
   try {
    const response = await fetch(Api_Url)
    const Json = await response.json()
    setdata(Json)
   }catch(error){
    console.error('Data Is Not Fetching From Your API', error)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '20px',
      padding: '20px'
    }}>
      {data.map((item)=>(
        <div key={item.id} style={{
          border: '2px solid blue',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 2px 5px rgba(49, 163, 153, 0.1)'
        }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
              marginBottom: '10px'
            }} 
          />
          <h3 style={{ margin: '5px 0' }}>{item.title}</h3>
          <p style={{ 
            fontWeight: 'bold',
            color: '#333',
            margin: '5px 0'
          }}>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default FetchApi
