export default function Paginacion(props) {//export default permite el uso de esta funcion en otros archivos
//props lo uso para las propiedades que quiero recibir
//la funcion se va a encargar del paso entre paginas

  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {//para poder recorrer todas las paginas disponibles
      let pagina = i + 1;//se debe a que sino va a detectar una pagina 0 que no existe
      resultado.push(//hago un push para que se me devuelvan los contenidos de la pagina seleccionada
        <a onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? 'active' : ''}> 
          {pagina}
        </a>//esta pinta de color la pagina activa
      );
    }
    return resultado;
  }


  return (
    <div className="topbar-filter">

      <div className="pagination2">
        <span>Página {props.pagina} de {props.total}:</span>

        {getPaginas()}

      </div>
    </div>
  );
}