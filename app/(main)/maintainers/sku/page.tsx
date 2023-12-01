"use client";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoMdBarcode } from "react-icons/io";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const Users = () => {
  const [certification, setCertification] = useState("");

  return (
    <div>
      <p className="general-title">Mantenedor de SKU</p>
      <div className="w-full flex align-content-center mb-4">
        <p className="general-text">Ingresar SKU o N° de certificación</p>
        <span className="p-input-icon-left ml-8">
          <i className="pi pi-search" />
          <InputText
            style={{ width: "454px" }}
            className="border-round-3xl"
            placeholder="Buscar"
          />
        </span>
      </div>
      <div className="card flex">
        <div className="w-full flex flex-column">
          <div className="w-9 flex justify-content-between p-3">
            <p className="text-2xl font-bold">SKU : </p>
            <p className="text-2xl font-bold">Modelo : </p>
            <p className="font-bold">Marca : </p>
          </div>
          <p className="text-6xl font-light pl-3">NOMBRE SKU</p>
          <div className="w-9 flex justify-content-between p-3">
            <p className="font-bold">Estado de SKU : </p>
            <p className="font-bold">Usuario Actualización : </p>
          </div>
          <div className="w-9 flex justify-content-between p-3">
            <p className="font-bold">Fecha Creación : </p>
            <p className="font-bold">Fecha Actualización : </p>
          </div>
        </div>
        <div className="w-3 flex align-items-center">
          <div
            className="border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center"
            style={{ width: "200px", height: "200px" }}
          >
            imagen
          </div>
        </div>
      </div>
      <div className="w-full flex justify-content-between">
        <div className="card flex flex-column" style={{ width: "49%" }}>
          <div className="flex align-items-center">
            <IoMdBarcode className="text-2xl text-primary" />
            <p className="text-2xl font-bold ml-3">DETALLE SKU</p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">Departamento : </p>
            <p className="font-bold">Grupo : </p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">Familia : </p>
            <p className="font-bold">Conjunto : </p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">SubFamilia : </p>
          </div>
        </div>
        <div className="card flex flex-column" style={{ width: "49%" }}>
          <div className="flex align-items-center">
            <LiaMapMarkerAltSolid className="text-2xl text-primary" />
            <p className="text-2xl font-bold ml-3">ORIGEN</p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">Origen de producto : </p>
            <p className="font-bold">Proveedor : </p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">Gerente : </p>
            <p className="font-bold">Jefe : </p>
          </div>
          <div className="w-9 flex justify-content-between pt-5">
            <p className="font-bold">Tipo de compra : </p>
            <p className="font-bold">Comprador : </p>
          </div>
        </div>
      </div>
      <div className="card w-full">
        <div className="flex">
          <FaBook className="text-2xl text-primary" />
          <p className="text-2xl font-bold ml-3">CERTIFICACIÓN</p>
        </div>
        <div className="flex align-items-center mt-2">
          <RadioButton
            inputId="certifiacion13"
            name="certifications"
            value="Sistema 013"
            onChange={(e) => setCertification(e.value)}
            checked={certification === "Sistema 013"}
          />
          <label htmlFor="certifiacion13" className="ml-2">
            Sistema 013
          </label>
        </div>
        <div className="flex align-items-center mt-2">
          <RadioButton
            inputId="certification22"
            name="certifications"
            value="Sistema 022"
            onChange={(e) => setCertification(e.value)}
            checked={certification === "Sistema 022"}
          />
          <label htmlFor="certification22" className="ml-2">
            Sistema 022
          </label>
        </div>
      </div>
    </div>
  );
};

export default Users;
