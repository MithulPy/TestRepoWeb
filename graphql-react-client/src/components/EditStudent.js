
import React, { Component }  from 'react';
//Complete the imports required for the EditStudent component   

import { gql, useMutation, useQuery } from '@apollo/client';                
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./entryform.css"


const GET_STUDENTS = gql`
{
    students {
        _id
        firstName
        lastName
        program
    }
}
`;

const EDIT_STUDENT = gql`
mutation EditStudent(
    $id: String!,
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $college: String!,
    $program: String!,
    $startingYear: Int!        
    ) {
    editStudent(
        id: $id,
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        college: $college,
        program: $program,
        startingYear: $startingYear
        ) {
        _id
    }
}
`;




function EditStudent(props)
{
    let navigate = useNavigate()
    let id, firstName, lastName, email, college, program, startingYear ;    
    //const [editStudent, { data, loading, error }] = useMutation(EDIT_STUDENT);
    //const { loading, error, data, refetch } = useQuery(GET_STUDENTS);
    //const [editStudent] = useMutation(EDIT_STUDENT);
    const handleEdit = (id) => {
        editStudent({ variables: { id: id, firstName: firstName.value, lastName: lastName.value,
            email: email.value, college: college.value, program: program.value,
            startingYear: parseInt(startingYear.value) } });
        navigate('/students');
    }
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (data) {
        const student = data.students.find(student => student._id === props.id);





        


    return (
        <div>
            <h2> Edit Operation</h2>
            <p>Complete the React code.</p>
        </div>
    );

}

}
export default EditStudent;