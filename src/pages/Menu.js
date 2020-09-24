import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from '../grafica/Grafica';

const cookies = new Cookies();

class Menu extends Component {



    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    async componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./Login";
        }

    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido: '+cookies.get('apellido'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
          <div className="container">
                <div className="row mt-4">
                <button className="btn btn-success btn-sm" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
                <div className="text-center">
            <TodoForm></TodoForm>
            </div>
            </div>
        );
    }
}

export default Menu;
