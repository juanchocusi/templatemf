import React from "react";

function MiAcordeon({ children }) {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item border-0">
        <div className="accordion-header" id="headingOne">
          <button
            className="accordion-button bg-gray-900 text-white px-3 py-10px pointer-cursor" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" >
            <i className="fa fa-circle fa-fw text-blue me-2 fs-8px"></i>{" "}
            Recepcion Giros / Transferencias
          </button>
        </div>
        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordion">
          <div className="accordion-body bg-gray-800 text-white">
              { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiAcordeon;
