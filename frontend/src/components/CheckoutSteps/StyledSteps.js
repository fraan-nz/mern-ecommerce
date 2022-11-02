import styled from "styled-components";

export const StyledSteps = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-bottom: 30px;

	div {
		text-align: center;
		color: ${({ theme }) => theme.secondary};
		font-weight: 600;
		border-bottom: 2px solid ${({ theme }) => theme.secondary};

		&.active {
			color: ${({ theme }) => theme.accent};
			border-color: ${({ theme }) => theme.accent};
		}
	}

	@media screen and (max-width: 488px) {
		div {
			font-size: 0.8rem;
		}
	}
`;
