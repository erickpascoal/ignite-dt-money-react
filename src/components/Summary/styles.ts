import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3.2rem;
	margin-top: -13.0rem;

	div {
		background: var(--shape);
		padding: 2.4rem 3.2rem;
		border-radius: 0.4rem;
		color: var(--text-tilte);
		font-size: 1.6rem;

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		strong {
			display: block;
			margin-top: 1.6rem;
			font-size: 3.2rem;
			font-weight: 500;
			line-height: 4.8rem;
		}

		&.highlight-background {
			background-color: var(--green);
			color: #ffffff
		}
	}


`;