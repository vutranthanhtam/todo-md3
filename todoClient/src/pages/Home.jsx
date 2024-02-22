import React from 'react';
import Todo from './components/Todo';

export default function Home() {
    return (
        <div className='container'>
            <div className='headerContainer'>
                <h2>Todo List</h2>
                <p>Get things done, one item at a time</p>
            </div>
            <div className='bodyContainer'>
                <Todo></Todo>
            </div>
        </div>

    );
}