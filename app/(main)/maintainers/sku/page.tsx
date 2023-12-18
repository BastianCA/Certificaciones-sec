"use client";
import { ProductService } from "@/demo/service/ProductService";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import { RadioButton } from "primereact/radiobutton";
import { useEffect, useRef, useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoMdBarcode } from "react-icons/io";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdAttachFile } from "react-icons/md";

const Users = () => {
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
  };

  return (
    <div>
      <p className="general-title">Mantenedor de Producto</p>
      <div className="w-full flex align-content-center mb-4">
        <p className="general-text">Ingresar SKU o N° de certificación</p>
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
            <div className="w-3 flex justify-content-center align-items-center">
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
              <p className="text-2xl font-bold ml-3 mb-5">CERTIFICACIÓN</p>
            </div>
            <div className="flex align-items-center mb-8">
              <div>
                <label className="block mb-2">Sistema de certificación</label>
                <div className="flex align-items-center mt-4">
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
                <div className="flex align-items-center mt-4">
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
              <div className="ml-6">
                <label htmlFor="dias-habiles" className="block mb-6">
                  Días hábiles promedio de certificación
                </label>
                <InputNumber
                  inputId="dias-habiles"
                  value={diasHabiles}
                  onValueChange={(e: InputNumberValueChangeEvent) =>
                    setDiasHabiles(e.value)
                  }
                  showButtons
                  min={0}
                />
              </div>
            </div>
            <div className="flex align-items-center mb-6">
              <div className="w-full flex">
                <div className="flex flex-column">
                  <label htmlFor="organism">Organismo</label>
                  <InputText id="organism" style={{ width: "200px" }} />
                </div>
                <div className="flex flex-column ml-4">
                  <label htmlFor="certifaction-model">Modelo certificado</label>
                  <InputText
                    id="certifaction-model"
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="flex flex-column ml-4">
                  <label htmlFor="number-certification">
                    N° de certificado
                  </label>
                  <InputText
                    id="number-certification"
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="flex flex-column ml-4">
                  <label htmlFor="qr-code">Código QR</label>
                  <InputText id="qr-code" style={{ width: "200px" }} />
                </div>
              </div>
            </div>
            <div className="flex align-items-center mb-5">
              <MdAttachFile className="text-2xl text-primary mr-2" />
              <h3>DOCUMENTOS ADJUNTOS</h3>
            </div>
            <div className="w-full flex align-items-center mb-5">
              <div className="flex flex-column">
                <label htmlFor="document-type">Tipo de archivo</label>
                <InputText id="document-type" style={{ width: "200px" }} />
              </div>
              <div className="flex flex-column ml-4">
                <label htmlFor="certification">Adjuntar certificado</label>
                <InputText id="certification" style={{ width: "200px" }} />
              </div>
              <div className="flex flex-column ml-4">
                <label htmlFor="comentary">Comentario</label>
                <InputText id="comentary" style={{ width: "400px" }} />
              </div>
              <Button
                label="Cargar Archivo"
                icon="pi pi-upload"
                rounded
                className="mt-3 ml-5"
                style={{ height: "40px" }}
              />
            </div>
            <div className="border-solid border-round p-5 border-50">
              <DataTable
                value={products.slice(0, 5)}
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column field="code" header="Fecha"></Column>
                <Column field="name" header="Tipo de documento"></Column>
                <Column field="category" header="Nombre archivo"></Column>
                <Column field="quantity" header="Comentario"></Column>
              </DataTable>
            </div>
            <div className="w-full flex justify-content-between">
              <div>
                <Button
                  label="Export en PDF"
                  icon="pi pi-file-pdf"
                  rounded
                  className="mt-3 ml-5"
                  style={{ height: "40px" }}
                />
                <Button
                  label="Export en XLS"
                  icon="pi pi-file-excel"
                  rounded
                  className="mt-3 ml-5"
                  style={{ height: "40px" }}
                />
              </div>
              <div>
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

export default Users;
