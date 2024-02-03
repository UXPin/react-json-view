
export function parseJSX(value) {
    const REACT_ELEMENT_JSON_HELPER_PREFIX = 'R\\$';
    const REACT_ELEMENT_JSON_HELPER_SUFIX = '\\$R';
    const regex = new RegExp(`${REACT_ELEMENT_JSON_HELPER_PREFIX}(.*)${REACT_ELEMENT_JSON_HELPER_SUFIX}`, 'is');
    const match = typeof value === 'string' && value.match(regex);
    if (match && match[1]) {
        return match[1];
    }

    return false;
}
