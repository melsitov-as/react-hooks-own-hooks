
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
Во время применения useEffect мы взаимодействовали со стейтом. Именно в него мы помещали информацию о загруженном фильме. Сейчас в хуке useFilm стейта попросту нет. Необходимо перенести его часть из компонента FilmInfo. После переноса useEffect обязательно следует проверить зависимости, которые передаются вторым параметром. В нашем случае выполнение эффекта будет зависеть от изменения идентификатора фильма (filmId). Последнее, что необходимо сделать — вернуть из хука значение — информацию о фильме.

Мы перенесли стейт в собственный хук, и это повлияло на общую работоспособность приложения. Мы исправим это в следующем шаге.