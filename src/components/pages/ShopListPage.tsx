/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import Image from 'material-ui-image'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import PageTemplate from 'components/templates/PageTemplate'
import { CDN_BASE } from 'constants/Config'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper
        },
        gridList: {
            width: 500,
            height: 450
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)'
        }
    })
)

const tileData = [
    {
        img: `ikebukuro/cover.jpg`,
        title: '神の羊',
        genre: 'ジンギスカン'
    },
    {
        img: `ikebukuro/cover.jpg`,
        title: 'ダルマ',
        genre: '魚料理'
    },
    {
        img: `ikebukuro/cover.jpg`,
        title: 'あまてらす',
        genre: '魚料理'
    },
    {
        img: `ikebukuro/cover.jpg`,
        title: '魚真',
        genre: '寿司'
    }
]

const ShopListPage: React.FC<{}> = () => {
    const title = '池袋の店舗リスト'
    const description = '池袋の店舗リストです。'
    const classes = useStyles()

    return (
        <PageTemplate subTitle={title} description={description}>
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">{title}</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <Image src={`${CDN_BASE}/images/${tile.img}`} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>ジャンル：{tile.genre}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </PageTemplate>
    )
}

export default ShopListPage
