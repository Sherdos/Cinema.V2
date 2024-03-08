import Hello from "./components/Hello";
import MyNavbar from "./components/MyNavbar";
function App() {
  return (
    <>
      <div className="App">
        <MyNavbar />
        <Hello name="Sherdos" message="Hi" />
      </div>
    </>
  );
}

export default App;
