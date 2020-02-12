/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'material-ui-image'
import * as React from 'react'

/**
 * HomePage Component
 */
const HomePage: React.FC = () => {
    const title = 'ホーム'
    const description =
        '東京にある隠れ家的なレストランや居酒屋を紹介します。知る人ぞ知るお店やネットでも見つかりにくいお店を中心に掲載していく予定です。'

    return (
        <PageTemplate subTitle={title} description={description}>
            <Image src="https://kojinten.s3-ap-northeast-1.amazonaws.com/images/cover.jpg" />
            <p>
                Welcome to the Tokyo Hideaway.
                <br />
                <br />
                This site contains a list of restaurants or izakaya, which are considered as hide aways.
                <br />
                These are selected by myself after eating and drinking a lot.
                <br />
                <br />
                Hope you&apos;ll love this site.
            </p>
        </PageTemplate>
    )
}

export default HomePage
