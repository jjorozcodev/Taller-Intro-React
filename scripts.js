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

const seed = [
    {
        id: "tt0117705",
        name: "Ironman",
        year: "2008",
        votes: 5,
        cover:
            "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170592.jpg"
    },
    {
        id: "tt0158811",
        name: "Thor",
        year: "2011",
        votes: 4,
        cover:
            "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170606.jpg"
    },
    {
        id: "tt0062622",
        name: "Capitán América: El primer vengador",
        year: "2011",
        votes: 3,
        cover:
            "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170605.jpeg"
    },
    {
        id: "tt0062633",
        name: "The Avengers",
        year: "2012",
        votes: 2,
        cover:
            "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170610.jpg"
    }
];

const extraFilms = [
    {
        id: "tt12345",
        name: "Hulk",
        year: 2008,
        votes: 0,
        cover: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170597.jpg"
    },
    {
        id: "ir212345",
        name: "Ironman 2",
        year: 2010,
        votes: 1,
        cover: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170599.jpg"
    },
    {
        id: "ir312345",
        name: "Ironman 3",
        year: 2013,
        votes: 1,
        cover: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170611.jpg"
    }
  ];
  
// Componente Película
class Movie extends React.Component {
    render(){
        return (
            <article>
                <h3>{this.props.nombre}</h3>
                <div className="year">Publicada en {this.props.year}</div>
                <button id={this.props.id} onClick={this.props.handleClick}>
                        +1 voto
                </button>
                <div className="votes">{this.props.votes} votos</div>
                <img alt={"Portada de " + this.props.nombre} src={this.props.foto} />
            </article>
        )
    }
};

// RENDERIZAR TODA LA PÁGINA CON REACT
class ContenedorApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            peliculas: [].concat(seed),
            showAddMoviesButton: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleAddMoviesClick = this.handleAddMoviesClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
    
        const clickedFilmId = event.target.id;
        console.log(event.target.id);
    
        this.setState(function(prevState) {
          const newFilms = prevState.peliculas.map(function(film) {
            if (film.id === clickedFilmId) {
              return Object.assign({}, film, { votes: film.votes + 1 });
            } else {
              return film;
            }
          });
    
          return { peliculas: newFilms };
        });
    }

    handleAddMoviesClick(event) {
        event.preventDefault();

        const clickedFilmId = event.target.id;

        console.log(this.state.peliculas);

        this.setState({
            showAddMoviesButton:false
        });
        this.setState(
            function(prevState){
                return { peliculas: prevState.peliculas.concat(extraFilms)}
            }
        );        
    }

    render() {
        const sortedFilms = this.state.peliculas.sort((a, b) => b.votes - a.votes);

        return (
            <React.Fragment>
                <Header />
                {this.state.showAddMoviesButton && (
                    <button onClick={this.handleAddMoviesClick}>
                    Agregar películas
                    </button>
                )}
                 {/* <button type="button" onClick={this.handleClick}>Agregar Película</button> */}
                <h2>FASE ONE</h2>

                <section>
                    {sortedFilms.map(film => {
                        return (
                            <Movie
                                key={film.id}
                                id={film.id}
                                nombre={film.name}
                                year={film.year}
                                foto={film.cover}
                                votes={film.votes}
                                handleClick={this.handleClick}
                            />
                        );
                    })}
                </section>
            </React.Fragment>
    
        )
    }
}

ReactDOM.render(<ContenedorApp />, document.getElementById('app'));