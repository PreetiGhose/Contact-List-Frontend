import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import InputContact from "./components/InputContact/InputContact";
import NavBar from "./components/NavBar/NavBar";
function App() {
  // const newContact = () => {
  //   console.log("clicked");
  //   <InputContact />;
  // };

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="InputContact" element={<InputContact />} />
        <Route index element={<ContactList />} />
      </Route>
    </Routes>
  );
}

export default App;
