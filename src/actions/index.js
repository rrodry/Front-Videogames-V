import axios from 'axios'
import { Link } from 'react-router-dom'

export function VideogamesAll() {
    return async function (dispatch) {
        const dataBack = await axios.get('https://videogamebd-production.up.railway.app/videogames')
        const dataGen = await axios.get('https://videogamebd-production.up.railway.app/genres')
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: dataBack.data,
            dataGen: dataGen.data
        })
    }

}
export function filterGames(payload) {
    return async function (dispatch){
        return dispatch({
            type: "FILTER_GAMES",
            payload
        })
    }

}

export function orderGames(payload) {
    return async function (dispatch){
        return dispatch({
            type: "ORDER_GAMES",
            payload
        })
    }
}

export function searchGames(payloadI){
    return async function (dispatch) {
        try {
            let axiosGetSearch = await axios.get(`https://videogamebd-production.up.railway.app/videogames?name=${payloadI}`)
            return dispatch({
                type: 'SEARCH',
                payload: axiosGetSearch.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function searchGamesChange(payload){
    return {
        type:'SEARCH_ONCHANGE',
        payload
    }
}
export function detailsGame(payloadI){
    return async function (dispatch){
        const dataBDAPI = await axios(`https://videogamebd-production.up.railway.app/videogame/${payloadI}`)
        return dispatch({
            type:"GET_DETAILS",
            payload: dataBDAPI.data
        })
    }
}
export function postGames(payload){
    return async function(dispatch){
        try {
            await axios.post('https://videogamebd-production.up.railway.app/videogames', payload).then(() =>
             true
           )
            
        } catch (error) {
            console.log(error)
        }
    }
}
export function filterApi(payload){
    return{
        type:'FILTER_BY_APBD',
        payload
    }
}
export function handleLoading(payload){
    return{
        type: "LOADING",
        payload
    }
}