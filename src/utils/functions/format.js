/**
 * Parse to format
 * 
 * @param {string} str - string value
 * @param {string} format - this is the format (default: ____ ____ ____ ____)
 * @param {string} charFormat - this is the char to replace into the format (default: _)
 * @param {string} autocomplete - this is the auto-complete in format (default: 0)
 * 
 * @returns {string}
 */
export const parseFormatStr = (str = '', format = '____ ____ ____ ____', charFormat = "_", autocomplete = '') => {
    const strArray = str.split('');
    let result = format;

    strArray.forEach(char => {
        result = result.replace(charFormat, char);
    });

    return result.split(charFormat).join(autocomplete).trim()
}