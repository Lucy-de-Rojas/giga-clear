import { Layout } from "../components/layout";
import Posts from "src/components/posts";
import SearchBar from "src/components/searchBar";


import { useState, useEffect } from "react";



export default function Home():JSX.Element {


  const [searchWord, setSearchWord] = useState<string>('');




  return (
    <Layout>
      <SearchBar setSearchWord={setSearchWord}/>
      <Posts searchWord={searchWord} />
    </Layout>
  )
}
