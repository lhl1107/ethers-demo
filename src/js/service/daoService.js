function addWallet(wallet) {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost', user: 'root', password: '123456', database: 'web3_eth_demo'
    });

    connection.connect();
    let addSql = 'INSERT INTO `wallet` (privateKey,publicKey,address,chainCode,depth,fingerprint,index,parentFingerprint,path,status,mnemonic) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    let addSqlParams = [wallet.privateKey, wallet.publicKey, wallet.address, wallet.chainCode, wallet.depth, wallet.fingerprint, wallet.index, wallet.parentFingerprint, wallet.path, wallet.status, wallet.mnemonic];
//增
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result.insertId);
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    });
    connection.end();
}

export {addWallet}