import Contact from "./Contact";
import Skills from "./Skills";
import TextInput from "./TextInput";

function App() {
  return (
    <div>
      <TextInput label="Name"></TextInput>
      <TextInput label="Designation"></TextInput>
      <Contact></Contact>
      <Skills></Skills>
    </div>
  );
}

export default App;
