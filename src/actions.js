export const all = (numbers) => {
    return {
        type: 'ALL',
        payload: numbers
    };
};

export const positive = (numbers) => {
    return {
        type: 'POSITIVE',
        payload: numbers
    };
};

export const negative = (numbers) => {

    return {
        type: 'NEGATIVE',
        payload: numbers
    };
};
