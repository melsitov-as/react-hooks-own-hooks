
 const useFilm = (filmId) => {
    const [film, setFilm] = React.useState({});    

    React.useEffect(() => {         
       let isNeedUpdate = true;

        fetch(`https://5.react.pages.academy/wtw/films/${filmId}`)
           .then((response) => response.json())
           .then((film) => isNeedUpdate && setFilm(film))

      return () => isNeedUpdate = false;
   }, [filmId]); 

   return film;
}


const FilmInfo = () => {
    const [id, setId] = React.useState(1);    
    const film = useFilm(id);
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
Теперь воспользуемся хуком в компоненте FilmInfo. Поскольку это обычная функция, мы можем просто её вызвать. Всё, работоспособность приложения полностью восстановлена, и мы вынесли часть функциональности в созданный хук. Визуально всё выглядит как обычная функция, и это наглядней, чем HOC. Мы рассмотрели простой пример, но можно пойти чуточку дальше и модифицировать хук useFilm в useFetch, тем самым создав универсальный хук для выполнения сетевых запросов.