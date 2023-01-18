import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import TasksPage from './pages/TasksPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SignInPage /> } />
      <Route path="/tasks" element={ <TasksPage /> } /> 
    </Routes>) 
} 

export default App
