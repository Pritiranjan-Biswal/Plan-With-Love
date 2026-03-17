import { useState } from "react";





function Card(id, name, info, image, price) {
    const [readmor, setreadmore]=useState(false);
    const description=`${info.substring(0, 200)}....Read More`;
    return(
        <div className="card">
            <img src={image} className="image"> </img>
            <div className="tour-detaile">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )

}


export default  Card;