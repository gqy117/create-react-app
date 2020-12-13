import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export interface IRow {
  currency: string;
  rate: string;
}

export interface ITableProps {
  rows: IRow[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 30,
  },
});

const CurrencyTable: React.FunctionComponent<ITableProps> = ({ rows }) => {
  const classes = useStyles();
  console.log(`rows:`, rows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.currency}>
              <TableCell component="th" scope="row">
                {row.currency}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.rate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyTable;
