/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { Link } from 'react-router-dom'
import PageTemplate from 'components/templates/PageTemplate'
import { CDN_BASE } from 'constants/Config'
import Image from 'material-ui-image'
import * as React from 'react'

/**
 * HomePage Component
 */
const AreaPage: React.FC<{}> = () => {
    const title = '池袋'
    const description =
        '池袋と言えば、昔はIWSPやチーマーなどが有名でしたが、最近はアニメの聖地として変わりつつあります。'

    return (
        <PageTemplate subTitle={title} description={description}>
            <Image src={`${CDN_BASE}/images/ikebukuro/cover.jpg`} />
            <p>{description}</p>
            <Link to="/shops">Shops</Link>
        </PageTemplate>
    )
}

export default AreaPage
