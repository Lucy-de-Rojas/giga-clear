import React from "react";
import styles from '../styles/searchBar.module.sass';


interface SearchBarProps {
    setSearchWord: (value: string) => void;
}


export default function SearchBar ({setSearchWord}: SearchBarProps): JSX.Element {

        function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
                setSearchWord(e.target.value);
        }



        return <div className={styles.searchBarWrapper}>



                <input type="text" onChange={handleInputChange} className={styles.searchBar} placeholder="search"/>
        </div>
}