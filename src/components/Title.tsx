import React, { CSSProperties } from 'react';
import styles from '../styles/components/Title.module.scss';
const Title = (props: { children: React.ReactNode; style?: CSSProperties }) => {
	return (
		<h1 className={styles.title} style={props.style}>
			{props.children}
		</h1>
	);
};

export default Title;
