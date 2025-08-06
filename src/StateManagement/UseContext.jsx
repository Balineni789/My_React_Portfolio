
import {createContext, useContext, useState} from 'react';

const GiftContext = createContext()

export const GiftProvider = ({children}) => {

    const [state, setState] = useState({
      name: 'Harsha',
      city: 'Ongole'
    })

    return (
       <GiftContext.Provider value ={{state, setState}}>
          {children}
       </GiftContext.Provider>
    )
}

export const useData = ()=> useContext(GiftContext);


