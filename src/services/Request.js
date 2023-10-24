import axios from 'axios';
import store from "@/store/index.js";

export default class Request {
    // get request
    static get(url) {
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer ' + localStorage.getItem('printStation_token'),
                'localization': 'ar',
            },
        })
            .get(url)
    }

    static fetch(url, apiParams, params) {
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer ' + localStorage.getItem('printStation_token'),
                'localization': 'ar',
            },
            params: params
        })
            .get(url + apiParams)
    }

    // get request with pagination
    static getLimit(url, limit, apiParams) {
        return this.fetch(url, apiParams, {
            limit: limit,
            name_ar: name
        });
    }

    // post request
    static post(url, formData) {
        return axios.post(store.state.domain + url, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('printStation_token')}`,
                localization: 'ar'
            }
        });
    }

    // update request
    static put(url, formData) {
        return axios.put(store.state.domain + url, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('printStation_token')}`,
                'localization': 'ar',
            }
        })
    }
    static putFormData(url, ID, formData) {
        formData.append('_method', 'put');
        return axios.post(store.state.domain + url + '/' + ID, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('printStation_token')}`,
                'localization': 'ar',
            }
        })
    }
    static putParams(url, id, status) {
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer ' + localStorage.getItem('printStation_token'),
                'localization': 'ar',
            },
            body: {
                order_id: id,
                status: status,
                '_method': 'PUT'
            }
        })
            .post(url)
    }
    static putStatus(url, status) {
        return axios.put(store.state.domain + url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('printStation_token')}`,
                localization: 'ar',
                status: status
            }
        })
    }
    // delete request
    static delete(url, ID) {
        return axios.delete(store.state.domain + url + '/' + ID, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('printStation_token')}`,
                'localization': 'ar',
            }

        })
    }

}