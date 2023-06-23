import { DataPost } from "src/dataPostInterface";
import Image from "next/image";

import styles from '../styles/card.module.sass';

const Card = ({post}:any):JSX.Element => {



        return (<div className={styles.cardWrapper}>


                {/* image wrapper: */}
                <div style={{width:'100%'}}>
                <Image
                src={post.image}
                width={1000}
                height={700}
                alt={post.alt}
                layout="responsive"

                /></div>


                {/* card title: */}
                <h2>{post.title}</h2>




                {/* 3 mini paras */}
                <div className={styles.paras}>
                        <p>{post.topic}</p>
                        <p>{post.user}</p>
                        <p className={styles.dateWideScreen}>{post.date}</p>
                </div>




                {/* short descr: */}
                <p>{post.descriptionShort}</p>




                {/* date for small screen: */}
                <p className={styles.dateSmallScreen}>{post.date}</p>








        </div>);
}



export default Card;