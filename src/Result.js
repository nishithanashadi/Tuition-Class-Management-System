import { Box } from "@mui/material";
import ResultForm from "./ResultForm";
import ResultTable from "./ResultTable";

const result = [
    {
        id:1,
        name: 'John Doe',
        subject: 'Math',
        grade: 'c',
        status:'pass', 
    },

    {
        id:2,
        name: 'noank',
        subject: 'science',
        grade: 'f',
        status:'fail', 
    },
];

const Result = () => {
    return (
        <Box
        sx={{
            width: 'calc(100%-100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
        >
            <ResultForm/>
            <ResultTable rows={result} />
        </Box>
    
    );
}

export default Result;