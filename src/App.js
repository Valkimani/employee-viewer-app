import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/Searchbar";
import Table from "./components/Table/Table";





const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
          <SearchBar />
         <Table />
        </div>
      </div>
    </div>
  );
};

export default App;