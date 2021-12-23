import MainContainer from "./components/Container/Container";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import TextInput from "./components/TextInput/TextInput";
import Input from "./components/wordInput/wordInput";
import WPM from "./components/WordPerMinute/WPM";


function App() {
  return (
    <div className="App">
      <MainContainer />
        <Input />
        <TextInput />
        <WPM />
        <SubmitButton />
    </div>
  );
}

export default App;
