import React from 'react'
import styles from './progressbar.module.scss'

const ProgressBar = ({ progress, total }) => {
    const w = (Number(progress) * 100) / Number(total)
    return (
        <div className={styles.Parentdiv}>
            <div className={styles.progress_icon}></div>
            <div className={styles.Childdiv} style={{ width: `${w}%` }}></div>
            <span
                className={styles.progress_text}
            >{`${progress}/${total}`}</span>
        </div>
    )
}

export default ProgressBar
