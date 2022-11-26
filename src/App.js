import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola Buenas Tardes"} />
    </div>
  );
}

export default App;
