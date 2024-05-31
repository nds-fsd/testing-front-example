import './App.css'
import FilteredList from './components/filteredList/filteredList'
import GreetingForm from './components/greetingForm/greetingForm'
import HelloWorld from './components/helloWorld/HelloWorld'
import TodoList from './components/todoList/todoList'
import ToggleDetails from './components/toggleDetails/toggleDetails'
import UserList from './components/userList/userList'

function App() {

  return (
    <>
      <h1>Hello world</h1>
      <HelloWorld />
      <h1>Todo list</h1>
      <TodoList />
      <h1>Filtered list</h1>
      <FilteredList items={['Apple', 'Banana', 'Cherry', 'Date']} />
      <h1>Greeting form</h1>
      <GreetingForm />
      <h1>Toggle</h1>
      <ToggleDetails />
    </>
  )
}

export default App
