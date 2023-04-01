import { CircularProgress } from '@mui/material';
import React from 'react'
import styles from './styles.module.css'
function GlobalLoading(props) {
    return (
        <div className={styles.loader}>
            <h1>Loading...</h1>
            <CircularProgress />                
        </div>
    );
}

export default GlobalLoading;