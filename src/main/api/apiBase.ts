import axios from 'axios'

export const apiBase = axios.create({
    withCredentials: true,
    // baseURL: 'https://aaa.com',
    // headers: {
    //     "API-KEY": "aaaaaaaaa"
    // }
})


// export enum ResultCodesEnum {

// }

// export type ResponseType<D = {}> = {
//     data: D
//     ....
//     ....
// } 