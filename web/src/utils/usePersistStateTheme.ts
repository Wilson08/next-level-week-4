import { useEffect, useState } from 'react';



const usePersistStateTheme = (key: string, initialValue: object) => {

  const [state, setState] = useState(() => {

    const storageValue = localStorage.getItem(key);


    if(storageValue){
      return JSON.parse(storageValue);
    };

    return initialValue;

  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  },[key, state]);



  return [state, setState];
};



export default usePersistStateTheme;