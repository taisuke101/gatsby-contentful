import styled from 'styled-components';

export const Details = styled.div`
    @media (min-width: 768px) {
        display: flex;
		justify-content: space-between;
    }
`

export const Detail = styled.div`
    ul {
        margin: 30px;
    }
    display: flex;
    margin-bottom: 50px;
    margin: auto;
    figure {
        max-width: 320px;
        margin: auto;
    }
    h3 {
        margin-bottom: 16px;
        font-size: 30px;
        text-align: center;
    }
    p:first-of-type {
        margin-bottom: 30px;
        color: #477294;
        font-size: 19px;
    }
    p:last-of-type {
        font-size: 18px;
        line-height: 1.8;
    }
    p {
        text-align: center;
    }
    @media (min-width: 768px) {
        p:last-of-type {
            font-size: 15px;
        }
    }
    @media (min-width: 950px) {
        p:last-of-type {
            font-size: 15px;
        }
    }
`