import { Layout } from "src/components/layout"
import {ImHome3} from 'react-icons/im';
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/sign-up.module.sass';


const SignUp = () =>{



        return (<Layout>




        {/* HOME button: */}
        <Link href="/" className={styles.homeButton}>
                        <ImHome3 />
                        </Link>


                <div className={styles.imageWrapper}>
                        <Image

                                src="/Media/event.jpg"
                                width={1000}
                                height={703}
                                alt="Event Image"
                                layout="responsive"


                /></div>

                </Layout>)}


export default SignUp;