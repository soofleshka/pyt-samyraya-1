import React from "react";
import styles from "./header.module.css"

export const Header = ()=>{
    console.log(styles,1);
    return (
        <header>
            <a href="/" className={styles.logo}><span>SN</span></a>
        </header>
    )
}