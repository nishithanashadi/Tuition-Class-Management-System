import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const ResultTable = ({rows}) => {
    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Student ID</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Subject Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell component='th' scope="row">{row.subject}</TableCell>
                            <TableCell component='th' scope="row">{row.grade}</TableCell>
                            <TableCell component='th' scope="row">{row.status}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={() => {}}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={() => {}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) :(
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                            <TableCell component='th' scope="row"> No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
        </TableContainer>
    );
    
}

export default ResultTable;