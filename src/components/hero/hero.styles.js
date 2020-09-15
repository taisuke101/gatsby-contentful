import styled from 'styled-components';

export const HeroStyles = styled.section`
    position: relative;
    figure {
	max-height: 100%;
	height: 450px;
    }
    figure img {
	width: 100%;
	height: 450px;
	object-fit: cover;
    }

    @media (min-width: 768px) {
        figure {
		height: 750px;
        }
        figure img {
		height: 750px;
        }
    }
`

export const Catch = styled.div`
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto auto 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: #fff;
    text-shadow: 0 0 20px rgba(0,0,0,0.5);
    
    h1 {
        font-size: 50px;
        margin-bottom: 10px;
        font-family: 'Caveat', cursive;
    }

    p {
        font-size: 15px;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 70px;
            margin-bottom: 30px;
        }
        p {
            font-size: 21px;
        }
    }

    @media (min-width: 900px) {
        h1 {
            font-size: 90px;
            margin-bottom: 30px;
        }
        p {
            font-size: 24px;
        }
    }

`

export const Wave = styled.div`
    position: absolute;
	right: 0;
	bottom: -10px;
	left: 0;
	margin: auto;
	width: 100%;
`