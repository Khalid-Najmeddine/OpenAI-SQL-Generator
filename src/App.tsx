import CodeDisplay from "./components/CodeDisplay";
import ManyMessagesDisplay from "./components/ManyMessagesDisplay";


const App = () => {
  return (
    <div className="app">
      <ManyMessagesDisplay />
      <input/>
      <CodeDisplay />
      <div className="button-Container">
        <button id="get-Query">Get Query!</button>
        <button id="clear-Chat">Clear Chat!</button>
      </div>
    </div>
  );
}

export default App;
