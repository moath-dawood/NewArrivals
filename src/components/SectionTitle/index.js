import React from 'react'
import RedBlock from '../RedBlock'
import styles from './index.module.css'
import { Typography } from '@mui/material';
function SectionTitle({secTitle}) {
  return (
    <div className={styles.SectionTitle}>
        <RedBlock/>
        <Typography children={secTitle} />
    </div>
  )
}

export default SectionTitle