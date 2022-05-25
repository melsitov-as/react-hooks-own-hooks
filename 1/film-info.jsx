const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});
    
    React.useEffect(() => {         
       let isNeedUpdate = true;

        fetch(`https://5.react.pages.academy/wtw/films/${id}`)
           .then((response) => response.json())
           .then((film) => isNeedUpdate && setFilm(film))

      return () => isNeedUpdate = false;
   }, [id]);
    
    return (         
        <section className="block">
               <div>
                   <button
                       onClick={() => {setId((prevId) => prevId + 1)}}
                       className="custom-button"
                   >
                       Следующий фильм…
                   </button>                    
                   <h3>Идентификатор фильма: {id}</h3>
               </div>
               
               {film.name && <h1>{film.name}</h1>}
           </section>
    )
}


export default FilmInfo