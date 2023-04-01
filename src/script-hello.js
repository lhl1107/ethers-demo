import {ethers} from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '566aa7f7028643be9c6a119d3ebd485c'
const providerGoerli = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
const myAddress = '0x5692987Cf2e460078a5D56Db2Bde51BB78Bf10da';
const main = async () => {
    // const balance = await provider.getBalance(`vitalik.eth`);
    // console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`);

// 连接以太坊主网
// 连接Goerli测试网

    // 1. 查询vitalik在主网和Goerli测试网的ETH余额
    console.log("1. 查询vitalik在主网和Goerli测试网的ETH余额");
    const balanceGoerli = await providerGoerli.getBalance(myAddress);
    // 输出Goerli测试网ETH余额
    console.log(`Goerli ETH Balance of vitalik: ${ethers.utils.formatEther(balanceGoerli)} ETH`);

    // 2. 查询provider连接到了哪条链
    console.log("\n2. 查询provider连接到了哪条链")
    const network = await providerGoerli.getNetwork();
    console.log(network);
    // 3. 查询区块高度
    console.log("\n3. 查询区块高度")
    const blockNumber = await providerGoerli.getBlockNumber();
    console.log(blockNumber);
    // 4. 查询当前gas price
    console.log("\n4. 查询当前gas price")
    const gasPrice = await providerGoerli.getGasPrice();
    console.log(gasPrice);
    // 5. 查询当前建议的gas设置
    console.log("\n5. 查询当前建议的gas设置")
    const feeData = await providerGoerli.getFeeData();
    console.log(feeData);
    // 6. 查询区块信息
    console.log("\n6. 查询区块信息")
    const block = await providerGoerli.getBlock(0);
    console.log(block);
    // 7. 给定合约地址查询合约bytecode，例子用的WETH地址
    console.log("\n7. 给定合约地址查询合约bytecode，例子用的WETH地址")
    const code = await providerGoerli.getCode("0x5692987Cf2e460078a5D56Db2Bde51BB78Bf10da");
    console.log(code);
}
main()