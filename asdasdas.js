var cryptoSecret = "822180f014c3ebf7sf7c8f12b95a9484aed1";

var crypto = require('crypto')
    , key = 'pioneer'
    , plaintext = 'xK/n3nksoFkYnZx0Psr9qg=='
    , cipher = crypto.createCipher('aes-192-cbc', key)
    , decipher = crypto.createDecipher('aes-192-cbc', key);



/*
 decipher.update(encryptedPassword, 'binary', 'utf8');
 var decryptedPassword = decipher.final('utf8');
 */

/*
encryptdata = cipher.update(plaintext, 'utf8', 'base64');
encryptdata += cipher.final('base64');
*/
decoded = decipher.update(plaintext, 'base64', 'utf8');
decoded += decipher.final('utf8');

//console.log('encrypted :', encryptdata);
console.log('decrypted :', decoded);