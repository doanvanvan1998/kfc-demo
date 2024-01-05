import {Axios} from './Axios';
function getPost(payload){
    return Axios.get("posts");
}
export const productServices = {
    getPost
};