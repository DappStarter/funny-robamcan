require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong dash maze color gloom arena metal giggle'; 
let testAccounts = [
"0x7e5856088ceabfe73e4e3797c6c5339660f245b08dcc744b4fe53390bd6ea948",
"0x803bb526110a63cb8eeb8743e80aa43e4ed62b6f622ee59d926dac7ce3819c70",
"0x46a38395ec31b8e1f02a457e3b43dec769962627706bd92a7b7cbe74037ae154",
"0x9ca0e029847c01e3f0cea6396f820f4b466c3e7570845a1a39b52e0f481945ac",
"0x24ed740f52ac79a04de50b26b78fcf055432d8a3dc63ee05b1ccf11e8976b252",
"0x7087977022a1e41ab3afe158bf5546044fc584758193a82ca9ef6c41a4f93fbc",
"0x39bd5aa13fb7bb5e55aa1a1ac8d0e367037dbabf51334f6c7602b0315b2fd683",
"0x236038d7bb398e2a81d0b62bce1d4b2400d621abad125e2835b915bd05775477",
"0xf9af644aa3ac90c0d2f7533df85fbd845cc1a17b59fa597deaad8e548cecbcfe",
"0x506d3a950c87002f46ac4c5982a8bbbcd8989bd3e158119fe66f0e8f10c12027"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
