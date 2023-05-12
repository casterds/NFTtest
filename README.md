# Metabnb NFT project

This project is test result. [Link](https://nft-test-orcin.vercel.app/).

## Task

1. using particle network's (https://docs.particle.network/ ) Connect, Auth, Wallet SDK for in-app social login authentication and wallet functionalities & NFT SDK in the NFT marketplace code
2. implementing NFT minting and deploying on BNB testnet.

### Result

- Integrated their Connect, Auth, Wallet SDK on website. Check the wallet connect functionality and authentication functionality on navbar.
- Created "Create NFT" page and implemented minting functionality. Please upload NFT asset first and input necessary information. Then you can mint an NFT. All data would be stored on IPFS.
- Deployed NFT on BSC Testnet. Its address is ```0x90339ccA04A8532Bb76358d8CFFDEfEBD1938377```

### Pay attention

You should use authentication option for interact with web3 on site. There are two options to use Particle's SDKS. One is to use Connect SDK to leverage normal wallet connect function like other dApp, while another one is to use Auth SDK and connect your custodial wallet which would be provided from Particle. I've selected Auth SDK option, as Particle's most power is social login on dApp and usage of custodial wallet in my opinion. So you can proceed authentication with your email or social on site and fund your custodial wallet linked to your email/social(you can find your custodial wallet linked in Particle dashboar, in my opinion). And then, you can use minthing functionality with it.

Hence, connect wallet option is for demo purpose only.
