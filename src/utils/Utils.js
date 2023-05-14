

export const addElipsis = (str, limit) => {
    return str.length > limit ? (str.substr(0, limit)+"...") : str;
}