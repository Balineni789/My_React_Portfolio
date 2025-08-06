
// import React, { useState, useEffect } from 'react';

// function ProductCards() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const API_URL = 'https://fakestoreapi.com/products';

//   const fetchData = async () => {
//     try {
//       setTimeout(async () => {
//         const response = await fetch(API_URL);
//         const products = await response.json();
//         setData(products);
//         setLoading(false); 
//       }, 3000);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div style={{
//         height: '80vh',
//         margin: '0 auto',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: '50px',
//         fontWeight: 'bold',
//         color: 'blue'
//       }}>
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '20px',
//       padding: '20px'
//     }}>
//       {data.map((product) => (
//         <div key={product.id} style={{
//           border: '2px solid blue',
//           borderRadius: '8px',
//           padding: '15px',
//           textAlign: 'center',
//           boxShadow: '0 2px 5px rgba(49, 163, 153, 0.1)',
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: '350px'
//         }}>

//           <h3 style={{
//             margin: '0 0 15px 0',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             color: 'grey',
//             lineHeight: '1.4',
//             wordWrap: 'break-word',
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             display: '-webkit-box',
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: 'vertical',
//             minHeight: '44px'
//            }}>
//             {product.title}
//           </h3>
          
//           <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{
//                 height: '180px',
//                 width: '180px',
//                 objectFit: 'contain'
//               }}
//             />
//           </div>
          
//           <div style={{
//             marginTop: '15px',
//             padding: '10px',
//             backgroundColor: '#f8f9fa',
//             borderRadius: '5px'
//            }}>
//             <p style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#007bff',
//               margin: '0'
//             }}>
//              Price: <span style={{fontWeight:'bold', color:'grey'}}>${product.price}</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductCards;



import React, { useState, useEffect } from 'react';

function AxiosApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const API_URL = 'https://fakestoreapi.com/products';

  const fetchData = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch(API_URL);
        const products = await response.json();
        setData(products);
        setLoading(false); 
      }, 3000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '80vh',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'blue'
      }}>
        Loading...
      </div>
    );
  }

  return (
  <div style={{
    margin:'10px',
    backgroundColor:'white',
    boxShadow:'0 4px 5px black'
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {data.map((product) => (
        <div key={product.id} style={{
          border: '2px solid blue',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'center',
          boxShadow: '0 2px 5px rgba(49, 163, 153, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '350px'
        }}>

          <h3 style={{
            margin: '0 0 15px 0',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'blue',
            lineHeight: '1.4',
            wordWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '44px'
           }}>
            {product.title}
          </h3>
          
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                height: '180px',
                width: '180px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          <div style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px'
           }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#007bff',
              margin: '0'
            }}>
             Price: <span style={{fontWeight:'bold', color:'grey'}}>${product.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default AxiosApi;