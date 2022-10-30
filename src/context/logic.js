/**
 * @typedef {object} CardDataState
 * @property {string} cardNumber
 * @property {string} cardExp
 * @property {string} holderName
 * @property {string} cardCvc
 * @property {boolean} submit
 * @property {string} cardNumberError
 * @property {string} cardExpError
 * @property {string} holderNameError
 * @property {string} cardCvcError
 */

/**
 * @typedef {object} ErrorFormat
 * @property {string} value
 * @property {string} name
 */

/**
 * Set card number
 * 
 * @param {CardDataState} state
 * @param {React.Dispatch<React.SetStateAction<CardDataState>>} setState
 * 
 * @returns {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void}
 */
export const setCardNumber = (state, setState) => e => {
    let wrongChar = false;
    const newValue = e.target.value;
    const regex = /\d/;

    newValue.split("").forEach((char) => {
        if (!regex.test(char)) {
            wrongChar = true;
        }
    });

    if (e.target.value.length <= 4 * 4 && !wrongChar) {
        setState({
            ...state,
            cardNumber: e.target.value,
            cardNumberError: ''
        });
    } else if (wrongChar) {
        setState({
            ...state,
            cardNumberError: 'Wrong format, numbers only'
        })
    }
}

/**
 * Set card expire
 * 
 * @param {CardDataState} state 
 * @param {React.Dispatch<React.SetStateAction<CardDataState>>} setState 
 * 
 * @returns {(value:string)=>void}
 */
export const setCardExp = (state, setState) => value => {
    if (value.length > 1) {
        setState({
            ...state,
            cardExp: value,
            cardExpError: ''
        });
    } else {
        setState({
            ...state,
            cardExp: "",
        });
    }
}

/**
 * Set card holdername
 * 
 * @param {CardDataState} state 
 * @param {React.Dispatch<React.SetStateAction<CardDataState>>} setState 
 * 
 * @returns {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void}
 */
export const setHolderName = (state, setState) => e => {
    setState({
        ...state,
        holderName: e.target.value,
        holderNameError: ''
    });
};

/**
 * Set card cvc
 * 
 * @param {CardDataState} state 
 * @param {React.Dispatch<React.SetStateAction<CardDataState>>} setState 
 * 
 * @returns {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void}
 */
export const setCardCvc = (state, setState) => (e) => {
    if (e.target.value.length < 5) {
        setState({
            ...state,
            cardCvc: e.target.value,
            cardCvcError: ''
        });
    }
};

/**
 * Handle submit
 * 
 * @param {CardDataState} state 
 * @param {React.Dispatch<React.SetStateAction<CardDataState>>} setState 
 * 
 * @returns {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void}
 */
export const handleSubmit = (state, setState) => e => {
    e.preventDefault();
    const [monthExp, yearExp] = state.cardExp.split('/');

    /**
     * @type {Array<ErrorFormat>}
     */
    let errors = [];

    if (!state.cardNumber) {
        errors.push({
            name: 'cardNumberError',
            value: "Can't be blank"
        })
    }
    if (!state.holderName) {
        errors.push({
            value: "Can't be blank",
            name: 'holderNameError'
        })
    }
    if (monthExp === '00' || yearExp === '00') {
        errors.push({
            name: 'cardExpError',
            value: "Can't be blank"
        })
    }
    if (!state.cardCvc) {
        errors.push({
            name: 'cardCvcError',
            value: "Can't be blank"
        });
    }

    if (errors.length > 0) {
        let newState = {
            ...state
        };

        errors.forEach(error => {
            newState[error.name] = error.value;
        });

        setState(newState);
    } else {
        setState({
            ...state,
            submit: !state.submit,
            cardCvcError: '',
            cardExpError: '',
            cardNumberError: '',
            holderNameError: ''
        });
    }
}