async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.deploy("OpenSea NFT", "OPENSEA");

  await nft.waitForDeployment();

  console.log("NFT deployed to:", await nft.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
