import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DataPost } from "src/dataPostInterface";
import styles from '../../styles/post-id.module.sass';
import { spawn } from "child_process";
import { Layout } from "src/components/layout";

import {ImHome3} from 'react-icons/im';





const PostById = () =>{



        let router = useRouter();
        let id:number =parseInt(router.query.id);


        const [postData, setPostData] = useState<DataPost>();



        useEffect(() => {


                async function getData() {

                        console.clear()

                        let response = await fetch("/api/posts");
                        let data = await response.json();

                        let postData:DataPost;


                        console.log('for single page🟥', data);

                        data.map((item:DataPost) => {

                                if(item.id == id) {
                                        console.log('post🟥🟥',item)
                                        setPostData(item);
                                }


                        })








                }

                getData()
        });



        return (<Layout><div className={styles.postWrapper}>


                <Link href="/" className={styles.homeButton}>
                        <ImHome3 />
                        </Link>



                <h1>{postData?.title}</h1>
                <p>{postData?.descriptionShort}</p>

                {/* date grey: */}
                <p className={styles.date}>{postData?.date}</p>


                {/* image: */}
                <div className={styles.imageWrapper}>
                        {postData?.image &&
                <Image
                        src={postData?.image}
                        width={1000}
                        height={703}
                        alt={postData?.alt}
                        layout="responsive"
                        />}
                        </div>


                {/* under the image: */}
                <div className={styles.subTextWrapper}>
                        <div>
                                <p>{postData?.location}</p>


                                <div className={styles.miniParaWrapper}>
                                        <p>{postData?.price == 0? <span>FREE</span> : <span>{postData?.price}</span>}</p>
                                        <p>{postData?.time} | {postData?.date}</p>
                                </div>


                        </div>

                        <button className={styles.button}>Sign up to this event</button>
                </div>


                {/* long description: */}
                <div>
                        <h2>{postData?.title}</h2>
                        <p>{postData?.descriptionFull}</p>
                </div>








                {/* no data: */}
                {!postData && <p>no data</p>}
        </div></Layout>)
}


export default PostById



























