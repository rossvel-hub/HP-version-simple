import React from "react";
import { connect } from "react-redux";

const Personajes = ({personajes, agregarEstudiante, agregarStaff}) => (
    <section>
                <h3>PERSONAJES</h3>
            <div className="container-all-cards">
                {
                    personajes.map(p => (
                <article className="container-card" key={p.id}>
                    <div className="card" >
                        <div className="card-img">
                            <img className="img-style" src={p.image} alt="" />
                        </div>
                        <div className="card-info" >
                            {/* <p className="status">VIVO / ESTUDIANTE</p> */}
                            <p className="name">Nombre: {p.name}</p>
                            <p className="b-day">Cumpleaños:{p.dateOfBirth}</p>
                            <p className="gender">Genero: {p.gender}</p>
                            <p className="color-eyes">Color de ojos: {p.eyeColour}</p>
                            <p className="color-hair">Color de cabello: {p.hairColour}</p>
                            <p className="house-p">Casa: {p.house}</p>
                        </div>
                    </div>
                    <div className="btns-container">
                    <button className="btn-titular" onClick={() =>  agregarEstudiante(p)}>ESTUDIANTE</button>
                    <button className="btn-suplente" onClick={() =>  agregarStaff(p)}>STAFF</button>
                    </div>
                </article>
                    ))
                }
            </div>
    </section>
)


const mapStatetoProps = state => ({
    personajes: state.personajes
})

const mapDispatchToProps = dispatch => ({
    agregarEstudiante(personaje) {
        dispatch ({
            type: "AGREGAR_ESTUDIANTE",
           personaje
        })
    },

    agregarStaff(personaje) {
        dispatch ({
            type: "AGREGAR_STAFF",
            personaje
        })
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Personajes)