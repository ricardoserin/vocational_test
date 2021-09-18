import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { testHandler } from '../lib/testHandler';
import AnyChart from 'anychart-react';

const quizItems = [
  {
    id: "1",
    question: "¿Soy original para realizar alguna actividad o tarea?",
  },
  {
    id: "2",
    question: "¿Me gusta cooperar con las demás y ser participativo en actividades sociales?",
  },
  {
    id: "3",
    question: "Explico las cosas con claridad y entusiasmo. Muchas veces logro convencerlos o persuadirlos de mis ideas y puntos de vista.",
  },
  {
    id: "4",
    question: "Me gusta aceptar sugerencias que me hacen los compañeros de trabajo y cumplir con responsabilidad las instrucciones recibidas de mis superiores.",
  },
  {
    id: "5",
    question: "Considero que soy una persona práctica. Me gusta ocuparme en trabajos útiles en los que pueda ver pronto los resultados.",
  },
  {
    id: "6",
    question: " Me divierten los juegos que requieren pensamiento analítico: ajedrez, resolver cuestionarios matemáticos, deducir combinaciones, aplicar estratégicas, etc.",
  },
  {
    id: "7",
    question: "Me gusta manipular herramientas o máquinas y ser capaz de aprovechar todas sus posibilidades.",
  },
  {
    id: "8",
    question: "Sé controlar mis emociones y mis sentimientos; medito antes de actuar y analizo las consecuencias de mis actos.",
  },
  {
    id: "9",
    question: "Quiero ser independiente, actuar sin tener que hacer caso a las costumbres o normas establecidas por la sociedad.",
  },
  {
    id: "10",
    question: "Me considero capaz de comprender y despertar cierto optimismo a las personas tristes.",
  },
  {
    id: "11",
    question: "Normalmente me gustaría ser el líder del grupo donde me encuentro y que los demás reconozcan mis cualidades.",
  },
  {
    id: "12",
    question: "Procuro tener mis cosas bien ordenadas y realizar los trabajos con pulcritud.",
  },
  {
    id: "13",
    question: "Prefiero dedicarme a trabajos de tipo manual.",
  },
  {
    id: "14",
    question: "Cuando inicio el estudio de un tema nuevo, me entusiasma profundizar y comprender bien este tema.",
  },
  {
    id: "15",
    question: "Me gusta dedicarme a trabajos que se puedan hacer con toda libertad, sin condiciones ni imposiciones.",
  },
  {
    id: "16",
    question: "Una de mis características es ser una persona generosa y servicial.",
  },
  {
    id: "17",
    question: "A menudo consigo que los demás se den cuenta de los aspectos positivos y agradables de las situaciones o de los acontecimientos.",
  },
  {
    id: "18",
    question: "Creo que soy eficaz y tengo sentido práctico en tareas de organización.",
  },
  {
    id: "19",
    question: "Me atraen las actividades que impliquen un esfuerzo físico.",
  },
  {
    id: "20",
    question: "Dedico bastante tiempo a las lecturas de libros y revistas de tipo científico.",
  },
  {
    id: "21",
    question: "Me considero una persona imaginativa, con inspiración y capaz de encontrar soluciones nuevas a los problemas que se presentan.",
  },
  {
    id: "22",
    question: "Me gusta meditar sobre la realidad social y me preocupan las injusticas que a veces sufren ciertas personas.",
  },
  {
    id: "23",
    question: "Me gustaría llegar a tener altos niveles de responsabilidad y ser una persona importante.",
  },
  {
    id: "24",
    question: "A menudo planifico lo que tengo que hacer de manera realista, metódica y detallada. Me gusta tener las cosas previstas y no actuar al azar o improvisando.",
  },
  {
    id: "25",
    question: "Prefiero las actividades que suponen el contacto con cosas (manipular objetos, utilizar máquinas).",
  },
  {
    id: "26",
    question: "Sinceramente, estoy mejor cuando puedo trabajar o estudiar solo/a. ",
  },
  {
    id: "27",
    question: "No me gusta la falta de estética en carteles, publicaciones y escaparates.",
  },
  {
    id: "28",
    question: "Tengo facilidad para iniciar conversaciones con personas que acabo de conocer y me intereso por sus preferencias o aficiones.",
  },
  {
    id: "29",
    question: "Opino que la economía, comercio, negocios, finanzas, etc. es uno de los aspectos más importantes para el desarrollo del individuo y de la sociedad.",
  },
  {
    id: "30",
    question: "Prefiero un mismo tipo de ritmo de trabajo cada día.",
  },
];

