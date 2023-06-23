import { DataPost } from "src/dataPostInterface";
import Image from "next/image";
import Link from "next/link";

import styles from '../styles/card.module.sass';




const Card = ({post}:any):JSX.Element => {



        function handleMouseOver (event:React.SyntheticEvent) {

                let id = (event.target as HTMLElement).id;
                console.log('id', id);









        }



        function handleMouseOut (event:React.SyntheticEvent) {

                let target = (event.target as HTMLElement);


        }



        function handleClick (event:React.SyntheticEvent) {}









        return (<div className={styles.cardWrapper}
                id={post.id}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                                >


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