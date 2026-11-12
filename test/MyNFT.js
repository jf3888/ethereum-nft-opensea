const { expect } = require("chai");

describe("MyNFT", function () {
  it("should deploy and mint a token", async function () {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy("OpenSea NFT", "OPENSEA");

    await nft.waitForDeployment();

    const [owner] = await ethers.getSigners();
    const tokenURI = "ipfs://QmExampleCID/metadata.json";

    await nft.mint(owner.address, tokenURI);

    expect(await nft.name()).to.equal("OpenSea NFT");
    expect(await nft.symbol()).to.equal("OPENSEA");
    expect(await nft.balanceOf(owner.address)).to.equal(1);
    expect(await nft.tokenURI(1)).to.equal(tokenURI);
  });
});
