/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PageTemplate from 'components/templates/PageTemplate'
import * as React from 'react'

/**
 * HomePage Component
 */
const HomePage: React.FC = () => {
    return (
        <PageTemplate>
            <p>
                Welcome to the Tokyo Hideaway.
                <br />
                <br />
                This site contains a list of restaurants or izakaya, which are considered as hide aways.
                <br />
                These are selected by myself after eating and drinking a lot.
                <br />
                <br />
                Hope you'll love this site.
            </p>
        </PageTemplate>
    )
}

export default HomePage
