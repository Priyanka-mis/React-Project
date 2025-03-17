import React, { useEffect, useState } from "react";

function DisplayPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("formData");
    console.log(storedData)
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Submitted Data</h2>
      {formData ? (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Age:</strong> {formData.age}</p>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default DisplayPage;
