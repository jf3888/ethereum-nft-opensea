# ethereum-nft-opensea

Ethereum NFT project for OpenSea deployment with Hardhat and ERC-721.

## Features
- ERC-721 NFT contract
- OpenSea-friendly metadata support
- Hardhat deployment ready for local and Sepolia testnet
- Automated tests for contract deployment and minting

## Prerequisites
- Node.js 18+
- npm
- A wallet private key for deployment (if using Sepolia)

## Install

```bash
npm install
```

## Compile

```bash
npx hardhat compile
```

## Test

```bash
npx hardhat test
```

## Run local blockchain

```bash
npx hardhat node
```

## Deploy locally

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Deploy to Sepolia

1. Copy `.env.example` to `.env`
2. Add your `SEPOLIA_URL` and `PRIVATE_KEY`
3. Run:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Contract details

The default contract is `contracts/MyNFT.sol` and is deployed as:
- Name: `OpenSea NFT`
- Symbol: `OPENSEA`

It exposes a `mint(address to, string memory tokenURI)` function that can be called by the contract owner.

## OpenSea

After deployment, the NFT metadata should be served with a valid `tokenURI` in a format like:

```text
ipfs://<CID>/metadata.json
```

This ensures compatibility with OpenSea metadata indexing.
