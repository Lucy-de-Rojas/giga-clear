import { DataPost } from "src/dataPostInterface";
import Image from "next/image";
import Link from "next/link";

import styles from '../styles/card.module.sass';



const Card = ({ post, searchWord }: { post: DataPost, searchWord:string } ): JSX.Element => {


        let link = "/post/" + post.id;









        return (<div className={styles.cardWrapper}
                id={post.id.toString()}

                                >


                <Link href={link}>

                {/* image wrapper: */}
                <div className={styles.imageWrapper}>

                <Image
                src={post.image}
                width={1000}
                height={703}
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
                <p dangerouslySetInnerHTML={{ __html: post.descriptionShort.replace(new RegExp(searchWord, 'gi'), (match) => `<mark>${match}</mark>`) }}></p>




                {/* date for small screen: */}
                <p className={styles.dateSmallScreen}>{post.date}</p>







                </Link>


        </div>);
}



export default Card;