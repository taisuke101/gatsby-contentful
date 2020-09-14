import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter,
    faFacebookSquare,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const data = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faTwitter} aria-label='Twitterへのリンク'></FontAwesomeIcon>,
        url: 'https://www.twitter.com/taitai_IT',
        label: 'twitterへのリンク'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faFacebookSquare} aria-label='Facebookへのリンク'></FontAwesomeIcon>,
        url: 'https://www.facebook.com/taisuke.yamamoto.988',
        label: 'Facebookへのリンク'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faInstagram} aria-label='Instagramへのリンク'></FontAwesomeIcon>,
        url: 'https://www.twitter.com/taitai_IT',
        label: 'Instagramへのリンク'
    },


]
const links = data.map( link => {
    return (
        <li key={link.id}>
            <a href={link.url} aria-label={link.label}>
                {link.icon}
            </a>
        </li>
    )
})

export default () => {
    return (
        <SNS>
        {links}
        </SNS>
    )
}

const SNS = styled.ul`
	display: flex;
	list-style: none;
	font-size: 40px;

    li:not(:last-child) {
        margin-right: 30px;
    }

`
