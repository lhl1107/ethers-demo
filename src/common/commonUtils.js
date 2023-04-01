import {ethers, utils} from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";

function genProvider(infura_id) {
    return new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_id}`);
}

// 生成num个钱包对象 通过随机助记符的方式生成num个钱包
function genWallet(num) {
// 1. 创建HD钱包
    console.log("\n1. 创建HD钱包")
// 生成随机助记词
    const mnemonic = utils.entropyToMnemonic(utils.randomBytes(32))
// 创建HD钱包
    const hdNode = utils.HDNode.fromMnemonic(mnemonic)
    console.log(JSON.stringify(hdNode))
// 派生路径：m / purpose' / coin_type' / account' / change / address_index
// 我们只需要切换最后一位address_index，就可以从hdNode派生出新钱包
    let basePath = "m/44'/60'/0'/0";
    // 钱包对象
    let wallets = [];
    for (let i = 0; i < num; i++) {
        wallets.push(buildHdNodeModel(hdNode.derivePath(basePath + "/" + i)));
    }

//    // 3. 保存钱包（加密json）
// console.log("\n3. 保存钱包（加密json）")
// const wallet = ethers.Wallet.fromMnemonic(mnemonic)
// console.log("通过助记词创建钱包：")
// console.log(wallet)
// // 加密json用的密码，可以更改成别的
// const pwd = "password"
// const json = await wallet.encrypt(pwd)
// console.log("钱包的加密json：")
// console.log(json)
//
// // 4. 从加密json读取钱包
// const wallet2 = await ethers.Wallet.fromEncryptedJson(json, pwd);
// console.log("\n4. 从加密json读取钱包：")
// console.log(wallet2)
// //
}

function buildHdNodeModel (hdNode) {
    let hdNodeModel = {};
    hdNodeModel.privateKey = hdNode.privateKey;
    hdNodeModel.publicKey = hdNode.publicKey;
    hdNodeModel.parentFingerprint = hdNode.parentFingerprint;
    hdNodeModel.fingerprint = hdNode.fingerprint;
    hdNodeModel.address = hdNode.address;
    hdNodeModel.chainCode = hdNode.chainCode;
    hdNodeModel.index = hdNode.index;
    hdNodeModel.depth = hdNode.depth;
    hdNodeModel.mnemonic = JSON.stringify(hdNode.mnemonic);
    hdNodeModel.path = hdNode.path;
    return hdNodeModel;
}
export {genProvider,genWallet}