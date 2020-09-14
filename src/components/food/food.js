import React from 'react'

import FoodDetails from '../../constants/foodDetails/foodDetails';

const Food = () => {
    return (
        <section className="food">
            <div className="container">
                <h2 className="bar">Food Essence</h2>
                <FoodDetails />
            </div>
        </section>
    )
}


export default Food
