import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
  table:{
    minWidth:650
  }
})



export default function ShowStudent() {
  const classes = useStyles();

  const [studentsList, setStudentList] = useState([])

  const deleteStudent = (id) =>{
    axios.delete(`http://localhost:5000/students/${id}`).then( ()=>{
      window.location.reload(false)
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:5000/students').then((allStudents)=>{
      setStudentList(allStudents.data)
    })

  }, [])

  return (
    <>
    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration No.</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" size="small" onClick={()=> deleteStudent(student._id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
