import React from "react";
import {useState, useEffect} from 'react';

import styles from '../styles/posts.module.sass';


import { DataPost } from "src/dataPostInterface";
import Card from "./card";
import NoPosts from "./noPosts";








const Posts = () => {

        const [posts, setPosts] = useState<DataPost[]>([]);




        useEffect(() => {
                async function getPosts() {
                        let response = await fetch("/api/posts");

                        let data:DataPost[] = await response.json();

                        setPosts(data);


                }

                getPosts();
        },[]);






        return (<div>
                <h1>Check Our Latest Posts</h1>

                <div className={styles.postsWrapper}>




                {/* if there are posts: */}
                {posts && posts.map((item:DataPost) => {
                        // Card goes below:
                        return <Card post={item} />
                })}

                </div>


                {/* if no posts: */}
                {posts.length ==  0 && <NoPosts />}










        </div>);
}



export default Posts;