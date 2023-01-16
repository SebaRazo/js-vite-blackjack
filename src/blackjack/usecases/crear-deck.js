import _ from "underscore";


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ['A','J','Q','K'];
 * @returns {Array} Regresa un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if(!tiposDeCarta || tiposDeCarta===0) throw new Error('tiposdeCarta es obligatorio como arreglo de string')
    if(!tiposEspeciales || tiposEspeciales===0) throw new Error('tiposEspeciales es obligatorio como arreglo de string') 
    
    let deck =[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}