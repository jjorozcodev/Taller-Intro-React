// const elemento = React.createElement(
//     'p',
//     {className: 'may', style: {backgroundColor: '#75010A', color: 'white'}},
//     '¡El inicio de toda una ',
//     React.createElement('strong', null, 'saga del infinito'), '!'
// );

// Usando JSX
// const elemento = (
//     <header>
//         <h1>Universo Cinematográfico de Marvel</h1>
//         <p>El inicio de toda una <strong>saga del infinito</strong>.</p>
//         <p className="may">
//             ¡El inicio de toda <strong> una saga del infinito </strong> !
//         </p>
//     </header>
// );

// Usando JSX y funciones para crear componentes
function Header() {
    return (
        <header>
            <h1>Universo Cinematográfico de Marvel</h1>
            <p>El inicio de toda una <strong>saga del infinito</strong>.</p>
            <p className="may">
                ¡El inicio de toda <strong> una saga del infinito </strong> !
             </p>
        </header>
    )
};

// Componente Película
function Movie(props) {
    return (
        <article>
            <h3>{props.nombre}</h3>
            <div className="year">Publicada en {props.year}</div>
            <img alt="Portada de Ironman" src={props.foto} />
        </article>
    )
};

const seed = [
    {
      id: "tt0117705",
      name: "Ironman",
      year: "2008",
      cover:
        "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170592.jpg"
    },
    {
      id: "tt0158811",
      name: "Thor",
      year: "2011",
      cover:
        "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170606.jpg"
    },
    {
      id: "tt0062622",
      name: "Capitán América: El primer vengador",
      year: "2011",
      cover:
        "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170605.jpeg"
    },
    {
      id: "tt0062633",
      name: "The Avengers",
      year: "2012",
      cover:
        "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170610.jpg"
    }
  ];

// RENDERIZAR TODA LA PÁGINA CON REACT
function ContenedorApp() {
    return (
        <React.Fragment>
            <Header />
            <h2>FASE ONE</h2>
            <section>
                <Movie id={seed[0].id} nombre={seed[0].name} year = {seed[0].year} foto={seed[0].cover} />
                <Movie id={seed[1].id} nombre={seed[1].name} year = {seed[1].year} foto={seed[1].cover} />
                <Movie id={seed[2].id} nombre={seed[2].name} year = {seed[2].year} foto={seed[2].cover} />
                <Movie id={seed[3].id} nombre={seed[3].name} year = {seed[3].year} foto={seed[3].cover} />
            </section>
        </React.Fragment>

    );
}

ReactDOM.render(<ContenedorApp />, document.getElementById('app'));