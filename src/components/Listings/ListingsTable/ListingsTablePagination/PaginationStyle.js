import { makeStyles } from '@material-ui/core/styles'

const paginationStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

export default paginationStyles;
