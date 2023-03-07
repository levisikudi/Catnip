import { set } from 'mongoose';
import React, { useState, useEffect } from 'react'
import { getcats } from '../../utilities/functions';

const DisplayCats = () => {

    const [cats, setcats] = useState([])

    //  useEffect(() => {
    //     console.log("making cat call");
    //     makeServerCall()
    // }, []);
    
    const makeServerCall = async () => {
        let serverResponse = await getcats()

        let catArray = serverResponse.data.results;
        setcats(catArray)
        console.log(catArray);
    }

    let catSlideJSX = cats.map((cat, index)=>{
        return(
            <div key={index}>
                <img src={cat.picture}  />
                <h1>{cat.name}</h1>  
            </div>
        )
    })
  return (
    <div>Display of Cats{catSlideJSX}</div>
  )
}

export default DisplayCats