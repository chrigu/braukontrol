import moment from 'moment'
import axios from 'axios';

export const getBmData = (ip) => {

  return axios.get(`http://${ip}/bm.txt`)
          .then(response => parseData(response.data));
};

function parseData(data) {

    if (data.startsWith('V')) {
      data = data.split(';')[2];
    }

    let regex = /(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X/;
    let results = regex.exec(data);
    console.log(results);

    let opStatus = parseOpData(results[13]);

    return {
      time: moment(),
      bmTime: results[2],
      status: +results[3],
      targetTemperature: (+results[4]) / 10,
      temperature: parseFloat(results[5].replace(' ', '')),
      uptime: results[7],
      heating: opStatus['heating'],
      pump: opStatus['pump']
    }
}

function parseOpData(data) {
// p = pump off, q = pump inactive (temp)?, P = pump on
// h = heating off, H = heating on, q = heating on but inactive?
/*
New Data: V1.1.24 Jan 12 2017;0004A30B003F4546;0X18:22XCX101X-10000X 17.5X4800X277X0X0X0X0XEMSRXphX000
*/
return {
    pump: data.indexOf('P') > -1,
    heating: data.indexOf('H') > -1
};
}