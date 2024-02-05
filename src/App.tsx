import CodeDisplay from "./components/CodeDisplay";
import ManyMessagesDisplay from "./components/ManyMessagesDisplay";


const App = () => {

  const getQuery = async () => {

    try {
      const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: "create a table"})
      }
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.json();
      console.log(data);
    } 

    catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="app">
      <ManyMessagesDisplay />
      <input/>
      <CodeDisplay />
      <div className="button-Container">
        <button id="get-Query" onClick={getQuery}>Get Query!</button>
        <button id="clear-Chat">Clear Chat!</button>
      </div>
    </div>
  );
}

export default App;
