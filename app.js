var keythereum = require("keythereum");

var params = { keyBytes: 32, ivBytes: 16 };
var password = "wh!zzl@098";
var kdf = "pbkdf2"; // or "scrypt" to use the scrypt kdf
var options = {
    kdf: kdf,
    cipher: "aes-128-ctr",
    kdfparams: {
      c: 262144,
      dklen: 32,
      prf: "hmac-sha256"
    }
};

var dk = keythereum.create(params);

console.log('dk: ', dk);

var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);

console.log('keyObject: ', keyObject);

keythereum.exportToFile(keyObject);

console.log('Private Key: ', dk.privateKey.toString('hex'));
console.log('Address: 0x' + keyObject.address);

