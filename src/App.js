import Todo from "./components/todo/Todo";
function App() {
  return (
    <div className="App">
      {/* <Product
        products={[
          { id: 1,name: "Laptop",price:500 },
          {id: 2, name: "Phone" ,price:50},
          { id: 3,name: "Modem" ,price:200},
          { id: 4,name: "Computer",price:500 },
        ]}
        fruits = {['Banana','Orange','Apple']}
      /> */}
      <Todo/>
    </div>
  );
}

export default App;
