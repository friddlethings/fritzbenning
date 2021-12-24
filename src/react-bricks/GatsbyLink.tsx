import { Link } from 'gatsby'
import React from 'react'
import { types } from 'react-bricks/frontend'

const GatsbyLink: types.RenderLocalLink = ({
  href,
  children,
  className,
  activeClassName,
}) => (
  <Link to={href} className={className} activeClassName={activeClassName}>
    {children}
  </Link>
)

export default GatsbyLink
