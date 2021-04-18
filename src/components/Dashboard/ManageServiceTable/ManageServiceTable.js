import React from "react";

const ManageServiceTable = ({ services }) => {
//   console.log(services);
  const handleDeleteClick = (id) => {
    fetch(`https://arcane-earth-23452.herokuapp.com/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log("Deleted");
          alert("Data deleted successfully")
        }
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
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
              <button className="btn btn-danger" onClick={()=> handleDeleteClick(service._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageServiceTable;
