import { Link } from 'gatsby'
import React from 'react'
import './styles.scss'

const MainNav: React.FC = () => (
  <nav className="main-nav">
    <ul className="main-nav__list">
      <li className="main-nav__list__item">
        <Link
          to="/ueber-mich/"
          className="main-nav__list__item__link"
          activeClassName="is-active"
        >
          Über mich
        </Link>
      </li>
      <li className="main-nav__list__item">
        <Link
          to="/sideprojects/"
          className="main-nav__list__item__link"
          activeClassName="is-active"
        >
          Sideprojects
        </Link>
      </li>
      <li className="main-nav__list__item">
        <Link
          to="/fotografie/"
          className="main-nav__list__item__link"
          activeClassName="is-active"
        >
          Fotografie
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainNav
