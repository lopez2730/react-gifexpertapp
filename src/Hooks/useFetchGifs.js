import { useState, useEffect } from 'react'
import {getGifs} from '../helpers/GetGifs'


export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect (()=>{

        getGifs(category)
            .then( img=>{
                console.log(img)
                setState({
                    data: img,
                    loading: false,
                })

            })
    }, [category])


   
    return state; //{data: [], loading: true }

}


 // useEffect( () =>{
    //     getGifs( category )
    //     .then( setImages )
    // }, [category])  
    //los que está dentro de los [] significa que solo quieres que se renderice 1 vez