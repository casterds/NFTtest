# Metabnb NFT project

This project is test result. [Link](https://nft-test-orcin.vercel.app/).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Task

1. using particle network's (https://docs.particle.network/ ) Connect, Auth, Wallet SDK for in-app social login authentication and wallet functionalities & NFT SDK in the NFT marketplace code
2. implementing NFT minting and deploying on BNB testnet.

### Result

- Integrated their Connect, Auth, Wallet SDK on website. Check the wallet connect functionality and authentication functionality on navbar.
- Created "Create NFT" page and implemented minting functionality. Please upload NFT asset first and input necessary information. Then you can mint an NFT. All data would be stored on IPFS.
- Deployed NFT on BSC Testnet. Its address is `0x90339ccA04A8532Bb76358d8CFFDEfEBD1938377`

### Pay attention

You should use authentication option for interact with web3 on site. There are two options to use Particle's SDKS. One is to use Connect SDK to leverage normal wallet connect function like other dApp, while another one is to use Auth SDK and connect your custodial wallet which would be provided from Particle. I've selected Auth SDK option, as Particle's most power is social login on dApp and usage of custodial wallet in my opinion. So you can proceed authentication with your email or social on site and fund your custodial wallet linked to your email/social(you can find your custodial wallet linked in Particle dashboar or through wallet SDK on site). And then, you can use minthing functionality with it.

Hence, connect wallet option is for demo purpose only.
