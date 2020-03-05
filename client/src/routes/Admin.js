import React from "react";
import AddForms from "../components/AddForms";

const Admin = () => {
  return (
    <>
      <section className="pt-5 pb-5">
        <div>
          {" "}
          <h3 className="mt-5 text-primary text-center">Administration</h3>
        </div>
        <AddForms />
      </section>
    </>
  );
};

export default Admin;
