import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["London", "New York", "San Francissco", "Tokyo", "Paris"];
  const handleSelectItem = (item: string) => console.log(item);

  const [state, setState] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert hidden={state === true? false: true}>
        Hello <span>World</span>
      </Alert>
      <Alert>My Alert</Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
