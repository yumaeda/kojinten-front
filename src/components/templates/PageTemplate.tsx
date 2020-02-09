/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import HeaderTemplate from 'components/templates/HeaderTemplate'
import { Helmet } from 'react-helmet'
import FooterTemplate from 'components/templates/FooterTemplate'
import Container from '@material-ui/core/Container'

/**
 * Props interface for PageTemplate
 */
interface Props {
    children: React.ReactNode
    subTitle: string
    description: string
}

/**
 * PageTemplate Component
 */
const PageTemplate: React.FC<Props> = props => {
    const { children, description, subTitle } = props
    const title = `${subTitle} - Tokyo隠れ家`

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Helmet>
            <HeaderTemplate pageTitle={subTitle}></HeaderTemplate>
            <Container maxWidth="sm">
                <div className="contents">{children}</div>
                <FooterTemplate></FooterTemplate>
            </Container>
        </>
    )
}

export default React.memo(PageTemplate)
