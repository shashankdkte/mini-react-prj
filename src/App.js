
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import BirthdayRemainder from './components/birthday-remainder/src/BirthdayRemainder';
function App() {
  return (
    <Routes>
      <Route path='/' element={<BirthdayRemainder />}/>
    </Routes>
  );
}

export default App;
