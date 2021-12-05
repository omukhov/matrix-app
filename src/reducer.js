const filters = (state = [], action) => {
    switch (action.type) {
        case 'ALL':
           return {
            ...state,
            numbers: action.payload
           }
        case 'POSITIVE':
           return {
            ...state,
            numbers: action.payload
           }
        case 'NEGATIVE':
           return {
            ...state,
            numbers: action.payload
           };
        default:
            return state;
    }
    
};

export default filters;