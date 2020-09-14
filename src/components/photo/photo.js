import React from 'react'

import Image from '../image';

import {PhotoContainer, SrOnly} from './photo.styles';

const Photo = () => {
    return (
            <PhotoContainer>
                <SrOnly>Photo</SrOnly>
                <figure>
                    <Image
                        filename='berry.jpg'
                        alt=''
                        style={{ height: '100%' }}
                    />
                </figure>
            </PhotoContainer>
    )
}

export default Photo
