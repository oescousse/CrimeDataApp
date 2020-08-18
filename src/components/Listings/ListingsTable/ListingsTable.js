import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    verticalAlign: 'middle'
  },
  root: {
    width: '208%',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});

function createData(address, neighborhood, rating, link) {
  return { address, neighborhood, rating, link };
}

const rows = [
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
  createData('417 E 57th St, New York', 'Sutton Place', "####", <a href="https://www.realtor.com/realestateandhomes-detail/417-E-57th-St_New-York_NY_10022_M93827-80821">realtor.com</a>),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} elevation={3} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Neighborhood</TableCell>
            <TableCell align="right">Crime Rating</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{row.neighborhood}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
