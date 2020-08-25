export default (state, action) => {
    switch (action.type) {
        case 'set-country':
            return {...state, country: action.payload}
        case 'set-stats':
            return {...state, stats: action.payload}
        case 'set-daily':
            return {...state, daily: action.payload}
        default: 
            return state;    
    }
}