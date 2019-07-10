import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

const INITIAL_VALUES = {name: '', twitter: ''}

export function getList() {
    const request = axios.get(`${process.env.REACT_APP_API_HOST}/artists`)
    return {
        type: 'ARTISTS_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values.id ? values.id+0 : ''
        let filteredValues = {...values}
        if(id) delete filteredValues.id
        
        axios[method](`${process.env.REACT_APP_API_HOST}/artists/${id}`, filteredValues)
        .then(resp => {
            toastr.success('Success', resp.data.message)
            dispatch(init())
            dispatch(getList())
        })
        .catch(e => {
            if (!e.response) {
                toastr.error('Erro', 'Desconhecido :-/')
                console.log(e)
            } else if (!e.response.data) {
                toastr.error('Erro', e.response.message)
            } else if (e.response.data.errors) {
                Object.entries(e.response.data.errors).forEach(
                    ([key, error]) => toastr.error(key, error[0]))
            } else if (e.response.data) {
                toastr.error('Erro', e.response.data.message)
            }
        })
    }
}

export function showContent(flag) {
    return {
        type: 'ARTIST_CONTENT_CHANGED',
        payload: flag
    }
}

export function showUpdate(artist) {
    return [
        showContent('form'),
        initialize('artistForm', artist)
    ]
}

export function init() {
    return [
        initialize('artistForm', INITIAL_VALUES),
        showContent('list')
    ]
}