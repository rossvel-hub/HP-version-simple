import React from "react";
import { connect } from "react-redux";

const Staff = ({ staff, quitarStaff }) => (
    <section className="section-staff">
        <h2 className="title-staff">STAFF</h2>
        <div className="staff">
            {
                staff.map(p => (
                    <artricle className="container-staff" key={p.id}>
                        <div className="card-div-staff"> 
                            <div className="card-div-img-staff">
                            <img className="img-staff-style" src={p.image} alt={p.name} />
                            </div>
                            <div className="card-div-name-button">
                            <p className="name-staff">{p.name}</p>
                            <button className="btn-quitar-staff" onClick={() => quitarStaff(p)}>X</button>
                            </div>
                        </div>
                    </artricle>


                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    staff: state.staff
})

const mapDispatchToProps = dispatch => ({
    quitarStaff(personaje) {
        dispatch({
            type: "QUITAR_STAFF",
            personaje
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Staff)