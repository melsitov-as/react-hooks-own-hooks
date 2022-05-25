
 const useFilm = (filmId) => {
    React.useEffect(() => {         
       let isNeedUpdate = true;

        fetch(`https://5.react.pages.academy/wtw/films/${filmId}`)
           .then((response) => response.json())
           .then((film) => isNeedUpdate && setFilm(film))

      return () => isNeedUpdate = false;
   });   
}


const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});    

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
Теперь перенесём код, который отвечал за взаимодействие с сервером из компонента FilmInfo в функцию useFilm, которую мы создали в качетсве заготовки собственного хука. Мы перенесли код без каких-либо изменений за исключением правки имени переменной, в которой хранится идентификатор фильма. Обратите внимание, мы просто взяли и вынесли код из компонента. Правда пока ничего не работает.