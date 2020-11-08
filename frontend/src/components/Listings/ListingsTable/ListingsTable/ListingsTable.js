import TableHead from '@material-ui/core/TableHead';
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from "../ListingsTablePagination/TablePaginationActions";
import "./ListingsTableStyle.css";


TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function ListingsTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  if (props.data) {

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
      <TableContainer className="root" component={Paper}>
        <Table className="table" aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Bed</TableCell>
              <TableCell>Bath</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Type</TableCell>
              <TableCell >URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.data
          ) .map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                {row.address.line}, {row.address.city}, {row.address.state_code}
                </TableCell>
                <TableCell >{row.beds}</TableCell>
                <TableCell >{row.baths}</TableCell>
                <TableCell >$ {row.price}</TableCell>
                <TableCell >{row.prop_type}</TableCell>
                <TableCell >
                  <a href={row.rdc_web_url} target="_blank" rel="noopener noreferrer">
                  Link
                  </a>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  }
  else
    return <></>

}

export default ListingsTable;