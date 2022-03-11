require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stone riot nominee coffee injury light army genius'; 
let testAccounts = [
"0xde91a58681b1e77e58db8a11fd77f6aeb97530a9a10b2a647a69c9fd972e450b",
"0x060fbb33364671ec8338a8d6fac49cb65029ad0028664e9aa0a0e6e2b3e2ec2f",
"0xf124a8f8c5cfe27d9a442ca3a63d90fb53f587e28251f06cab109fd3605151d4",
"0x52ef919b379034bf103457a34290d8f320b2b050e5b85e1648e0be5e6e51294e",
"0xd5bcc1a3ebddd8d05567c0e29644ba3818d3ca1986a44ad13034fcf417bea345",
"0x3db2dbfc38e15d19ab79f44f896e79aae755df4469e77546d420fbe3669bd186",
"0x6193b66cf6048fe0ad989b3ae22ba58ecc6c39154d77afddc244f10551bafb97",
"0xe4c289111905ca1a7b1b00ee148987555319a15bf1bd91ccbf22c6cf9b70fb87",
"0x74ffcbe780d3efabd7cd70a772aa9195f3c9d1d75e06c0eccbd8584bac50994b",
"0xa24a489a2f42cdacc305ff388b7d777e024cdcb40bd5083ad56a80553fd4ea0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

