import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ContactList } from "./pages/ContactList";
import { MessageList } from "./pages/MessageList";
import { ContactInfo } from "./pages/ContactInfo";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contactlist" element={<ContactList></ContactList>}></Route>
        <Route path="/messagelist" element={<MessageList></MessageList>}></Route>

        <Route path="/details/:id" element={<ContactInfo></ContactInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
