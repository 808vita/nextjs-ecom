import React from "react";

const EditCard = ({ data, setSelectedProduct }) => {
  const handleClick = () => {
    if (!data) {
      return;
    }

    try {
      console.log(data);
      setSelectedProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-sm-4 mb-3 d-flex align-self-stretch justify-content-center">
      <div className="d-flex flex-wrap flex-column  align-items-center justify-content-center">
        <div className="card h-100" style={{ width: "14rem" }}>
          <img
            src={`/${data.type}.jpg`}
            style={{ height: "10rem", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-secondary">
              {data.title.substring(0, 10)} ${data.price}
            </h5>

            <p className="card-text text-secondary">
              {data.description.substring(0, 25)}
            </p>

            <button className="btn btn-success" onClick={() => handleClick()}>
              Edit Details{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
