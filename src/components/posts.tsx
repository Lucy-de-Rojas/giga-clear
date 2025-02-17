import React from "react";
import {useState, useEffect} from 'react';


import styles from '../styles/posts.module.sass';
import { DataPost } from "src/dataPostInterface";
import Card from "./card";
import NoPosts from "./noPosts";








const Posts = ({searchWord}:{searchWord: string}) => {

        const [posts, setPosts] = useState<DataPost[]>([]);
        const [postsFiltered, setPostsFiltered] = useState<DataPost[]>([]);

        let highlightText = {"font-weigth": "bold",}






        useEffect(() => {
                // getting data for posts:
                async function getPosts() {
                        let response = await fetch("/api/posts");
                        let data: DataPost[] = await response.json();

                        setPosts(data);
                        setPostsFiltered(data);
                }
                getPosts();
        }, []);





        useEffect(() => {
                // filtering posts:
                if (searchWord) {
                        let filteredPosts = posts.filter((item) => {
                                return item.title.toLowerCase().includes(searchWord.toLowerCase()) || item.descriptionShort.toLowerCase().includes(searchWord.toLowerCase());
                        });

                        setPostsFiltered(filteredPosts);
                } else {
                        setPostsFiltered(posts);
                }
        }, [searchWord, posts]);








        return (<div className={styles.ContentWrapper}>
                <h1>Check Our Latest Posts <br /> {postsFiltered.length} / {posts.length}</h1>



                <div className={styles.postsWrapper}>



                {/* if there are filtered posts */}
                        {postsFiltered && postsFiltered.map((item:DataPost) => {
                        // Card goes below:
                return <Card post={item} key={item.id} searchWord={searchWord} />;
                        })}



                        </div>












        </div>);
}



export default Posts;