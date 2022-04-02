import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

interface PaginationProps {
  total: number
  currentPage: number
  changePage: (newPage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  changePage
}) => (
  <div className={styles.pagination}>
    {[...Array(total)].map((page, index) => (
      <div
        className={classNames(
          styles.item,
          currentPage === index + 1 && styles.active
        )}
        onClick={() => changePage(index + 1)}
      >
        {index + 1}
      </div>
    ))}
  </div>
)

export default Pagination
