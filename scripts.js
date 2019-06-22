// const elemento = React.createElement(
//     'p',
//     {className: 'may', style: {backgroundColor: '#75010A', color: 'white'}},
//     '¡El inicio de toda una ',
//     React.createElement('strong', null, 'saga del infinito'), '!'
// );

// Usando JSX
const elemento = <p className="may">
                    ¡El inicio de toda <strong> una saga del infinito </strong> !
                </p>

ReactDOM.render(elemento, document.getElementById('app'));