const INITIAL_STATE = {list: [], show: 'list'}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ARTISTS_FETCHED':
            return {...state, list: action.payload.data ? action.payload.data.data : []}

        case 'ARTIST_CONTENT_CHANGED':
            return {...state, show: action.payload}

        default:
            return state;
    }
}