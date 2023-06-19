import React from 'react';
import styles from './Site.module.css'
import {HomePage} from "./HomePage";
import {Content} from "./Content";
import {Error404} from "./pages/Error404";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Links
                </div>
                <div className={styles.content}>

                            Content

                    {/*<PageOne/>*/}
                    {/*<PageTwo/>*/}
                    {/*<PageThree/>*/}
                    {/*<Error404/>*/}

                    {/*<-------------->*/}

                    {/*<HomePage/>*/}
                    {/*<Content/>*/}
                    {/*<Error404/>*/}

                </div>
            </div>
        </div>
    );
};