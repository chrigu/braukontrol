import moment from 'moment'
import axios from 'axios';
import qs from 'qs';
import { PUSHOVER_API_TOKEN } from '../constants';

const POST_URL = 'https://api.pushover.net/1/messages.json';

export const sendToPushover = (message, id) => {

     let request = axios.create({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    let data = {
        token: PUSHOVER_API_TOKEN,
        user: id,
        message: message
    }

  return request.post(POST_URL, qs.stringify(data))
          .then(response => console.log(response));
};

