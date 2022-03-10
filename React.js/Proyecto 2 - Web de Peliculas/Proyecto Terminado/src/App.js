import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJson;//obtiene los datos del array metiendolos en la variable

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }
// useEffect toma una funcion como argumento esta se usa por defecto cuando el componente se renderiza por primera vez y despues cada vez que el componente se actualice


  const getTotalPaginas = () => {//esta funcion es para obtener el total de paginas dependiendo del total de peliculas que hay por pagina
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);//uso ceil ya que me va a redondear el numero de peliculas por pagina para arriba, es mas por vista que otra cosa
  }

  cargarPeliculas();

  return (
   //pageWrapper contiene el codigo html excepto por la lista de peliculas
   <PageWrapper>

      {peliculas.map(pelicula =>//recorro el array del archivo peliculas.json, la diferencia con forEach es que map puede recibir un valor ademas de funciones
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {//indica la pagina actual y cuantas hay en total, ademas recibe un evento a realizar el cambio de paginas
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
