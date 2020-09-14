import styled from 'styled-components';


export const PhotoContainer = styled.div`
    figure {
	max-height: 100%;
	height: 170px;
    }
    img {
	width: 100%;
	height: 170px;
	object-fit: cover;
    }

@media (min-width: 768px) {
	figure {
		height: 367px;
	}
	img {
		height: 367px;
	}
}
`

export const SrOnly = styled.h2`
	border: 0; 
	clip: rect(0 0 0 0); 
	height: 1px; 
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`