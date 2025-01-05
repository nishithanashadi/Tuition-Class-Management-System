import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const ResultForm = props => {

    const [id, setid] = useState(0);
    const [name, setName] = useState('');
    const[subject, setSubject] = useState('');
    const[grade, setGrade] = useState('');
    const[status, setStatus] = useState('');

    return (
        <Grid
            container
            spacing={3}
            sx={{
                backgroundColor: '#FFFFFF',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000'}}>Result Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                    component={'lable'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Student ID
                </Typography>
                <Input
                    type ="number"
                    id='id'
                    name="id"
                    sx={{ width:'400px'}}
                    value={id}
                    onChange={e => setid(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                    component={'lable'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Student Name
                </Typography>
                <Input
                    type ="text"
                    id='name'
                    name="name"
                    sx={{ width:'400px'}}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                    component={'lable'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Subject Name
                </Typography>
                <Input
                    type ="text"
                    id='subject'
                    name="subject"
                    sx={{ width:'400px'}}
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                    component={'lable'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Grade
                </Typography>
                <Input
                    type ="text"
                    id='grade'
                    name="grade"
                    sx={{ width:'400px'}}
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex'}}>
                <Typography 
                    component={'lable'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginBottom: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Status
                </Typography>
                <Input
                    type ="text"
                    id='status'
                    name="status"
                    sx={{ width:'400px'}}
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                />
            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',  
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                
            >
                   Add
            </Button>
        </Grid>
    );
}

export default ResultForm;