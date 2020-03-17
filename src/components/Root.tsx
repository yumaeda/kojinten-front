/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import AreaPage from 'components/pages/AreaPage'
import HomePage from 'components/pages/HomePage'
import ShopListPage from 'components/pages/ShopListPage'
import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Root: React.FC<{}> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/ikebukuro" component={AreaPage} />
                <Route path="/shops" component={ShopListPage} />
            </Switch>
        </Router>
    )
}

export default Root
