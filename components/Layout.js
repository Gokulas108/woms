import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({children, user}) => {
    return (
        <>
        <div className={styles.topBar}> {user.username}</div>
        <div className={styles.sideBar}>
            <a className={styles.active}>Migration</a>
            <a className='none'>Settings</a>
        </div>
        <div className={styles.main}>
            {children}
        </div>
        </>
    )
}

export default Layout
