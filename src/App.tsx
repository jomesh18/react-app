import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["London", "New York", "San Francissco", "Tokyo", "Paris"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
