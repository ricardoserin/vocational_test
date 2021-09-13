import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
          
        <main>
            <section className="contenedor sobre-nosotros">
                <h2 className="titulo">ESTE TEST ES SOLO PARA INGENIERÍAS</h2>
                <div className="contenedor-sobre-nosotros">
                    <img src="../img/ilustracion2.png" alt="" class="imagen-about-us"/>
                    <div className="contenido-textos">
                        <h3><span>1</span> ANTES DE EMPEZAR </h3>
                        <p>Para elegir una carrera es necesario conocer o reconocer para qué somos hábiles y 
                            qué cosas nos interesan o atraen. Ese es un primer paso para luego pasar a la etapa de 
                            información y abordar el mundo de las carreras y profesiones.</p>
                        <h3><span>2</span> TENER EN CUENTA </h3>
                        <p>Ningún test puede ofrecerte “LAS RESPUESTAS” a tus dudas. Solo puede servirte de 
                            instrumento y como un punto de partida para tener una idea de cuáles son tus áreas de 
                            preferencia a la hora de optar por una carrera.</p>
                    </div>
                    
                </div>
            </section>
            
            <section className="portafolio">
                <div className="contenedor">
                    <h2 className="titulo">CARRERAS DE INGENIERIA</h2>
                    <div className="galeria-port">
                        <div className="imagen-port">
                            <img src="../img/Minas.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="../img/icono1.png" alt=""/>
                                <p>Ingeniería de Minas</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Metalurgica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Metalúrgica</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Agricola.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Agrícola</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Agronoma.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Agrónoma</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Zootecnia.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Zootecnia</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Industrial.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Industrial</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Agroindustrial.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Agroindustrial</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Estadistica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería en Estadística</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Mecanica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Mecánica</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Mecatronica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Mecatrónica</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Civil.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Civil</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Materiales.png" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería de Materiales</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Informatica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Informática</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Sistemas.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería de Sistemas</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Quimica.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Química</p>
                            </div>
                        </div>
                        <div className="imagen-port">
                            <img src="img/Ambiental.jpg" alt=""/>
                            <div className="hover-galeria">
                                <img src="img/icono1.png" alt=""/>
                                <p>Ingeniería Ambiental</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <Link href="/test">
                <div className="contenedor-btn">
                    <button className="btn">   INICIAR TEST  </button>
                </div>   
             </Link>
             

        
            <section className="about-services">
                <div className="contenedor">
                    <h2 className="titulo">INTEGRANTES</h2>
                    <div className="servicio-cont">
                        <div className="servicio-ind">
                            <img src="img/ilustracion1.svg" alt=""/>
                            <h3>Llave Vergaray Jose</h3>
                        </div>
                        <div className="servicio-ind">
                            <img src="img/ilustracion4.svg" alt=""/>
                            <h3>Reyes Julca Steven</h3>
                        </div>
                        <div className="servicio-ind">
                            <img src="img/ilustracion3.svg" alt=""/>
                            <h3>Serin Nery Elmer</h3>
                        </div>
                        <div className="servicio-ind">
                            <img src="img/ilustracion1.svg" alt=""/>
                            <h3>Silva Guevara Manuel</h3>
                        </div>
                        <div className="servicio-ind">
                            <img src="img/ilustracion4.svg" alt=""/>
                            <h3>Vargas Zavaleta Erick</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer> 
            <h2 class="titulo-final">&copy; DESARROLLADO POR ALUMNOS DE LA UNT</h2>
        </footer>
    </div>
  );
};

export default Home;