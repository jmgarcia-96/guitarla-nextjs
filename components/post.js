import Image from "next/image";
import styles from "../styles/blog.module.css";
import { formatearFecha } from "../utils/helpers";
import Link from "next/link";

export default function Post({ post }) {
  const { titulo, contenido, imagen, url, publishedAt } = post;
  return (
    <article className={styles.post}>
      <Image
        src={imagen.data.attributes.formats.small.url}
        width={600}
        height={400}
        alt={`Imagen del post ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}
