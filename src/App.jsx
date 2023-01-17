import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <SignUpPage /> } />
      <Route path="/tasks" element={ <TasksPage /> } /> 
    </Routes>) 
} 

export default App
