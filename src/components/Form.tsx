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

// // using react-hook-form library
// import { FieldValues, useForm } from "react-hook-form";

// interface FormData {
//   name: string;
//   age: number;
// }

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   console.log(errors);
//   const onSubmit = (data: FieldValues) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name", { required: true, minLength: 3, maxLength: 50 })}
//           type="text"
//           id="name"
//           className="form-control"
//         />
//         {errors.name?.type === "required" && (
//           <p className="text-danger">Name is required</p>
//         )}
//         {errors.name?.type === "minLength" && (
//           <p className="text-danger">Minimum length is 3</p>
//         )}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age", { min: 0, max: 150 })}
//           type="number"
//           id="age"
//           className="form-control"
//         />
//       </div>
//       {errors.age?.type === "max" && (
//         <p className="text-danger">Max age is 150</p>
//       )}
//       {errors.age?.type === "min" && (
//         <p className="text-danger">Min age is 0</p>
//       )}
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

// using react-hook-form library
// validation using zod
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(0, { message: "Age should be atleast 0" })
    .max(150, { message: "Age should not exceed 150" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="age"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
