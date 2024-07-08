// // using ref hook

// import { useRef } from "react";
// import { FormEvent } from "react";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current) person.name = nameRef.current.value;
//     if (ageRef.current) person.age = parseInt(ageRef.current.value);
//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input type="text" ref={nameRef} id="name" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input type="number" ref={ageRef} id="age" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

// // using state hook
// import { FormEvent, useState } from "react";

// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: "",
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           onChange={(e) => setPerson({ ...person, name: e.target.value })}
//           type="text"
//           id="name"
//           value={person.name}
//           className="form-control"
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           onChange={(e) => setPerson({ ...person, age: e.target.value })}
//           type="number"
//           id="age"
//           value={person.age}
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

// using react-hook-form library
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          type="number"
          id="age"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
