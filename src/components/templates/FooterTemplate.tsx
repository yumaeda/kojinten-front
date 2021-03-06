/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Divider from '@material-ui/core/Divider'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

/**
 * FooterTemplate Component
 */
const FooterTemplate: React.FC<{}> = () => {
    const [value, setValue] = React.useState('')

    return (
        <footer>
            <Divider />
            <BottomNavigation
                value={value}
                onChange={(event, newValue: string): void => {
                    switch (newValue) {
                        case 'github':
                            window.location.href = 'https://github.com/yumaeda'
                            break
                        case 'linkedin':
                            window.location.href = 'https://www.linkedin.com/in/yukitaka-maeda-531b2924'
                            break
                        default:
                            break
                    }
                    event.stopPropagation()
                    setValue(newValue)
                }}
                showLabels
            >
                <BottomNavigationAction label="GitHub" value="github" icon={<GitHubIcon />}>
                    GitHub
                </BottomNavigationAction>
                <BottomNavigationAction label="LinkedIn" value="linkedin" icon={<LinkedInIcon />}>
                    LinkedIn
                </BottomNavigationAction>
            </BottomNavigation>
        </footer>
    )
}

export default React.memo(FooterTemplate)
