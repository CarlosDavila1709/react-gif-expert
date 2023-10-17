import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
  
  const  [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = ( newCategory ) =>{
    if( categories.includes(newCategory))return
     //categories.push(newCategory); 
     setCategories([ newCategory, ...categories ]);
     //setCategories( cat => ['Valorant', ...categories]);
  };
  return (
    <>

        <h1>GifExpertApp</h1>

        
        {/* <AddCategory setCategories={ setCategories } /> */}
        <AddCategory
            onNewCategory={ (value) => onAddCategory(value)}
        />
        {/* <button onClick={addCategory}>Agregar</button> */}

        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            ) )
        }

    </>
  )
}

export default GifExpertApp
