import styled from 'styled-components';

export const FooterStyle = styled.footer`
    padding-top: 60px;
	padding-bottom: 60px;
	color: #fff;
    background-image: none;
    background-size: cover;
    background-color: #477294;
    position: relative;

    @media (min-width: 768px) {
        padding-top: 120px;
		padding-bottom: 120px;
    }
`

export const Container = styled.div`
    width: 84%;
	max-width: 1147px;
	margin: 0 auto;
    display: flex;
	flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    @media (min-width: 768px) {
        flex-direction: row;
		justify-content: space-between;
		align-items: center;
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

export const Back = styled.div`
    position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    margin: auto;
`

