import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ToDoList from './ToDoList';

var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);

