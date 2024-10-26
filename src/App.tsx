// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import { useState } from "react";
// import { BsCalendar } from "react-icons/bs";
// import Like from "./components/Like/Like";
// import Bugs from "./components/Bugs";

// function App() {
//   let items = ["London", "New York", "San Francissco", "Tokyo", "Paris"];
//   const handleSelectItem = (item: string) => console.log(item);

//   const [visibility, setVisibility] = useState(false);
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//       {visibility && (
//         <Alert onClose={() => setVisibility(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setVisibility(true)}>
//         Click me
//       </Button>
//       <br />
//       <BsCalendar color="red" size="40"></BsCalendar>
//       <br />
//       <Like onClick={() => console.log("clicked")}></Like>
//       <br />
//       <Bugs></Bugs>
//     </div>
//   );
// }

// import { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// const App = () => {
//   const [cartItems, setCartItems] = useState([
//     'Product1', 'Product2'
//   ]);

//   return (
//     <>
//     <NavBar countCartItems={cartItems.length}/>
//     <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: 'John'
//     },
//   });

//   const handleClick = () => {
//     setGame({...game, player: {...game.player, name: 'Jini'}});
//   }

//   return (
//     <div>
//       {game.player.name}
//       <br/>
//       <button onClick={handleClick}>Change</button>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// const App = () => {
//   const [pizza, setPizza] = useState({
//     name: 'Spicy Pepperoni',
//     toppings: ['Mushroom']
//   });

//   const handleClick = () => {
//     setPizza({...pizza, toppings: [...pizza.toppings, 'Chicken']})
//   }

//   return (
//     <div>
//       {pizza.name}
//       <br/>
//       {pizza.toppings}
//       <br />
//       <button onClick={handleClick}>Add Toppings</button>
//     </div>
//   )
// }

// export default App

// import { useState } from 'react';

// const App = () => {
//   const [cart, setCart] = useState({
//     discount: .1,
//     items: [
//       {id: 1, title: 'Product 1', quantity: 1 },
//       {id: 2, title: 'Product 2', quantity: 1 },
//     ]
//   })

//   const handleClick = () => {
//     setCart({...cart, items: cart.items.map(item => item.id == 1? {...item, quantity: item.quantity+1}: item)})
//   }

//   return (
//     <div>
//       <ul>
//         {cart.items.map(item => <li key={item.id}>{item.title} {item.quantity}</li>)}
//       </ul>
//       <button onClick={handleClick}>Increase Quantity</button>
//     </div>
//   )
// }

// export default App

// import ExpandableText from "./components/ExpandableText";

// const App = () => {
//   return (
//     <div>
//       <ExpandableText>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
//         incidunt minima ab vitae, error architecto, deserunt omnis ad autem enim
//         id facilis cum ea perspiciatis expedita earum, numquam quisquam
//         veritatis nihil consequuntur provident inventore. Aspernatur officia eum
//         repellat aliquid consectetur architecto accusamus ratione suscipit atque
//         veniam, ipsum dolorum est quas asperiores eveniet distinctio?
//         Repudiandae recusandae quas hic. Porro optio voluptates dicta est
//         temporibus cupiditate, eos maxime rerum et, accusantium, nisi quaerat
//         quis atque ducimus magni doloribus! Fugit perferendis illo quaerat
//         neque? Dignissimos repudiandae harum blanditiis voluptatum error
//         assumenda, magnam maiores impedit quos eos corporis et id temporibus
//         voluptas deleniti consequuntur!
//       </ExpandableText>
//     </div>
//   );
// };

// export default App;

// import Form from "./components/Form";
// const App = () => {
//   return <Form />;
// };

// export default App;

// import { useRef, useEffect } from "react";

// const App = () => {
//   const ref = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (ref.current) ref.current.focus();
//   });

//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import ProductList from "./ProductList";

// const App = () => {
//   const [category, setCategory] = useState("");
//   return (
//     <>
//       <div>
//         <select
//           onChange={(e) => setCategory(e.target.value)}
//           className="form-select"
//         >
//           <option value=""></option>
//           <option value="Fashion">Fashion</option>
//           <option value="Household">Household</option>
//         </select>
//       </div>
//       <div>
//         <ProductList productCategory={category} />
//       </div>
//     </>
//   );
// };

// export default App;

import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (userToDelete: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    userService.delete(userToDelete.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "X" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((e) => {
        setUsers(originalUsers);
        setError(e.message);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((e) => {
      setError(e.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
