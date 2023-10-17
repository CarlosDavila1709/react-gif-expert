
export const GifItem = ({title, url}) => {
    console.log({title,url});
    
  return (
    <div className="card"> 
        <img src={url} alt={title}></img>
        <p> { title } </p>
    </div>
  )
}
