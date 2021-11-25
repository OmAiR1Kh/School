import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
    root: {
        '& > *':{
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}))

export default function Create() {
    const classes = useStyles();

    const [student, setStudent] = useState({
      regNo :0,
      studentName:'',
      grade:'',
      section:''
    })

    const createStudent = ()=>{
      axios.post('/', student).then( (res)=>{
        window.location.reload(false)
      })
    }
  return (
    <>
    <h2>Add New Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Registration No." variant="outlined" value={student.regNo} onChange={(event)=>{
        setStudent({...student, regNo: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Student Name" variant="outlined" value={student.studentName} onChange={(event)=>{
        setStudent({...student, studentName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event)=>{
        setStudent({...student, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=>{
        setStudent({...student, section: event.target.value})
      }}/>

      <Button variant="contained" color="primary" onClick={createStudent}>
          Add Student
      </Button>
    </form>
    </>
  );
}
