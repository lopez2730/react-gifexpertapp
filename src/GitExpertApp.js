import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GitExpertApp = () => {

    
    const [categories, setCategories] = useState(['Inuyasha'])


    // const handleAdd = () =>{
    //    setCategories(cats => [...cats, 'Inuyasha'])
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {/* <button onClick={handleAdd}>Agregar</button> */}
                {
                    categories.map( category  =>( 
                        <GifGrid 
                        key={category}
                        category={ category }
                        />
                    ))
                }
            </ol>


           

        </div>
    )
}
