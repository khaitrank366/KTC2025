import React from "react";
const products = null;

// const products = [
//   { id: 1, name: "Quần áo" },
//   { id: 2, name: "Giày dép" },
// ];

function ProductionList() {
  return (
    <ul>
      {/* Chỉ render nếu có dữ liệu */}
      {products?.map((item) => (
        <>
          <li>
            {item.id} {item.name}
          </li>
        </>
      ))}
    </ul>
  );
}

export default ProductionList;
