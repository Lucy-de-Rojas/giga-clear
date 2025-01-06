import React from "react";
import styles from '../styles/searchBar.module.sass';


export default function SearchBar ({setSearchWord}):JSX.Element {

        function handleInputChange (e) {
                setSearchWord(e.target.value);
        }



        return <div className={styles.searchBarWrapper}>



                <input type="text" onChange={handleInputChange} className={styles.searchBar} placeholder="search"/>
        </div>
}