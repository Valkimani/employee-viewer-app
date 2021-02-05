import Header from "./components/Header/Header"
import Table from "./components/Table/Table"



const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
          <Table />

        </div>
      </div>
    </div>
  );
};

export default App;