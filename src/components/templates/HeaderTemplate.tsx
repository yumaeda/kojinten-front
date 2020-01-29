/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Props interface for HeaderTemplate
 */
interface Props {
    children?: React.ReactNode
}

/**
 * HeaderTemplate Component
 */
const HeaderTemplate: React.FC<Props> = props => (
    <header>{props.children}</header>
)

export default React.memo(HeaderTemplate)
