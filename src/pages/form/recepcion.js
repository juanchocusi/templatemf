import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import MiAcordeon from '../../components/acordeon/miacordeon.jsx'


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Recepcion() {
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();

  useEffect(() => {
    fetch("/assets/data/ui-tabs-accordions/code-1.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode1(html);
      });
    fetch("/assets/data/ui-tabs-accordions/code-2.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode2(html);
      });
    fetch("/assets/data/ui-tabs-accordions/code-3.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode3(html);
      });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      fechaNacimiento: "",
      password: "",
      confirmarPassword: "",
      pais: "co",
      archivo: "",
      aceptaTerminos: false,
    },
  });
  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // reset({
    //   nombre: '',
    //   correo: '',
    //   fechaNacimiento: '',
    //   password: '',
    //   confirmarPassword: '',
    //   pais: 'ar',
    //   archivo: '',
    //   aceptaTerminos: false
    // })
    reset();
  });

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <>
      {/* 		<ol className="breadcrumb float-xl-end">
				<li className="breadcrumb-item"><Link to="/page-option/blank">Inicio</Link></li>
				<li className="breadcrumb-item"><Link to="/page-option/blank">Recibidos</Link></li>
				<li className="breadcrumb-item active">Blank Page</li>
			</ol>
			<h1 className="page-header">Recibidos <small>...</small></h1> */}
      {/* =========== Colapsable ========== */}

{/* =========== Tabla ========== */}
<Tooltip id="tt_1" place="bottom" effect="float" />
<Tooltip id="tt_2" place="top" effect="float" />

      <div className="container-fluid">
        <MiAcordeon>
          <form onSubmit={onSubmit}>
            <div className="form row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                <div className="input-group mb-2">
                  <span className="input-group-btn" >
                    <button data-tooltip-id="tt_1" data-tooltip-html="Beneficiario" type="submit" id="" className="btn btn-outline-secondary">
                      <i className="fa fa-magnifying-glass" ></i>
                    </button>
                  </span>
                  <input type="text" className="form-control" placeholder="DNI Beneficiario" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Beneficiario" readOnly />
                </div>

                <div className="input-group mb-2">
                  <span className="input-group-btn" >
                    <button data-tooltip-id="tt_2" data-tooltip-html="Buscar Remitente" type="submit" id="" className="btn btn-outline-secondary">
                      <i className="fa fa-magnifying-glass" ></i>
                    </button>
                  </span>
                  <input type="text" className="form-control" placeholder="DNI Remitente" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Remitente" readOnly />
                </div>

              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="input-group mb-2">
                  <span className="input-group-btn" >
                    <button data-tooltip-id="tt_1" data-tooltip-html="Beneficiario" type="submit" id="" className="btn btn-outline-secondary">
                      <i className="fa fa-magnifying-glass" ></i>
                    </button>
                  </span>
                  <input type="text" className="form-control" placeholder="Sucursal Destino" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>

                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Ciudad Destino" readOnly />
                </div>

                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Observaciones..." />
                </div>
                <div className="input-group mb-2">
                  <span className="input-group-btn" >
                    <button data-tooltip-id="tt_1" data-tooltip-html="Buscar Cuentas" type="submit" id="" className="btn btn-outline-secondary">
                      <i className="fa fa-home" ></i>
                    </button>
                  </span>
                  <input type="text" className="form-control" placeholder="Sucursal Destino" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>

              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                <div className="input-group mb-2">
                  <span className="input-group-text" >Importe</span>
                  <input type="text" className="form-control" placeholder="DNI Beneficiario" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>
                <div className="input-group mb-2">
                <span className="input-group-text" >Cargo</span>
                  <input type="text" className="form-control" placeholder="Beneficiario" readOnly />
                </div>

                <div className="input-group mb-2">
                <span className="input-group-text " >Otros</span>
                  <input type="text" className="form-control" placeholder="DNI Remitente" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>
                <div className="input-group mb-2">
                <span className="input-group-text text-bg-danger" >Total</span>
                  <input type="text" className="form-control" placeholder="Remitente" readOnly />
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="input-group mb-2">
                <span className="input-group-text " >% %</span>
                <select class="form-select" >
                  <option>1.5 %</option>
                  <option>2.0 %</option>
                  <option>2.5 %</option>
                  <option>3.0 %</option>
                  <option>1.5 %</option>
                  <option>2.0 %</option>
                  <option>2.5 %</option>
                  <option>3.0 %</option>
                </select>
                </div>

                <div className="input-group mb-2">
                <span className="input-group-text " >Efectivo</span>
                  <input type="text" className="form-control" placeholder="DNI Remitente" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>

                <div className="input-group mb-2">
                <span className="input-group-text " >Vuelto</span>
                  <input type="text" className="form-control" placeholder="DNI Remitente" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" />
                </div>
                
                <div className="input-group mb-2">
               {/*    <div className="d-flex flex-wrap"> */}
                    <button type="button" className="btn btn-primary me-1 mb-1" data-tooltip-id="tt_1" data-tooltip-html="<div><h5>Nuevo</h5></div>" > <span className="bi bi-folder-plus fa-lg"></span> </button>
                    <button type="button" className="btn btn-danger me-1 mb-1" data-tooltip-id="tt_1" data-tooltip-html="<div><h5>Cancelar</h5></div>"> <span className="fa fa-ban fa-lg"></span> </button>
                    <button type="button" className="btn btn-success me-1 mb-1" data-tooltip-id="tt_1" data-tooltip-html="<div><h5>Guardar</h5></div>"> <span className="fa fa-upload fa-lg"></span> </button>
                 {/*  </div> */}

                </div>

              </div>

            </div>
          </form>

          <div className="col-xl-12">

            

          </div>

        </MiAcordeon>
      </div >
</>
);
}

export default Recepcion;
