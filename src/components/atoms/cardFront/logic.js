import { parseFormatStr } from '../../../utils/functions/format';

/**
 * @typedef {import('react')} React
 */

/**
 * @typedef {object} CardFrontSchema
 * @property {string} cardNumber - card's number
 * @property {string} holderName - holder name
 * @property {string} cardExp - card expire
 */

const cardNumberDefault = '0000 0000 0000 0000';
const holderNameDefault = 'jane appleseed';
const cardExpDefault = '00/00';

/**
 * Catch values and set to state
 *
 * @param {CardFrontSchema} data - properties
 * @param {React.Dispatch<React.SetStateAction<CardFrontSchema>>} setState - set new state
 *
 * @returns {()=>void}
 */
export const setValuesToState = (data, setState) => () => {
    /**
     * @type {CardFrontSchema}
     */
    let newState = {
        cardNumber: cardNumberDefault,
        cardExp: data.cardExp || cardExpDefault,
        holderName: data.holderName || holderNameDefault
    };

    if (data.cardNumber) {
        newState.cardNumber = parseFormatStr(data.cardNumber, undefined, undefined, '0');
    }

    setState(newState);
}
