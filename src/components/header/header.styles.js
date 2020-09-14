import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
	flex-direction: column;
	justify-content: center;
	height: 134px;
    text-align: center;
    
    @media (min-width: 768px) {
        flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100px;
    }
`

export const Container = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	height: 134px;
    text-align: center;
    width: 84%;
	max-width: 1147px;
    margin: 0 auto;
    
    @media (min-width: 768px) {
        flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100px;
    }
`

export const Site = styled.div`
    text-align: center;
    p {
        margin-top: 20px;
        margin-bottom: 50px;
        font-size: 14px;
    }
    svg {
	vertical-align: bottom;
    }
    @media (min-width: 768px) {
        text-align: left;
        p {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 18px;
        }
    }
`

export const Navigation = styled.div`
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        margin-top: 18px;
        color: #477294;
    }

    li:not(:last-child) {
	    margin-right: 55px;
    }   

    @media (min-width: 768px) {
        .nav ul {
            margin-top: 0;
        }
    }

`
