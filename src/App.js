import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import SignupForm from './components/Registration/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/signUp" exact element={<SignupForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
