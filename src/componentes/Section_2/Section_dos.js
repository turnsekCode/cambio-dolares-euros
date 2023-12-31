import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Ventajas de cambiar dólares en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja1.png" alt="Mejor servicio y precio" />
          </div>

          <p>Servicio 100% personalizado</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja2.png" alt="Mejor servicio y precio" />
          </div>

          <p>Precio del dólar siempre actualizado</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja3.png" alt="Mejor servicio y precio" />
          </div>

          <p>Más de 50 casas de cambio</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja4.png" alt="Mejor servicio y precio" />
          </div>

          <p>Mejor tipo de cambio de tu ciudad</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja5.png" alt="Mejor servicio y precio" />
          </div>

          <p>Euros en efectivo al instante</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja6.png" alt="Mejor servicio y precio" />
          </div>

          <p>Sin comisiones</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
