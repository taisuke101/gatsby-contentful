import styled from 'styled-components';

export const FoodStyles = styled.div`
    padding: 30px 0;
	text-align: center;
`

export const Container = styled.div`
    width: 84%;
	max-width: 1147px;
	margin: 0 auto;
`

export const Bar = styled.h2`
    padding-bottom: 16px;
    position: relative;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 50px;

    ::before,
    ::after {
        display: block;
        content: '';
        background-color: #0facde;
        width: 80%;
        height: 1px;
        position: absolute;
    }
    ::before {
        left: 0;
        bottom: 6px;
    }
    ::after {
        right: 0;
        bottom: 0;
    }

    @media (min-width: 768px) {
        max-width: 375px;
        margin-left: auto;
        margin-right: auto;

        ::before,
        ::after {
            width: 73%;
        }
    }

`
