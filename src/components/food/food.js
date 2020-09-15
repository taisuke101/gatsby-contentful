import React from 'react'

import FoodDetails from '../../constants/foodDetails/foodDetails';

import {FoodStyles, Container, Bar} from './food.styles';

const Food = () => {
    return (
        <FoodStyles>
            <Container>
                <Bar>Food Essence</Bar>
                <FoodDetails />
            </Container>
        </FoodStyles>
    )
}


export default Food
