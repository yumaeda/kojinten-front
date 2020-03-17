/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

/**
 * NavigationTemplate Component
 */
const NavigationTemplate: React.FC<{}> = () => {
    return (
        <aside>
            <MenuList>
                <Link to="/">
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/ikebukuro">
                    <MenuItem>Ikebukuro</MenuItem>
                </Link>
            </MenuList>
        </aside>
    )
}

export default NavigationTemplate
