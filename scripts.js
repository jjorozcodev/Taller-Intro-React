const elemento = React.createElement(
    'p',
    {className: 'may', style: {backgroundColor: '#75010A', color: 'white'}},
    '¡El inicio de toda una ',
    React.createElement('strong', null, 'saga del infinito'), '!'
);

ReactDOM.render(elemento, document.getElementById('app'));