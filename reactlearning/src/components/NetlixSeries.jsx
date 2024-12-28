import React from "react";
import img from "../assets/b1.jpg"

const NetlixSeries = () => {
    const name="saloni";
    return (
        <>
        
            <div>
                <img src={img} alt="" width="40%" height="40%" />
                  <h1> {name}</h1>
                <h2> hello</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nulla vitae aut commodi laborum velit, labore quasi aliquam veniam, quis qui id nobis sapiente rerum? Atque laboriosam nostrum dolor. Asperiores.</p>
            </div>

        </>

    )
}
export default NetlixSeries;