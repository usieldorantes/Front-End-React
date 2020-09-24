import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

class Grafica extends Component {
  state={
    respuesta:[],
    continentes:[],
    porcentajes:[],
    colores:[],
    data:[],
    opciones:[]
  }
  async peticion(){
    var peticion=await fetch('http://localhost:3003/poblacion');
    var respuesta=await peticion.json();
    this.setState({respuesta: respuesta});
    var continentes=[], porcentajes=[];
    this.state.respuesta.map((elemento)=>{
      continentes.push(elemento.continente);
      porcentajes.push(elemento.porcentaje);
    });
    this.setState({continentes: continentes, porcentajes: porcentajes});
    console.log(this.state.continentes);
    console.log(this.state.porcentajes);
  }
  generarCaracter(){
    var caracter =["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero =(Math.random()*15).toFixed(0);
    return caracter[numero];
  }
  colorHEX(){
    var color = "";
    for (var i = 0; i < 6; i++) {
     color = color + this.generarCaracter();
    }
    return "#" + color;
  }
  generarColores(){
    var colores=[];
    for (var i = 0; i < this.state.respuesta.length; i++) {
      colores.push(this.colorHEX());
        }
        this.setState({colores:colores});
        console.log(this.state.colores);
  }
  configurarGrafica(){
    const data ={
      labels: this.state.continentes,
      datasets:[{
        data: this.state.porcentajes,
        backgroundColor: this.state.colores
      }]
    };
    const opciones={
      responsive: true,
      maintainAspectRatio: false
    }
    this.setState({data: data, opciones: opciones})
  }
async componentDidMount(){
  await this.peticion();
  await this.generarColores();
  this.configurarGrafica();
}

render(){
  return(
    <div style={{width: '100%', height: '500px'}}>
    <h1>Población en el mundo</h1>
    <Pie data={this.state.data} opciones={this.state.opciones}/>
    </div>
  );
}
}
export default Grafica;
