"use client";
import { InputText } from "primereact/inputtext";

const Users = () => {
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
        <div className="w-full">
          <div className="w-9 flex justify-content-between">
            <p>SKU</p>
            <p>Modelo</p>
            <p>Marca</p>
          </div>
        </div>
        <div className="w-3">
          <div className="h-6rem border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center">
            imagen
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
