import cx from 'classnames'
import React from 'react'
import './styles.scss'

interface PaginationProps {
  total: number
  currentPage: number
  changePage: (newPage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  changePage,
}) => (
  <div className="pagination">
    {[...Array(total)].map((page, index) => (
      <div
        className={cx({
          pagination__item: true,
          'is-active': currentPage === index + 1,
        })}
        onClick={() => changePage(index + 1)}
      >
        {index + 1}
      </div>
    ))}
  </div>
)

export default Pagination
