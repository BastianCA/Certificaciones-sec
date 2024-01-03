"use client";
import { ProductService } from "@/demo/service/ProductService";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useEffect, useRef, useState } from "react";
import { FaBook } from "react-icons/fa";
import { TfiPencil } from "react-icons/tfi";

const Organism = () => {
  const [certification, setCertification] = useState<string>("");
  const [diasHabiles, setDiasHabiles] = useState<number | null>();
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const op: any = useRef<OverlayPanel>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    ProductService.getProductsMixed().then((data: any) => setProducts(data));
  }, []);

  const productSelect = (e: any) => {
    setShowForm(true);
    op.current.hide();
    console.log(e);
    console.log("funciona");
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          outlined
          text
          className="mr-2 font-bold"
          onClick={() => console.log("edit")}
        />
        <Button
          icon="pi pi-trash"
          outlined
          text
          className="font-bold"
          onClick={() => console.log("delete")}
        />
      </React.Fragment>
    );
  };

  return (
    <div>
      <p className="general-title">Mantenedor de Organismos</p>
      <div className="w-full flex align-content-center mb-4">
        <p className="general-text">Ingresar nombre de organismo</p>
        <span className="p-input-icon-left ml-8">
          <i className="pi pi-search" />
          <InputText
            style={{ width: "454px" }}
            className="border-round-3xl"
            placeholder="Buscar"
            onChange={(e) => {
              if (e.target.value.length > 3) {
                op.current.toggle(e);
              }
            }}
          />
        </span>
      </div>
      {showForm && (
        <>
          <div className="card w-full">
            <div className="flex">
              <FaBook className="text-2xl text-primary" />
              <p className="text-2xl font-bold ml-3 mb-5">
                AGREGAR O EDITAR ORGANISMOS
              </p>
            </div>
            <div className="flex w-full">
              <div className="w-8 flex flex-column">
                <div className="flex align-items-center mb-6">
                  <div className="w-full flex">
                    <div className="flex flex-column">
                      <label htmlFor="organism">ID Organismo</label>
                      <InputText id="organism" style={{ width: "200px" }} />
                    </div>
                    <div className="flex flex-column ml-4">
                      <label htmlFor="organism-name">Nombre Organismo</label>
                      <InputText
                        id="organism-name"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div className="flex flex-column ml-4">
                      <label htmlFor="contact">Contacto</label>
                      <InputText id="contact" style={{ width: "200px" }} />
                    </div>
                  </div>
                </div>
                <div className="flex align-items-center mb-6">
                  <div className="w-full flex">
                    <div className="flex flex-column">
                      <label htmlFor="email">Email organismo</label>
                      <InputText id="email" style={{ width: "200px" }} />
                    </div>
                    <div className="flex flex-column ml-4">
                      <label htmlFor="rut">RUT organismo</label>
                      <InputText id="rut" style={{ width: "200px" }} />
                    </div>
                    <div className="flex flex-column ml-4">
                      <label htmlFor="contact-phone">Teléfono organismo</label>
                      <InputText
                        id="contact-phone"
                        style={{ width: "200px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex align-items-center mb-5">
                  <div className="flex flex-column">
                    <label htmlFor="address">Dirección</label>
                    <InputText id="address" style={{ width: "400px" }} />
                  </div>
                </div>
              </div>
              <div className="w-4 flex justify-content-center align-items-start">
                <div
                  className="border-round bg-primary font-bold p-3 m-3 flex align-items-center justify-content-center"
                  style={{ width: "150px", height: "150px" }}
                >
                  imagen
                </div>
                <div className="w-6">
                  <Button
                    outlined
                    label="Export en PDF"
                    icon="pi pi-file-pdf"
                    rounded
                    className="mt-3 ml-5"
                    style={{ height: "40px" }}
                  />
                  <Button
                    outlined
                    label="Export en XLS"
                    icon="pi pi-file-excel"
                    rounded
                    className="mt-3 ml-5"
                    style={{ height: "40px" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex align-items-center mb-5">
              <TfiPencil className="text-2xl text-primary mr-2" />
              <h3>EDITAR EJECUTIVA DE CUENTAS</h3>
            </div>
            <div className="w-full flex align-items-center">
              <div className="flex flex-column">
                <label htmlFor="ejecutive-name">Nombre</label>
                <InputText id="ejecutive-name" style={{ width: "200px" }} />
              </div>
              <div className="flex flex-column ml-4">
                <label htmlFor="ejecutive-phone">Teléfono</label>
                <InputText id="ejecutive-phone" style={{ width: "200px" }} />
              </div>
              <div className="flex flex-column ml-4">
                <label htmlFor="ejecutive-email">Email</label>
                <InputText id="ejecutive-email" style={{ width: "200px" }} />
              </div>
              <div className="w-full flex justify-content-end">
                <Button
                  label="Cancelar"
                  rounded
                  className="mt-3 ml-5"
                  style={{ height: "40px" }}
                  onClick={() => setShowForm(false)}
                />
                <Button
                  label="Guardar"
                  rounded
                  className="mt-3 ml-5"
                  style={{ height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="card relative p-7">
            <Button
              icon="pi pi-plus"
              className="absolute top-0 right-0 z-1 border-circle mr-8 mt-6"
            />
            <TabView>
              <TabPanel header="Fiscalizadores">
                <DataTable
                  value={products.slice(0, 5)}
                  tableStyle={{ minWidth: "50rem" }}
                >
                  <Column field="code" header="Fecha"></Column>
                  <Column field="name" header="Tipo de documento"></Column>
                  <Column field="category" header="Nombre archivo"></Column>
                  <Column field="quantity" header="Comentario"></Column>
                  <Column body={actionBodyTemplate} header=""></Column>
                </DataTable>
              </TabPanel>
              <TabPanel header="Patentes"></TabPanel>
            </TabView>
          </div>
        </>
      )}
      <OverlayPanel ref={op}>
        <DataTable
          value={products}
          selectionMode="single"
          paginator
          rows={5}
          selection={selectedProduct}
          onSelectionChange={(e: any) => setSelectedProduct(e.value)}
          onRowClick={productSelect}
        >
          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="price"
            header="Price"
            sortable
            style={{ minWidth: "8rem" }}
          />
        </DataTable>
      </OverlayPanel>
      {!showForm && (
        <>
          <div className="p-4 absolute bottom-0 right-0 font-semibold text-xl flex align-items-center">
            <div className="logo-sodimac"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Organism;
