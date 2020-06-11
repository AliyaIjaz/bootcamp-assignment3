import React from 'react';

function Student(props) {
    return (
        
        <p>{props.name} has been enrolled in Course {props.course}</p>
    );
}

export default Student;
