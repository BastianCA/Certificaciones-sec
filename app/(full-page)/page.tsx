"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { PiHeadsetThin } from "react-icons/pi";
import type { Page } from "../../types/types";

const Login: Page = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState("/layout/images/Sodimac.png");

  return (
    <>
      <div className="min-h-screen flex justify-content-center align-items-center">
        <div className="py-7 px-4 md:px-7 z-1">
          <div className="mb-4">
            <div className="flex justify-content-center align-items-center">
              <Image
                width={280}
                height={51}
                src={imageSrc}
                alt="logo empresa"
              />
            </div>
            <div className="text-900 text-3xl font-bold mb-2 flex justify-content-center align-items-center p-5">
              CERTIFICACIONES SEC
            </div>
            <div className="text-900 text-xl font-bold mb-2">Inicia sesión</div>
            <span className="text-600 font-medium">
              Ingresa tus datos de usuario
            </span>
          </div>
          <div className="flex flex-column">
            <span className="p-input-icon-left w-full mb-4">
              <i className="pi pi-envelope"></i>
              <InputText
                id="email"
                type="text"
                className="w-full"
                placeholder="Email"
              />
            </span>
            <span className="p-input-icon-left w-full mb-4">
              <i className="pi pi-lock"></i>
              <InputText
                id="password"
                type="password"
                className="w-full"
                placeholder="Contraseña"
              />
            </span>
            <div className="mb-4 flex flex-wrap gap-3">
              <div>
                <Checkbox
                  name="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.checked ?? false)}
                  className="mr-2"
                ></Checkbox>
                <label htmlFor="checkbox" className="text-900 font-medium mr-8">
                  Recordarme
                </label>
              </div>
              <a
                className="text-600 cursor-pointer hover:text-primary cursor-pointer ml-auto transition-colors transition-duration-300"
                onClick={() => router.push("/auth/forgotpassword")}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <Button
              label="Iniciar sesión"
              className="border-round-3xl w-full"
              onClick={() => router.push("/dashboard-e-commerce")}
            ></Button>
          </div>
        </div>
      </div>
      <div className="p-4 absolute bottom-0 right-0 font-semibold text-xl flex align-items-center">
        <PiHeadsetThin style={{ fontSize: "35px" }} />
        Soporte
      </div>
    </>
  );
};

export default Login;
