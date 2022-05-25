
 const useFilm = (filmId) => {
     
}


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
Начнём с самого главного. React Hook — это самая простая функция. React позволяет нам создавать собственные функции-хуки. В них само собой мы можем использовать другие хуки, например, входящие в основную поставку React. Единственное требование к собственным хукам — соблюдение правил именования. Функции, которые являются хуками должны именоваться с use. Например, useFilm. Отличное имя для хука, который содержит код получения информации о фильме с сервера.

Попробуем создать свой первый хук useFilm. Сначала опишем функцию. Эта функция будет принимать один единственный параметр — идентификатор фильма, информацию по которому мы хотим получить с сервера.