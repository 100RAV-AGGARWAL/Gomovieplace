import styles from "styled-components";

export const Wrapper = styles.div`
	background: var(--darkGrey);
	padding 0 20px;
`;

export const Content = styles.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);	
	padding: 20px 0;
	margin: 0 auto;
`;

export const LogoImg = styles.img`
	width: 200px;

	@media screen and (max-wdith: 500px) {
		width: 150px;
	}
`;

export const TMDBLogoImg = styles.img`
	width: 100px;

	@media screen and (max-wdith: 500px) {
		width: 80px;
	}
`;