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
            <p className="may">
                ¡El inicio de toda <strong> una saga del infinito </strong> !
             </p>
        </header>
    )
};

// Componente Película
class Movie extends React.Component {
    render(){
        return (
            <article>
                <h3>{this.props.nombre}</h3>
                <div className="year">Publicada en {this.props.year}</div>
                <img alt="Portada de Ironman" src={this.props.foto} />
            </article>
        )
    }
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
class ContenedorApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            peliculas: [].concat(seed)
        }
    }

    handleClick(event) {
        event.preventDefault();
        console.log(event);
      }

    render() {
        return (
            <React.Fragment>
                <Header />
                 <button type="button" onClick={this.handleClick}>Agregar Película</button>
                <h2>FASE ONE</h2>
                <section>
                    {this.state.peliculas.map(function (film) {
                        return (
                            <Movie
                                key={film.id}
                                nombre={film.name}
                                year={film.year}
                                foto={film.cover}
                            />
                        );
                    })}
                </section>
            </React.Fragment>
    
        )
    }
}

ReactDOM.render(<ContenedorApp />, document.getElementById('app'));