import React from 'react'
import {Link} from 'gatsby'
import * as headerStyles from './header.module.scss'

export default ( props )   =>
    <Link className={headerStyles.link} to={props.to}>
        {props.children}
    </Link>
