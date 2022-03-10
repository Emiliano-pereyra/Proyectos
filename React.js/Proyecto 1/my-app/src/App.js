
import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function App() { 
  const[linea1, setLinea1]= useState('');//la uso para cambiar el valor de esa variable
  const[linea2, setLinea2]= useState('');
  const[imagen, setImagen]= useState('');
  
  
  const onChangeLinea1= function (evento){
    
    setLinea1(evento.target.value);//paso para el ingreso de texto sea asimilado al final al exportar la imagen
  }
  
  const onChangeLinea2= function (evento){//funcion para la linea 2
    
    setLinea2(evento.target.value);
  }

  const onChangeimagen= function (evento){//evento para el cambio de imagen del selector
    
    setImagen(evento.target.value);
  }
  const onClickExportar= function (evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");//convierte el canvas a una url de uan imagen y la almacena en la variable
        var link = document.createElement('a');//crea el link llamado a
        link.download = 'meme.png';//descarga el elemento en formato png con el nombre de la imagen "meme"
        link.href = img;//el elemento a descargar va a hacer referencia a la url de la variable img
        link.click();//al hacer click en el boton, aplica la funcion de traslado al link
   });
  }
  
  return (
    <div className="App">
      <select onChange={onChangeimagen}>
        <option value="Bonk">Bonk</option>
        <option value="Messirve">MESSIRVE</option>
        <option value="Cartincho">Cartincho</option>
        <option value="Peppa pig rusia">PeppaPig rusa</option>
      </select><br/>
      
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/Memes/" + imagen + ".jpg"} ></img>
      </div>
    </div>
  );
}

export default App;
