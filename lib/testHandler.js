export const testHandler = async (data) => {
  console.log(data);
  var vocations = [
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

  var personalities = [
    {
      id: 'R',
      name: 'Realista',
      score: parseInt(data.p5) + parseInt(data.p7) + parseInt(data.p13)+ parseInt(data.p19 )+ parseInt(data.p25),
      description: 'Son personas que demuestran interés por actividades prácticas, mecánicas, que a menudo exigen esfuerzo físico; o bien, actividades que comportan el contacto con la naturaleza (cultivar campos, criar animales, etc). Prefieren trabajar con herramientas y objetos en lugar de trabajar con palabras y personas. Desean construir cosas y ver resultados prácticos en su trabajo. Normalmente no buscan el contacto social y evitan hacerse notar.',
    },
    {
      id: 'I',
      name: 'Investigador',
      score: parseInt(data.p6)+parseInt(data.p8)+parseInt(data.p14)+parseInt(data.p20)+parseInt(data.p26),
      description: 'Les gusta observar y experimentar para comprender los fenómenos que les rodean y reflexionar para comprender procesos lógicos. Resuelven los problemas con el uso de ideas y del lenguaje. Valoran altamente las matemáticas y el trabajo científico (teoría, investigación el laboratorio, etc). Tienden a ser personas curiosas, reflexivas, analíticas, teóricas, críticas, estudiosas y metódicas y a menudo les gusta trabajar solas.',
    },
    {
      id: 'A',
      name: 'Artístico',
      score: parseInt(data.p1)+parseInt(data.p9)+parseInt(data.p15)+parseInt(data.p21)+parseInt(data.p27),
      description: 'Se relacionan con el entorno físico y social utilizando sus sentimientos y su intuición e imaginación. Demuestran interés por actividades creativas. Frecuentemente prefieren un estilo de vida no convencional, valoran mucho la independencia y buscan activamente oportunidades de autoexpresión.',
    },
    {
      id: 'S',
      name: 'Social',
      score: parseInt(data.p2)+parseInt(data.p10)+parseInt(data.p16)+parseInt(data.p22)+parseInt(data.p28),
      description: 'Son personas que se preocupan del bienestar de los demás y muestran el deseo de ayudarlos. Generalmente se relacionan bien con todo tipo de personas, tiene buena habilidad de comunicación interpersonal. Son comprensivos, generosos y sensibles a los problemas de los demás.',
    },
    {
      id: 'E',
      name: 'Emprendedor',
      score: parseInt(data.p3)+parseInt(data.p11)+parseInt(data.p17)+parseInt(data.p23)+parseInt(data.p29),
      description:'Se enfrentan con el mundo mediante una actitud audaz, dominante, enérgica y “agresiva”. Son dinámicos, organizadores, seguros de ellos mismos. Sienten atracción pro actividades que les proporcionen la oportunidad de guiar a los demás, persuadirlos e influir en su manera de pensar, o bien, convencerlos para que se compren sus “productos”. Valoran el dinero, el poder, la posición social.',
    },
    {
      id: 'C',
      name: 'Convencional',
      score: parseInt(data.p4)+parseInt(data.p12)+parseInt(data.p18)+parseInt(data.p24)+parseInt(data.p30),
      description: 'Adoptan pautas de conducta y normas sancionadas por las costumbres establecidas por la sociedad. Prefieren ocupaciones con deberes claramente definidos: tareas de carácter rutinario, actividades verbales o numéricas propias del trabajo de oficina. Son personas ordenadas, sistemáticas, perseverantes y conformista.',
    },
  ];
  personalities.sort((a, b) => b.score - a.score);
  const dataProlog = {
    personality1: personalities[0],
    personality2: personalities[1],
    subjects: data.subject,
  };
  var vocation = await getVocation(dataProlog.personality1, dataProlog.personality2, dataProlog.subjects);
  console.log({
    ...dataProlog,
    vocation: vocations[vocation.links.V.value-1],
  });
  return {
    ...dataProlog,
    vocation: vocation.links.V,
    personalities: personalities,
  };
}

const getVocation = async (personality1, personality2, subjects) => {
  const program = `
    materiasC(1,1).
    materiasC(1,2).
    materiasC(1,3).
    materiasC(1,7).
    materiasC(2,1).
    materiasC(2,2).
    materiasC(2,3).
    materiasC(2,9).
    materiasC(3,1).
    materiasC(3,3).
    materiasC(3,4).
    materiasC(3,7).
    materiasC(4,1).
    materiasC(4,2).
    materiasC(4,5).
    materiasC(4,8).
    materiasC(5,9).
    materiasC(5,1).
    materiasC(5,4).
    materiasC(5,7).
    materiasC(6,9).
    materiasC(6,1).
    materiasC(6,4).
    materiasC(6,7).
    materiasC(7,2).
    materiasC(7,1).
    materiasC(7,5).
    materiasC(7,3).

    categorias('R','I',[7,5,1,6]).
    categorias('R','A',[6,5,1,2]).
    categorias('R','S',[6,5,1,3]).
    categorias('R','E',[6,5,1,3]).
    categorias('R','C',[6,5,1,3]).

    categorias('I','R',[7,2,1,5]).
    categorias('I','A',[7,4,5,6]).
    categorias('I','S',[7,4,2,1]).
    categorias('I','E',[7,4,3,6]).
    categorias('I','C',[2,4,7,1]).

    categorias('A','R',[5,6,1,7]).
    categorias('A','I',[4,7,6,5]).
    categorias('A','S',[3,2,7,6]).
    categorias('A','E',[3,2,6,5]).
    categorias('A','C',[2,3,1,6]).

    categorias('S','R',[6,5,1,3]).
    categorias('S','I',[7,4,2,3]).
    categorias('S','A',[3,5,4,6]).
    categorias('S','E',[3,5,2,7]).
    categorias('S','C',[2,3,6,7]).

    categorias('E','R',[1,5,6,3]).
    categorias('E','I',[7,4,3,2]).
    categorias('E','A',[3,6,5,7]).
    categorias('E','S',[3,5,7,4]).
    categorias('E','C',[3,2,4,7]).

    categorias('C','R',[5,6,1,7]).
    categorias('C','I',[4,2,7,5]).
    categorias('C','A',[3,2,5,6]).
    categorias('C','S',[3,2,7,4]).
    categorias('C','E',[3,2,5,6]).

    recorrerLista(X,1,[X|_]).
    recorrerLista(X,I,[_|Ys]) :-
      I > 1,
      II is I-1,
      recorrerLista(X,II,Ys).

    matchMaterias(LMaterias,Categoria,P):-
        recorrerLista(M1,1,LMaterias),
        comprobarMateria(M1,Categoria,R1),
        recorrerLista(M2,2,LMaterias),
        comprobarMateria(M2,Categoria,R2),
        recorrerLista(M3,3,LMaterias),
        comprobarMateria(M3,Categoria,R3),
        recorrerLista(M4,4,LMaterias),
        comprobarMateria(M4,Categoria,R4),
        P  is R1+R2+R3+R4.

    comprobarMateria(M,C,R):-
        materiasC(C,M),
        R=1,!.
    comprobarMateria(_,_,0).

    categoriaMayor(CC1,CC2,CC3,CC4,R):-
        CC1>=CC2,
        CC1>=CC3,
        CC1>=CC4,
        R is 1,!.
    categoriaMayor(CC1,CC2,CC3,CC4,R):-
        CC2>=CC3,
        CC2>=CC4,
        CC2>=CC1,
        R is 2,!.
    categoriaMayor(CC1,CC2,CC3,CC4,R):-
        CC3>=CC1,
        CC3>=CC2,
        CC3>=CC4,
        R is 3,!.
    categoriaMayor(CC1,CC2,CC3,CC4,R):-
        CC4>=CC1,
        CC4>=CC2,
        CC4>=CC3,
        R is 4.

    codigoOcupacional(Personalidad1,Personalidad2,LMaterias, CategoriaGana):-

      categorias(Personalidad1,Personalidad2,LCategorias),

      recorrerLista(Categoria1,1,LCategorias),

      matchMaterias(LMaterias,Categoria1,CC1),

      recorrerLista(Categoria2,2,LCategorias),
      matchMaterias(LMaterias,Categoria2,CC2),

      recorrerLista(Categoria3,3,LCategorias),
      matchMaterias(LMaterias,Categoria3,CC3),

      recorrerLista(Categoria4,4,LCategorias),
      matchMaterias(LMaterias,Categoria4,CC4),
      categoriaMayor(CC1,CC2,CC3,CC4,R),
      recorrerLista(CategoriaGana,R,LCategorias),
      write(CategoriaGana).
    `;
    
    const goal = `codigoOcupacional(${personality1.id},${personality2.id},[${subjects.toString()}], V).`;
    const session = pl.create();
    await session.promiseConsult(program);
    await session.promiseQuery(goal);

    for await (let answer of session.promiseAnswers()){
      console.log(session.format_answer(answer));
      return answer;

    }
}