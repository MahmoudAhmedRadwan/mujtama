import axios from 'axios';
import store from "@/store/index.js";

export default class Request 
{
    // get request
    static get(url){
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        })
        .get('/' + url)
    }

    // get request with pagination
    static getLimit(url, limit, apiParams){
        return this.fetch(url, apiParams, {
            limit : limit,
            name_ar: name
        });
    }

    // get data with course_department_id
    static getWithParams(url, limit, apiParams, course_department_id){
        return this.fetch(url, apiParams, {
            limit : limit,
            course_department_id : course_department_id            ,
            name_ar: name
        });
    }
    static getID(url, id, limit, apiParams){
        return this.fetch(url, apiParams, {
            limit : limit,
            course_id: id,
        });
    }

    static getFilteredData(url, filter) {
        return this.fetch(url, '', filter);
    }
    static getEmailFilter(url, limit, apiParams, name) {
        return this.fetch(url, apiParams, {
            limit : limit,
            email: name,
            status: status
        });
    }

    static fetch(url,apiParams, params) {
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
            params: params  
        })
        .get('/' + url + apiParams)
    }

    // get request with id
    static getBYID(url, ID){
        return axios.create({
            baseURL: store.state.domain,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        })
        .get('/'+url+'/'+ID)
    }

    // post request
    static post(url, formData) {
        return axios.post(store.state.domain + '/' + url, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        });
    }

    // update request
    static put(url, ID, formData){
        return axios.put( store.state.domain + '/' + url + '/' + ID, formData, { 
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
    }
    static putFormData(url, ID, formData){
        formData.append('_method', 'put');
        return axios.post( store.state.domain + '/' + url + '/' + ID, formData, { 
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
    }
    // delete request
    static delete(url, ID){
        return axios.delete( store.state.domain + '/' + url + '/' + ID, { 
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
            
        })
    }
    static deleteAll(url, ID){

        return axios.delete( store.state.domain + '/' + url, { 
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            },
            data:{
                id: ID
            }
        })
    }

    // status success
    static statusIsSuccess(response) {
        return (response.status === 200 || response.status === 201) 
    }

    // status faild
    static statusIsFaield(err) {
        return (err.response.status == 401)
    }
}