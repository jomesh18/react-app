import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {});
    
  return (
    <div>
      <select
        onChange={(e) => console.log(e.target.value)}
        className="form-select"
      >
        <option value=""></option>
        <option value="Fashion">Fashion</option>
        <option value="Household">Household</option>
      </select>
    </div>
  );
};

export default ProductList;
