import "./App.css";
import Card from "./components/Card";
function App() {
  const obj = {
    name: "lavish",
    age: 21,
  };
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {/* <h1 className="text-3xl text-blue-800 font-extrabold">hello ji</h1> */}
      <Card Name="Lavish" newObj={obj} />
      <Card newObj={obj} />
    </>
  );
}
export default App;
