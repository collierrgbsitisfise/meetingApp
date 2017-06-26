import axios from 'axios';

import { GOOGLE_API_KEY } from './../../../config/config';

export function getPhotoForLocality (requestParameters) {
    
    //add in request data GOOGLE API KEY
    requestParameters.GOOGLE_API_KEY = GOOGLE_API_KEY
    
    return axios({
        method: 'post',
        url: '/getphoto/location',
        responseType: 'json',
        data: requestParameters
    });

}