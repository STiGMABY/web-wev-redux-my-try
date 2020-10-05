import React, { Component } from 'react';
import {connect} from 'react-redux'

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

class ToDo extends Component {

  state = {
    activeFilter: 'all',
    taskText: ''
  }

  handleInputChange = ( {target: {value}} ) => {
    this.setState({
      taskText: value
    })
  }

  render() {
    const { activeFilter, taskText} = this.state;
    const {tasks} = this.props
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput value={taskText} onChange={this.handleInputChange}/>
        {isTasksExist && <ToDoList tasksList={tasks} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
    tasks: state.tasks
}))(ToDo)
