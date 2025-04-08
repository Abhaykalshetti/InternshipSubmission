import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.tsx';
import Success from './Components/Success.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {localStorage.getItem("isAuthenticated")==="true" ?
        (
          <Route path="/success" element={<Success/>} />
        ):(
          <Route path="/" element={<Login/>} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