const subjects = [
  {
    id: '1',
    subject: 'Matemática',
    img: 'https://img2.rtve.es/i/?w=1600&i=1386350163529.jpg',
  },
  {
    id: '2',
    subject: 'Ciencias',
    img: 'https://www.65ymas.com/uploads/s1/32/63/52/sustancias-quimicas-que-pueden-ser-perjudiciales-para-la-salud.jpeg',
  },
  {
    id: '3',
    subject: 'Lenguaje',
    img: 'https://sites.google.com/site/literaturadem/_/rsrc/1375921105275/obras/libros.jpg',
  },
  {
    id: '4',
    subject: 'Idiomas',
    img: 'https://whatsup.es/wp-content/uploads/2018/10/istock_000074756305_small.jpg',
  },
  {
    id: '5',
    subject: 'Ciencias sociales',
    img: 'https://socialesconcarlos.files.wordpress.com/2019/04/ciencias_sociales2.jpg',
  },
  {
    id: '6',
    subject: 'Economía',
    img: 'https://www.xlsemanal.com/wp-content/uploads/sites/3/2020/04/la-economia-tras-la-pandemia-el-futuro-en-cuatro-escenarios.jpg',
  },
  {
    id: '7',
    subject: 'Educación por el trabajo',
    img: 'https://www.ugel07.gob.pe/wp-content/uploads/2016/04/IMG_4768.jpg',
  },
  {
    id: '8',
    subject: 'Computación',
    img: 'https://iespppomabamba.edu.pe/wp-content/uploads/2019/11/computacion1.jpg',
  },
];

const group = [
  {
    id:1, 
    description:'Ingeniería de Minas, Ingeniería Metalúrgica'
  },
  {
    id:2, 
    description:'Ingeniería Agrícola, Ingeniería Agrónoma, Ingeniería Zootecnia'
  },
  {
    id:3, 
    description:'Ingeniería Industrial , Ingeniería Agroindustrial'
  },
  {
    id:4, 
    description:'Ingeniería en Estadística'
  },
  {
    id:5, 
    description:'Ingeniería Mecánica,Ingeniería Mecatrónica, Ingeniería Civil, Ingeniería de Materiales'
  },
  {
    id:6,
    description:'Ingeniería Informática,Ingeniería de Sistemas'
  },
  {
    id:7, 
    description:'Ingeniería Química, Ingeniería Ambiental'
  } 
];

