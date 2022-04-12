import React from "react";
import { connect } from "react-redux";


const Estudiantes = ({ estudiantes, quitarEstudiante }) => (
    <section>
        <h2>ESTUDIANTES</h2>
        <div className="espacio-estudiantes">
            {
                estudiantes.map(p => (
                    <artricle className="container-estudiante" key={p.id}>
                        <div className="card-div-estudiantes">
                            <div className="card-div-img-estudiante">
                            <img className="img-estudiante-style" src={p.image} alt={p.name} />
                            </div>
                            <div className="card-div-name-button">
                            <p className="name-estudiante">{p.name}</p>
                            <button className="btn-quitar-estudiante" onClick={() => quitarEstudiante(p)}>X</button>
                            </div>
                        </div>
                    </artricle>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    estudiantes: state.estudiantes
})

const mapDispatchToProps = dispatch => ({
    quitarEstudiante(personaje) {
        dispatch({
            type: "QUITAR_ESTUDIANTE",
            personaje
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Estudiantes)