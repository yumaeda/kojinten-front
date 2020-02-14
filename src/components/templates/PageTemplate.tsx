/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Helmet } from 'react-helmet'
import FooterTemplate from 'components/templates/FooterTemplate'
import HeaderTemplate from 'components/templates/HeaderTemplate'
import NavigationTemplate from 'components/templates/NavigationTemplate'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}))

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
    const classes = useStyles()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Helmet>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <HeaderTemplate pageTitle={subTitle}></HeaderTemplate>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <NavigationTemplate />
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <div>{children}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <FooterTemplate></FooterTemplate>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default React.memo(PageTemplate)
