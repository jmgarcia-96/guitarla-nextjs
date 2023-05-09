import Image from "next/image";
import Link from "next/link";
export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className="guitarra">
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" href={`/guitarras/${url}`} legacyBehavior>
          <a>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
}
