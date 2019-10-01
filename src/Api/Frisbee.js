const Frisbee = require('frisbee');
const qs = require('qs');

const api = new Frisbee({
    url : 'https://devpds.pegadaian.co.id:9090/oauth/token',
    method : 'POST',
    header : {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YXBsaWthc2lsb3M6TG9zMTIzIQ=='
    },
    data: qs.toString({
        'grant_type': 'password',
        'username': '9990',
        'password': 'los321!'
    })
});

module.exports = {
    api:api
};
