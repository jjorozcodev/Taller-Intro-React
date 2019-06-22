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

ReactDOM.render(<Header />, document.getElementById('encabezado'));