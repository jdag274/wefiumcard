import React from 'react';
import "./style.css/Cards.css";
import "../App.css";

const Cards = () => {
    return (
        <div className="main">
        <div className="container">
            <div className="card front">
                <h1 className="title">WeFium</h1>
                <p className="front_text">Jose Aguilera</p>
            </div>
            <div className="card back">
                <h1>INFORMACION</h1>
                <h3>Nombre: <span>Jose</span></h3>
                <h3>Apellido: <span>Aguilera</span></h3>
                <h3>Email: <span>jdag274@gmail.com</span></h3>
                <h3>Edad: <span>21</span></h3>
                
            </div>
        </div>
        <div className="container">
            <div className="card front">
                <h1 className="title">WeFium</h1>
                <p className="front_text">Daniel Gomez</p>
            </div>
            <div className="card back">
                <h1>INFORMACION</h1>
                <h3>Nombre: <span>Daniel</span></h3>
                <h3>Apellido: <span>Gomez</span></h3>
                <h3>Email: <span>jdag274@gmail.com</span></h3>
                <h3>Edad: <span>25</span></h3>
                
            </div>
        </div>
        <div className="container">
            <div className="card front">
                <h1 className="title">WeFium</h1>
                <p className="front_text">Victor Aguilera</p>
            </div>
            <div className="card back">
                <h1>INFORMACION</h1>
                <h3>Nombre: <span>Victor</span></h3>
                <h3>Apellido: <span>Aguilera</span></h3>
                <h3>Email: <span>jdag274@gmail.com</span></h3>
                <h3>Edad: <span>27</span></h3>
                
            </div>
        </div>
        </div>
    )
}

export default Cards
