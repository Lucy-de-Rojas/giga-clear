import React from "react";
import {useState, useEffect} from 'react';
import { DataPost } from "src/dataPostInterface";



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
                <h1>Posts</h1>

                {posts && posts.map((item) => {
                        return <div>{item.title}</div>;
                })}





        </div>);
}



export default Posts;