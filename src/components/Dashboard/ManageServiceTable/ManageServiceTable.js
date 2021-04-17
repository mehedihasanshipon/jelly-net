import React from "react";

const ManageServiceTable = ({ services }) => {
//   console.log(services);
  const handleDeleteClick = (id) => {
    fetch(`http://localhost:3002/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log("Deleted");
        }
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>
              <img
                style={{ height: "50px" }}
                className="img-fluid"
                src={`data:image/png;base64,${service.image.img}`}
                alt=""
              />
            </td>
            <td>
              <button onClick={()=> handleDeleteClick(service._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageServiceTable;
