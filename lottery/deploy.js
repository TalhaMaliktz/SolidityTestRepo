const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require ('./compile');

const provider = new HDWalletProvider(
    'once label pole food reject movie wreck forum huge sunny lobster fashion', 
    'https://rinkeby.infura.io/v3/ff05a8f92eeb490bb85fb789d5d2cb58'
    );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        //.deploy({data: '0x' + bytecode, arguments:['Hi there!']})
        .deploy({data: '0x' + bytecode})
        .send({gas:'4712357', from: accounts[0]});
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();
