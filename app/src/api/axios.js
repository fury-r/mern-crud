import axios from 'axios'

const url='http://127.0.0.1:3001'


const instance=axios.create({
    baseURL:url
})
instance.interceptors.request.use(async config=>{

    if(['post','get','put','delete'].includes(config.method)){
        try{
                config.headers['Access-Control-Allow-Origin']='*'
        }catch(e){
            console.log(e)
        }
        return config
    }
}) 
export default instance