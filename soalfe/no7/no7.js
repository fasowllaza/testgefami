const crypto = require('crypto');
const moment = require('moment');

function hashString(namaDepan, gender) {
    const currentDate = moment(new Date()).format("DDMMYYYY")
    const totalString = currentDate+namaDepan+gender+"ifabula"
    const hash = crypto.createHash('sha256').update(totalString).digest('hex');
    console.log(`String yang di-hash: ${totalString}`);
    console.log(`Hasil hashing: ${hash}`);
}

hashString('fakhreza', 'pria');
