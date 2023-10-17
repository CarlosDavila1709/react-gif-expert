import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category }) =>{
   
    const { images, isLoading } = useFetchGifs( category );

    console.log({ isLoading });
    //const [counter,setCounter] = useState(10);
    // const [images,setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {
    //     getImages();
    // },[] )

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid" >
                {
                    images.map( (image) =>(
                        // <li key={image.id}>{image.title}</li>
                        <GifItem 
                          key={ image.id }
                          title={ image.title }  
                          url={ image.url }
                        />
                    ) )
                }
            </div>
            {/* <h3>{ counter }</h3> */}
            {/* <button onClick={ () => setCounter( counter + 1 )} >+1</button> */}
        </>

    )
}