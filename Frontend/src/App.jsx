import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ContactList } from "./pages/ContactList";
import { MessageList } from "./pages/MessageList";
import { ContactInfo } from "./pages/ContactInfo";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<h1> Welcome to Contact App</h1>}></Route>
        <Route path="/contactlist" element={<ContactList></ContactList>}></Route>
        <Route path="/messagelist" element={<MessageList></MessageList>}></Route>

        <Route path="/details/:id" element={<ContactInfo></ContactInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
