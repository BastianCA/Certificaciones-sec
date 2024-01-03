/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_BASE_URL
        : "https://thanos.dda.sodimac.cl:3045",
  },

  // Cambio del directorio de construcción
  distDir: "build",

  // Cambio del directorio de salida
  output: "export",

  // Configuración de imágenes (unoptimized:true deshabilita la optimización automática de imágenes)
  images: {
    unoptimized: true,
  },
};

console.log(process.env.NEXT_PUBLIC_BASE_URL);

module.exports = nextConfig;
