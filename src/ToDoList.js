import React, { Component } from 'react';
import { directive } from '@babel/types';
import ToDoItems from './ToDoItems';
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== '') {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = '';

        console.log(this.state.items)

        e.preventDefault();
    }

    render() {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder='enter task'></input>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}/>
            </div>
        )
    }
}

export default ToDoList;