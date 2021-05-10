function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{process.env.REACT_APP_RAW_API}</h2>
    </div>
  );
}

export default App;
