
// import React from 'react'
// import Teamdeatails from './Components/Teamdetails'

// function App() {

//   return (
//     <>
//       <div>
//         <h1 style ={{fontSize:'40px', color:'red', textAlign:'center', textDecoration:'underline', textDecorationColor:'black'}}>Team Details</h1>
//         <Teamdeatails name="Harsha"  role="Developer"/>
//         <Teamdeatails name="Kirana"  role="DeveOops"/>
//         <Teamdeatails name="Rajeev"  role="Engineer"/>
//       </div>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Teams from './Components/Teams'

// function App() {
//   return (
//     <div>
//        <h1><Teams/></h1>
//     </div>
//   )
// }

// export default App;



// import React from 'react'
// import Fruits1 from './Components/Fruits'

// const Fru = "Litchi";

// const App = () => {
//   return (
//     <>
//       <h1 style={{textAlign:'center',color:'red',textDecoration:'underline'}}>Welcome To React</h1>
//       <h2 style={{textAlign:'center',color:'blue'}}>I Like {Fru} Fruits</h2>
//       <h3 style={{textAlign:'center',color:'green'}}><Fruits1/></h3>
//     </>
//   )
// }

// export default App;



// import React from 'react'
// import FirstComp from './Props/FirstComp';
// import SecondComp from './Props/SecondComp';
// import ThirdComp from './Props/ThirdComp';
// import FourthComp from './Props/FourthComp';


// const User = {
//   name : "Harsha",
//   city : 'Hyderabad',
//   area : "Ampeerpet",
//   job  : "Developer"
// }

// const App = () => {
//   return (
//     <div>
//       <FirstComp  Users = "Harsha"/>  
//       <SecondComp Users = {User.city}/>
//       <ThirdComp  Users = {User.area}/>
//       <FourthComp Users = {User}/>
//     </div>
//   )
// }

// export default App;



// import React from 'react'
// // import Hooks from './StateManagement/Hooks';
// import UseEffect from './StateManagement/UseEffect';

// function App() {
//   return (        
//      // <div><Hooks/></div>      
//     <><UseEffect/></>
//   )
// }

// export default App;



// import React from 'react'
// import './App.css'
// import FormEvents from './FormEvents/FormEvents'

// function App() {
//   return (
//     <div>
//       <h1>Welcome To React</h1>
//       <h2><FormEvents/></h2>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Objects from './DataObj/Objects'

// function App() {
//   return (
//     <div>
//       <h1 style={{textAlign:'center', color:'red'}}>Welcome To React</h1> 
//      <Objects/>
//     </div>
//   )
// }

// export default App;



// import React from 'react'
// import Api from './API\'S/Api'

// function App() {
//   return (
//     <div>
//       <h1 style={{textAlign:'center', color:'red', textDecoration:'underline'}}>Welcome To React API'S</h1> 
//        <Api/> 
//     </div>
//    )
//  }

//  export default App;



// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import FirstRoute from './Routing/FirstRoute'
// import SecondRoute from './Routing/SecondRoute'
// import ThirdRoute from './Routing/ThirdRoute'
// import NavBar from './Routing/NavBar'

// function App() {
//   return (
//     <div style={{textAlign:'center'}}>
//      <h1 style={{textAlign:'center', color:'red', textDecoration:'underline'}}>Welcome To React Routing</h1> 
//       <NavBar/>
//       <Routes>
//         <Route path ='/1' element ={<FirstRoute/>}></Route>
//         <Route path ='/2' element ={<SecondRoute/>}></Route>
//         <Route path ='/3' element ={<ThirdRoute/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import { GiftProvider } from './StateManagement/UseContext';
// import Bombay from './StateManagement/Bombay';

// function App() {

//   const gift = 'AP'

//   return (
//     <div>
//       <h1 style={{textAlign:'center', color:'red', textDecoration:'underline'}}>
//         Welcome To React UseContext-Hooks
//       </h1>
//       <hr/>
//       <h1 style={{textAlign:'center', color:'blue', textDecoration:'underline'}}>
//         AP: Sending Gift To Gujurat
//       </h1>
//       <GiftProvider>
//         <Bombay gift={gift}/>
//       </GiftProvider>
//     </div>
//   );
// }

// export default App;



// import React from 'react'
// import FormEvents2 from './FormEvents/FormEventsTailwind'

// function App() {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', color: 'red', fontSize:'30px'}}>Welcome To React Axios-Api</h1><hr/>
//       <FormEvents2/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './Portfolio/Navbar'
import Hero from './HeroSection/Hero'
import About from './About/About'
import Services from './Services/Services'
import MyWork from './MyWork/MyWork'
import Contacts from './Contacts/Contacts'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App