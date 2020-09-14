import React from 'react'

import Image from '../../components/image';

import { Detail, Details } from './foodDetails-styles';

const data = [
    {
        id: 1,
        filename: 'fruit.jpg',
        alt: 'fruit',
        foodname: 'フルーツ',
        englishname: 'FRUIT',
        description: '甘くてすっぱくておいしい果実たち。',
        description2: '旬のフルーツを満喫します。'
    },
    {
        id: 2,
        filename: 'grain.jpg',
        alt: 'grain',
        foodname: '穀物',
        englishname: 'GRAIN',
        description: '食事の基本となる穀物。',
        description2: '毎日の活動のエネルギー源になります。'
    },
    {
        id: 3,
        filename: 'beverage.jpg',
        alt: 'beverage',
        foodname: '飲み物',
        englishname: 'BEVERAGE',
        description: 'リラックスするのに欠かせない飲み物。',
        description2: 'お気に入りの一杯はありますか？'
    }
]

const Foods = data.map( food => {
    return (
        <ul key={food.id}>
            <figure>
                <Image
                    filename={food.filename}
                    alt={food.alt}
                />
            </figure>
            <h3>{food.foodname}</h3>
            <p>{food.englishname}</p>
            <p>{food.description}</p>
            <p>{food.description2}</p>
        </ul>   
    )
})

export default () => {
    return (
        <Details>
            <Detail>
                {Foods}
            </Detail>
        </Details>
    )
}




