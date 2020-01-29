/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Props interface for FooterTemplate
 */
interface Props {
    children?: React.ReactNode
}

/**
 * FooterTemplate Component
 */
const FooterTemplate: React.FC<Props> = props => (
    <footer>{props.children}</footer>
)

export default React.memo(FooterTemplate)
