import axios from "axios";
import config from "../../config";

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest
{
    constructor(baseUrl)
    {
        this.baseUrl = baseUrl     
    }
    getInsideConfig()
    {
        const config = 
        {
            baseUrl:this.baseUrl,
            header:{

            }
        }
        return config
    }
    intercerptors(instance)
    {
       instance.interceptors.request.use(config => {
       // Do something before request is sent
       return config;
       },error => {
       // Do something with request error
       return Promise.reject(error);
       });
       instance.interceptors.response.use(response => {
       // Do something before response is sent
        console.log(response)
       return response;
       },error => {
        console.log(error)
       // Do something with response error
       return Promise.reject(error);
       });
    }
    request(options)
    {
       const instance = axios.create()
       options = {...this.getInsideConfig(),...options}
       this.intercerptors(instance)
       return instance(options)
    }
}

export default  new HttpRequest(baseUrl)