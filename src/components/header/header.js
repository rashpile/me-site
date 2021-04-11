import * as React from "react"
import PropTypes from "prop-types"

import * as headerStyles from './header.module.scss'
import Link from './link'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerBlock}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div className={headerStyles.menuBlock}>
      <Menu></Menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
