import * as constants from '../services/constants';
import { getRealtimeDBData, getFirestoreTodos, deleteFirestoreTodo, addFirestoreTodo, editFirestoreTodo } from '../services/firebase';

function getTodos() {
    return getFirestoreTodos()
    //return getRealtimeDBData()
}

function deleteTodo(id) {
    return deleteFirestoreTodo(id)
    //return getRealtimeDBData()
}

function addTodo(id) {
    return addFirestoreTodo(id)
    //return getRealtimeDBData()
}

function updateTodo(id, todo) {
    return editFirestoreTodo(id, todo)
    //return getRealtimeDBData()
}


export { getTodos, addTodo, deleteTodo, updateTodo }