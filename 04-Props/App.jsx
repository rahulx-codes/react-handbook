import Card from "./Card";

function App() {
  return (
    <>
      <h1>Props Example</h1>

      <Card name="Rahul" age={22} skill="React" />

      <Card name="Charli" age={25} skill="Java" />

      <Card name="tony" age={20} skill="DSA" />
    </>
  );
}

export default App;
