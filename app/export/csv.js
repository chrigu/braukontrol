import moment from 'moment';

export const generateCsv = function(data) {

    let csvData = data.reduce((csvContent, dataItem) => {
        console.log(csvContent);
        let valuesArray = [];
        for(let key in dataItem) {
            let value = dataItem[key];

            if (key === "time") {
                value = moment(dataItem[key]).format("YYYY-MM-DD HH:mm:ss");
            }
            valuesArray.push(value);
        }
        return csvContent + valuesArray.join(",") + String.fromCharCode(13);
    }, 'data:text/csv;charset=utf-8,');

    let encodedUri = encodeURI(csvData + '\n');
    window.open(encodedUri);
}