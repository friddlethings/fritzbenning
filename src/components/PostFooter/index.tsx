import React from 'react'
import styles from './styles.module.scss'

interface PostFooterProps {
  label: JSX.Element
}

const PostFooter: React.FC<PostFooterProps> = ({ label, children }) => {
  return (
    <div className={styles['post-footer']}>
      <div className={styles.inner}>
        <div className={styles.label}>{label}</div>
        {children}
        <div className={styles.action}>
          <a href="mailto:mail@fritzbenning.de">Mail schreiben &rarr;</a>
        </div>
      </div>
    </div>
  )
}

export default PostFooter
