/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import HeaderTemplate from 'components/templates/HeaderTemplate'
import { Helmet } from 'react-helmet'
import FooterTemplate from 'components/templates/FooterTemplate'

/**
 * Props interface for PageTemplate
 */
interface Props {
    children: React.ReactNode
    subTitle: string,
    description: string
}

/**
 * PageTemplate Component
 */
const PageTemplate: React.FC<Props> = props => {
    const { children, description, subTitle } = props
    const title = `${subTitle} - Tokyo隠れ家`

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
            </Helmet>
            <HeaderTemplate>
                <h1>{subTitle}</h1>
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
