/**
 * @typedef {import('react')} React
 */

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e - event
 * @param {import('./index').CardExpTimeSchema} state - state
 * @param {React.Dispatch<React.SetStateAction<import('./index').CardExpTimeSchema>>} setState - set state
 * 
 * @returns {void}
 */
export const setMonthTime = (e, state, setState) => {
    if ((e.target.value > 0 && e.target.value <= 12) || e.target.value === '') {
        setState({
            ...state,
            expMonth: e.target.value
        });
    }
}

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e - event
 * @param {import('./index').CardExpTimeSchema} state - state
 * @param {React.Dispatch<React.SetStateAction<import('./index').CardExpTimeSchema>>} setState - set new Event
 * 
 * @returns {void}
 */
export const setYearTime = (e, state, setState) => {
    if ((e.target.value > 0 && e.target.value <= 99) || e.target.value === '') {
        setState({
            ...state,
            expYear: e.target.value
        });
    }
}

/**
 * Change focus beetween inputs
 * 
 * @param {HTMLInputElement} input
 * 
 * @returns {(e:React.ChangeEvent<HTMLInputElement>)=>void}
 */
export const handlerFocus = (input) => (e) => {
    e.preventDefault();

    input.focus();
};