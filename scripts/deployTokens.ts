import { artifacts, ethers, upgrades } from "hardhat";
const CONTRACTS = require("../app/lib/variables/contracts.ts");
const accounts = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
  "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
  "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
  "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
  "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
  "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
  "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
  "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
  "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
  "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
];

async function main() {
  // const TestERC20 = artifacts.require("TestERC20.sol");
  // const t2 = await TestERC20.new("Wrapped ETH (Scat)", "WETH");
  // const mintAmount = await t2.mint(accounts[2], "50000000000");

  // await t2.approve(CONTRACTS.ERC20_TRANSFER_PROXY, "10000000000000000", {
  //   from: accounts[2],
  // });

  // console.log({ mintAmount });

  // // const myWallet = "0x8e8665bE566a0953bBEdACA5D6261F2F33113Ff1";
  // const nftMinterWallet = "0x8e8665bE566a0953bBEdACA5D6261F2F33113Ff1";
  // const nftMinterWallet = "0x8E94188034136dCE2BE62C10EaA5471EAf23E86B";
  const nftMinterWallet = accounts[0];

  const TestERC721 = artifacts.require("TestERC721.sol");

  const erc721 = await TestERC721.new(
    "Sam Hyde Poster",
    "HYDE",
    "https://ipfs.samhyde.com"
  );

  const nftMint = await erc721.mint(nftMinterWallet, 53);
  console.log({ nftMint });

  const nftApproval = await erc721.setApprovalForAll(
    CONTRACTS.ERC721_TRANSFER_PROXY,
    true,
    { from: nftMinterWallet }
  );

  console.log({ nftApproval });

  console.log({ erc721address: erc721.address });
  // console.log({ erc721address: erc721.address, erc20address: t2.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });