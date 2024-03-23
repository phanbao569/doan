import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Test from './component/Test'
function App() {
  return (
    <div className="App">
        <Login></Login>
        <Routes>
        <Route path='/test' element={<Test/>} />
        </Routes>
        
    </div>
  );
}

export default App;
