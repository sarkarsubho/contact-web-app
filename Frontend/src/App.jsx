import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { ContactList } from './pages/ContactList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<ContactList></ContactList>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
