import React from "react";
import styles from "./styles.module.css"

export default function Card ({url}) {
	return (
		<div className={styles.card}>
    	<img width="140px" height="140 px" src={url} alt="unsolved"></img>
  	</div>
	)
};