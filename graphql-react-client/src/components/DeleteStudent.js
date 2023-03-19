import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

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

const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: String!) {
    deleteStudent(id: $id) {
      _id
    }
  }
`;

const DeleteStudent = () => {
  const { loading, error, data, refetch } = useQuery(GET_STUDENTS);
  const [deleteStudent] = useMutation(DELETE_STUDENT);
  
  const handleDelete = (id) => {
    deleteStudent({ variables: { id: id } });
    refetch();
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th>_id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>program</th>
            <th>Action</th>
          </tr>
          {data.students.map((student, index) => (
            <tr key={index}>
              <td>{student._id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.program}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(student._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="center">
        <Button variant="primary" onClick={() => refetch()}>
          Refetch
        </Button>
      </div>
    </div>
  );
};

export default DeleteStudent;
