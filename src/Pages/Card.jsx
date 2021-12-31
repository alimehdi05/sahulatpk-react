import React from 'react'
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return ( 
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <h6 className="card-title ">{props.price}</h6>
                            <p className="card-text">{props.description}</p>
                            
                            <NavLink to="/contact" className="btn btn-primary">Book Now</NavLink>
                        </div>
                    </div>
            </div>
        </>
     );
}
 
export default Card;