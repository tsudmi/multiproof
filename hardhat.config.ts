import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'


const DEFAULT_BLOCK_GAS_LIMIT = 12450000
const HARDHATEVM_CHAINID = 31337

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: true,
            },
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      hardfork: 'merge',
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      gas: 12450000,
      gasPrice: 8000000000,
      chainId: HARDHATEVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: {
        accountsBalance: '1000000000000000000000000',
      },
    },
  },
}

export default config
