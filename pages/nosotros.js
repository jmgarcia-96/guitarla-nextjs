import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Aliquam eget ultricies dui, ut blandit erat. Nullam at nibh ac
              orci facilisis aliquam. Integer bibendum porttitor est eget
              pretium. Vivamus pharetra et dolor in pretium. Nunc eu tristique
              lorem. Nunc ut lacus nec metus rutrum ullamcorper non sed ex.
              Nullam consequat, orci et sollicitudin porttitor, libero urna
              euismod massa, vel laoreet neque nulla tempus sem. Mauris euismod,
              dui et ullamcorper rhoncus, enim odio mollis sem, eu vestibulum ex
              ex in massa.
            </p>
            <p>
              Mauris non enim sit amet risus accumsan eleifend. Donec convallis
              id tellus eget condimentum. Nam tincidunt urna a arcu aliquet
              ultrices. Morbi nunc odio, tincidunt ac ornare aliquet, mattis eu
              leo. Aenean eget venenatis massa. Maecenas sollicitudin, tellus
              vitae rutrum fringilla, eros dui viverra ex, lacinia consectetur
              justo odio sed dolor. Sed sagittis sagittis porttitor. Phasellus
              eu lacus in mi ullamcorper pretium eget vel neque.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
