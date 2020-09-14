import styled from 'styled-components';

export const Container = styled.div`
    width: 84%;
	max-width: 1147px;
	margin: 0 auto;
`

export const Posts = styled.div`
    display: flex;
	flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
	
    
    article {
	width: 48%;
	margin-bottom: 20px;
    }
    figure {
	max-height: 100%;
	height: 150px;
    }
    img {
	height: 150px;
	object-fit: cover;
    }
    h3 {
	margin-top: 10px;
    font-size: 14px;
    text-align: center;
    }

    @media (min-width: 768px) {
        h3 {
		font-size: 16px;
        }
        figure {
		height: 200px;
        }
        img {
		height: 200px;
        }
    }
`

export const Post = styled.div`
    margin: 23px;
`

export const Bar = styled.h2`
    padding-bottom: 16px;
    position: relative;
    
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
    .content .bar::before {
	width: 200px;   
    }

    @media (min-width: 768px) {
        max-width: 375px;
		margin-left: auto;
        margin-right: auto;
        ::before,
        ::after {
		width: 73%;
        }
        .content .bar {
		max-width: none;
        }	
        .content .bar::before {
		width: 312px;
        }
        .content .bar::after {
		width: 81%;
        }
    }   
`