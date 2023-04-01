// import {ethers} from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";
// // 利用Infura的rpc节点连接以太坊网络
// // 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
// const INFURA_ID = '566aa7f7028643be9c6a119d3ebd485c'
// const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
// const main = async () => {
//     // 创建随机的wallet对象
//     // 利用私钥和provider创建wallet对象
//     // 利用私钥和provider创建wallet对象
//     const privateKey = 'ecd7553b50fbec0d74ff405ddd714ce487326a46b5694fd7f8d151ae65c9dc41'
//     const wallet2 = new ethers.Wallet(privateKey, provider)
//     // 创建随机的wallet对象
//     // 从助记词创建wallet对象
//     const address2 = await wallet2.getAddress()
//     console.log(`1. 获取钱包地址`);
//     console.log(`钱包2地址: ${address2}`);
//     console.log(`钱包2私钥: ${wallet2.privateKey}`)
//     const txCount2 = await wallet2.getTransactionCount()
//     console.log(`钱包2发送交易次数: ${txCount2}`)
//
//     // 5. 发送ETH
//     // 如果这个钱包没rinkeby测试网ETH了，去水龙头领一些，钱包地址: 0xe16C1623c1AA7D919cd2241d8b36d9E79C1Be2A2
//     // 1. chainlink水龙头: https://faucets.chain.link/rinkeby
//     // 2. paradigm水龙头: https://faucet.paradigm.xyz/
//     console.log(`\n5. 发送ETH（测试网）`);
//     // i. 打印交易前余额
//     console.log(`i. 发送前余额`)
//     console.log(`钱包2: ${ethers.utils.formatEther(await wallet2.getBalance())} ETH`)
//     // ii. 构造交易请求，参数：to为接收地址，value为ETH数额
//     const address1to= '0x8b2aE6Dc4e7d0a260d4747e5D6004290C8245f05'
//     const tx = {
//         to: address1to,
//         value: ethers.utils.parseEther("0.000001")
//     }
//     // iii. 发送交易，获得收据
//     console.log(`\nii. 等待交易在区块链确认（需要几分钟）`)
//     const receipt = await wallet2.sendTransaction(tx)
//     await receipt.wait() // 等待链上确认交易
//     console.log(receipt) // 打印交易详情
//     // iv. 打印交易后余额
//     console.log(`\niii. 发送后余额`)
//     console.log(`钱包2: ${ethers.utils.formatEther(await wallet2.getBalance())} ETH`)
// }
// main()