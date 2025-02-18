import { Signal, signal } from "@preact/signals-react";
import { SignalInput } from "./components/SignalInput";

function Greeting({ name }: { name: Signal<string> }) {
  console.log("Greeting render", Date.now());
  return <p>Hello, {name.value ? <strong>{name}!</strong> : <em>name not set...</em>}</p>;
}

const inputValue = signal("");
const name = signal("");

function App() {
  console.log("App render", Date.now());
  return (
    <div>
      <h1>With Signals</h1>
      <label>
        Enter your name:
        <SignalInput
          value={inputValue}
        />
        <button
          onClick={() => {
            name.value = inputValue.value;
          }}
        >
          Set Name
        </button>
      </label>
      <Greeting name={name} />
    </div>
  );
}

export default App;
