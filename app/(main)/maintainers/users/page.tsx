"use client";
import { ProductService } from "@/demo/service/ProductService";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import { Password } from "primereact/password";
import { useEffect, useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

const Users = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [permissions, setPermissions] = useState([
    {
      idPermission: 1,
      name: "Mantendor",
      permissionDto: [
        {
          id: 1,
          name: "Usuarios",
          checked: true,
        },
        {
          id: 2,
          name: "SKU",
          checked: true,
        },
        {
          id: 3,
          name: "Organismos",
          checked: true,
        },
      ],
    },
    {
      idPermission: 2,
      name: "Reportes",
      permissionDto: [
        {
          id: 1,
          name: "Usuarios",
          checked: true,
        },
        {
          id: 2,
          name: "SKU",
          checked: true,
        },
        {
          id: 3,
          name: "Organismos",
          checked: true,
        },
      ],
    },
  ]);
  const [checked, setChecked] = useState<boolean>(false);
  const op: any = useRef<OverlayPanel>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    rut: "",
    telefono: "",
    direccion: "",
    email: "",
    contraseña: "",
    imagen: "",
    gerencia: "",
    centroCosto: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      formData.nombreUsuario.trim() === "" ||
      formData.rut.trim() === "" ||
      formData.telefono.trim() === "" ||
      formData.direccion.trim() === "" ||
      formData.email.trim() === "" ||
      formData.contraseña.trim() === "" ||
      formData.imagen.trim() === "" ||
      formData.gerencia.trim() === "" ||
      formData.centroCosto.trim() === ""
    ) {
      // Mostrar mensaje de error o realizar alguna acción
    } else {
      // Enviar el formulario o realizar otras acciones
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    ProductService.getProductsMixed().then((data: any) => setProducts(data));
  }, []);

  const productSelect = (e: any) => {
    setShowForm(true);
    op.current.hide();
    console.log(e);
  };

  const handleSwitchChange = (permissionId: number, itemId: number) => {
    const updatedPermissions = permissions.map((permission) => {
      if (permission.idPermission === permissionId) {
        const updatedPermissionDto = permission.permissionDto.map((item) => {
          if (item.id === itemId) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        return { ...permission, permissionDto: updatedPermissionDto };
      }
      return permission;
    });
    setPermissions(updatedPermissions);
  };

  return (
    <div>
      <p className="general-title">Mantenedor de Usuario</p>
      <div className="w-full flex align-content-center mb-4">
        <p className="general-text">Ingresar nombre de usuario</p>
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
        <div>
          <div className="card">
            <div className="flex">
              <div className="w-full flex flex-column">
                <div className="w-9 flex align-items-center p-3 mb-5">
                  <FaUserEdit className="text-2xl text-primary mr-2" />
                  <p className="text-2xl font-bold">AGREGAR O EDITAR USUARIO</p>
                </div>
                <form className="flex flex-wrap align-items-center">
                  <div className="flex flex-column mb-8">
                    <label htmlFor="nombreUsuario">Nombre de usuario</label>
                    <InputText
                      name="nombreUsuario"
                      style={{ width: "500px" }}
                      value={formData.nombreUsuario}
                      onChange={handleChange}
                      placeholder="Nombre de usuario"
                    />
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="rut">RUT</label>
                    <InputText
                      name="rut"
                      style={{ width: "300px" }}
                      value={formData.rut}
                      onChange={handleChange}
                      placeholder="RUT"
                    />
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="telefono">Teléfono</label>
                    <InputText
                      name="telefono"
                      style={{ width: "300px" }}
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono"
                    />
                  </div>
                  <div className="flex flex-column mb-8">
                    <label htmlFor="direccion">Dirección</label>
                    <InputText
                      name="direccion"
                      style={{ width: "500px" }}
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Dirección"
                    />
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="email">Email</label>
                    <InputText
                      name="email"
                      style={{ width: "300px" }}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="email">Contraseña</label>
                    <Password
                      name="contraseña"
                      value={formData.contraseña}
                      onChange={handleChange}
                      placeholder="Contraseña"
                      toggleMask
                    />
                  </div>
                  <div className="flex flex-column mb-8">
                    <label htmlFor="fileUpload">Imagen</label>
                    <span className="p-input-icon-right">
                      <i className="pi pi-upload" />
                      <InputText
                        name="fileUpload"
                        style={{ width: "300px" }}
                        value={formData.imagen}
                        onChange={handleChange}
                        placeholder="Sube/Actualiza una imagen"
                      />
                    </span>
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="gerencia">Gerencia</label>
                    <InputText
                      name="gerencia"
                      style={{ width: "300px" }}
                      value={formData.gerencia}
                      onChange={handleChange}
                      placeholder="Gerencia"
                    />
                  </div>
                  <div className="flex flex-column ml-4 mb-8">
                    <label htmlFor="centroCosto">Centro de costo</label>
                    <InputText
                      name="centroCosto"
                      style={{ width: "300px" }}
                      value={formData.centroCosto}
                      onChange={handleChange}
                      placeholder="Centro de costo"
                    />
                  </div>
                </form>
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
            <div className="w-9 flex align-items-center p-3 mb-5">
              <IoKeyOutline className="text-2xl text-primary mr-2" />
              <p className="text-2xl font-bold">PERMISOS</p>
            </div>
            <div className="w-full flex flex-wrap h-24rem overflow-y-auto">
              {permissions.map((element: any) => (
                <div
                  key={element.idPermission}
                  className="flex flex-column alig-items-center ml-8"
                >
                  <p className="text-primary font-bold">{element.name}</p>
                  {element.permissionDto.map((items: any) => (
                    <div className="flex align-item-center mt-3" key={items.id}>
                      {" "}
                      <InputSwitch
                        checked={items.checked}
                        onChange={() =>
                          handleSwitchChange(element.idPermission, items.id)
                        }
                      />
                      <p className="ml-2">{items.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-content-end">
              <Button label="Cancelar" />
              <Button className="ml-3" label="Guardar" />
            </div>
          </div>
        </div>
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
        <div>
          <div className="p-4 absolute bottom-0 right-0 font-semibold text-xl flex align-items-center">
            <div className="logo-sodimac"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
