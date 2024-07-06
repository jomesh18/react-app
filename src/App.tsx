import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsCalendar } from "react-icons/bs";
import Like from "./components/Like/Like";

function App() {
  let items = ["London", "New York", "San Francissco", "Tokyo", "Paris"];
  const handleSelectItem = (item: string) => console.log(item);

  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setVisibility(true)}>
        Click me
      </Button>
      <br />
      <BsCalendar color="red" size="40"></BsCalendar>
      <br />
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;
