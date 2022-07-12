import './App.css';
import SignupForm from './components/signUp';
import SignIn from './components/signIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <SignupForm /> */}
    //   <SignIn />
    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
