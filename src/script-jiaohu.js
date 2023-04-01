import {ethers} from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";
// 利用Infura的rpc节点连接以太坊网络
const INFURA_ID = '184d4c5ec78243c290d151d3f1a10f1d'
// 连接Rinkeby测试网
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

// 利用私钥和provider创建wallet对象
const privateKey = '0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b'
const wallet = new ethers.Wallet(privateKey, provider)
// WETH的ABI
const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function deposit() public payable",
    "function transfer(address, uint) public returns (bool)",
    "function withdraw(uint) public",
];
// WETH合约地址（Rinkeby测试网）
const addressWETH = '0xc778417e063141139fce010982780140aa0cd5ab' // WETH Contract

// 声明可写合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)
const address = await wallet.getAddress()
// 读取WETH合约的链上信息（WETH abi）
console.log("\n1. 读取WETH余额")
const balanceWETH = await contractWETH.balanceOf(address)
console.log(`存款前WETH持仓: ${ethers.utils.formatEther(balanceWETH)}\n`)
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;