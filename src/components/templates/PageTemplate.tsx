/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import HeaderTemplate from 'components/templates/HeaderTemplate'
import FooterTemplate from 'components/templates/FooterTemplate'

/**
 * Props interface for PageTemplate
 */
interface Props {
    children: React.ReactNode
}

/**
 * PageTemplate Component
 */
const PageTemplate: React.FC<Props> = props => {
    const { children } = props

    return (
        <div>
            <HeaderTemplate>
                <h1>Tokyo Hideaway</h1>
            </HeaderTemplate>
            <div className="contents">{children}</div>
            <FooterTemplate>
                &copy;{`${new Date().getFullYear()} Tokyo Hideaway`}
                <br />
                <br />
                <div className="footer-links">
                    <a href="https://github.com/yumaeda">
                        GitHub
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/in/yukitaka-maeda-531b2924">
                        LinkedIn
                    </a>
                </div>
            </FooterTemplate>
        </div>
    )
}

export default React.memo(PageTemplate)