const Test = () => {
  const MySwal = withReactContent(Swal)
  const {handleSubmit, register, errors} = useForm();
  const [vocation, setVocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [vocation]);

  const getVocation = async (data) => {
    const response = testHandler(data);
    return response;
  };

  const onSubmit = async (data) => {
    if(data.subject.length == 4){
      setIsLoading(true);
      console.log({data});
      const ga = await getVocation(data);
      setVocation(ga);
    }
    else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar 4 materias.',
      });
    }
  };
  
  return (
    <div className="test-container">
      <h1>Test</h1>
        {
          (!isLoading) ? (
            (!vocation) ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="test__item">
                  <div className="test__item-header">
                    <h2 className="test__item-title">Selecciona 4 materias que te gustaban en el colegio.</h2>
                  </div>
                  <div className="test__item-body">
                    {
                      subjects.map((subject) => {
                        return (
                          <label id={`label-${subject.id}`} key={`label-${subject.id}`} className="test__item-option-label" htmlFor={`subject-${subject.id}`}>
                            <input {...register('subject[]', { required: true })} value={subject.id} className="test__item-option" type="checkbox" name="subject" id={`subject-${subject.id}`} hidden/>
                            <img className="test__item-option-img test__effect" src={subject.img} height="100" alt="" />
                            <span>{subject.subject}</span>
                          </label>
                        );
                      })
                    }
                  </div>
                </div>
                <div className="test__item">
                  <div className="test__item-header">
                    <h2 className="test__item-title">Cuestionario de personalidad</h2>
                  </div>
                  <div className="test__item-body">
                    <div>
                      <div>
                        Leyenda:
                        <ul>
                          <li>ND: Nada de acuerdo</li>
                          <li>PD: Un poco de acuerdo</li>
                          <li>BD: Bastante de acuerdo</li>
                          <li>TD: Totalmente de acuerdo</li>
                        </ul>
                      </div>
                      <div>
                        <table className="test__table">
                          <thead className="test__thead">
                            <tr>
                              <th className="test__th">N°</th>
                              <th className="test__th">Pregunta</th>
                              <th className="test__th test__th-radio">ND (1)</th>
                              <th className="test__th test__th-radio">PD (2)</th>
                              <th className="test__th test__th-radio">BD (3)</th>
                              <th className="test__th test__th-radio">TD (4)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              quizItems.map((item) => {
                                return (
                                  <tr id={`tr-${item.id}`} key={`tr-${item.id}`} className="test__row">
                                    <td className="test__td">{item.id}</td>
                                    <td className="test__td">{item.question}</td>
                                    <td className="test__td-radio">
                                      <label className="tooltip" htmlFor={item.id}>
                                        <input {...register(`p${item.id}`, { required: false })} className="tooltip" type="radio" name={`p${item.id}`} id={`ND-${item.id}`} value={0} />
                                        <span className="tooltiptext">Nada de acuerdo</span>
                                      </label>
                                    </td>
                                    <td className="test__td-radio">
                                      <label className="tooltip" htmlFor={item.id}>
                                        <input {...register(`p${item.id}`, { required: false })} className="tooltip" type="radio" name={`p${item.id}`} id={`PD-${item.id}`} value={1} />
                                        <span className="tooltiptext">Un poco de acuerdo</span>
                                      </label>
                                    </td>
                                    <td className="test__td-radio">
                                      <label className="tooltip" htmlFor={item.id}>
                                        <input {...register(`p${item.id}`, { required: false })} className="tooltip" type="radio" name={`p${item.id}`} id={`BD-${item.id}`} value={2} />
                                        <span className="tooltiptext">Bastante de acuerdo</span>
                                      </label>
                                    </td>
                                    <td className="test__td-radio">
                                      <label className="tooltip" htmlFor={item.id}>
                                        <input {...register(`p${item.id}`, { required: false })} className="tooltip" type="radio" name={`p${item.id}`} id={`TD-${item.id}`} value={3} />
                                        <span className="tooltiptext">Totalmente de acuerdo</span>
                                      </label>
                                    </td>
                                  </tr>
                                );
                              })
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contenedor-btn">
                    <input type="submit" className="btn" value="ENVIAR"/>              
                </div>   
              </form>
            ) : 
            (
              <div class="resultados">
                <div className="test">
                  <div className="test__item-header">
                    <h2 className="test__item-title">Resultados</h2>
                  </div>
                  <div className="test__item-body">
                    <div>
                      <div className="grafico" id="grafico">
                        <AnyChart
                          name="Puntaje"
                          serie="Puntaje"
                            labels={true, {fontColor: 'black', fontWeight: 'bold'}}
                            className="grafico"
                            type= 'column'
                            height={500}
                            yAxis={[0, {enabled: false}]}
                            xAxis={[0, {
                              labels: {
                                fontColor: 'black',
                                fontWeight: 'bold',
                              },
                              fill: "#FFD54F",
                            }]}
                            title= 'Column chart'
                            data={
                              vocation.personalities.map((p) => {
                                return [p.name, p.score, {}, {fill: "#FFD54F"}];
                              })
                            }
                            title=""
                        />
                      </div>
                      <div className="test__item">
                        <div className="test__item-header">
                          <h2 className="test__item-title">Descripción de personalidad</h2>
                        </div>
                        <div className="test__item-body">
                          <div>
                            <div className="results-cotainer">
                              <div className="results__personalities">
                                <div className="results__personality">
                                  <span className="results__personality-title">
                                    {`${vocation.personality1.name}: `} 
                                  </span>
                                  {vocation.personality1.description}
                                </div>
                                <div className="results__personality">
                                  <span className="results__personality-title">
                                    {`${vocation.personality2.name}: `} 
                                  </span>
                                  {vocation.personality2.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="test__item">
                        <div className="test__item-header">
                          <h2 className="test__item-title">El test vocacional le recomienda las siguientes carreras:</h2>
                        </div>
                        <div className="test__item-body">
                          <div>
                            <h2 className="results__vocation">
                              {group[vocation.vocation.value - 1].description}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="contedor-btn">
                  <input type="submit" className="btn" value="Nuevo Test"/>  
                </div> */}
              </div>
            )
          ) : (
            <div class="spinner"></div>
          )
        }
        <script type="text/javascript" src="./js/core.js"></script>
        <script type="text/javascript" src="./js/promises.js"></script>
        <script type="text/javascript" src="./js/lists.js"></script>
    </div>
  );
};

export default Test;
