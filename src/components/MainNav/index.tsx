import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles.module.scss'

const MainNav: React.FC = () => {
  const router = useRouter()

  const links = [
    {
      title: 'Über mich',
      route: '/ueber-mich'
    },
    // {
    //   title: 'Sideprojects',
    //   route: '/collection/sideprojects'
    // },
    {
      title: 'Vanlife',
      route: '/collection/vanlife'
    },
    {
      title: 'Lost Places',
      route: '/collection/lostplaces'
    }
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(link => (
          <li
            className={classNames(
              styles.item,
              router.pathname === link.route && styles['is-active']
            )}
          >
            <Link href={link.route}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
