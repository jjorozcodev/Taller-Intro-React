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
function Movie() {
    return (
        <article>
            <h3>Ironman</h3>
            <div className="year">Publicada en 2008</div>
            <img alt="Portada de Ironman" src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170592.jpg" />
        </article>
    )
};

// RENDERIZAR TODA LA PÁGINA CON REACT
function ContenedorApp() {
    return (
        <React.Fragment>
            <Header />
            <h2>FASE ONE</h2>
            <section>
                <Movie />
                <Movie />
                <Movie />
                <article>
                    <h3>Thor</h3>
                    <div className="year">Publicada en 2011</div>
                    <img alt="Portada de Thor" src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170606.jpg" />
                </article>
                <article>
                    <h3>Capitán América: El primer vengador</h3>
                    <div className="year">Publicada en 2011</div>
                    <img alt="Portada de Capitán América: El primer vengador" src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170605.jpeg" />
                </article>
                <article>
                    <h3>The Avengers</h3>
                    <div className="year">Publicada en 2012</div>
                    <img alt="Portada de The Avengers" src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170610.jpg" />
                </article>
            </section>
        </React.Fragment>

    );
}

ReactDOM.render(<ContenedorApp />, document.getElementById('app'));