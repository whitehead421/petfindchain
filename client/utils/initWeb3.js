import { ethers } from "ethers";
import CONTRACT from "~/contractJson/PetRegistry.json";

const web3Store = useWeb3Store();
const contractAddress = ref("0xB11F7a40a6f741c60b93a7964D555db04450C387");
const contractABI = ref(CONTRACT.abi);

export default async function () {
  web3Store.loading = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { ethereum } = window;
  // Check for web3 provider
  if (typeof ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      web3Store.registerAccount(accounts[0]);
    });
    const preferences = {
      firstTime: true,
      autoConnect: false,
    };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    try {
      // Ask to connect
      await ethereum.send("eth_requestAccounts");

      // Accounts is for the user's wallet addresses
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Set the first account in the store
      console.log("Account connected from provider: ", accounts[0]);
      web3Store.registerAccount(accounts[0]);

      // Provider is for reading the blockchain
      const provider = new ethers.BrowserProvider(window.ethereum);
      // Signer is for sending transactions to the blockchain, like writing to it
      const signer = await provider.getSigner();
      // Contract is the interface to interact with the smart contract
      const contract = new ethers.Contract(
        contractAddress.value,
        contractABI.value,
        signer
      );

      // Store the data in the store
      web3Store.registerWeb3Instance({
        provider,
        signer,
        contract,
      });
    } catch (error) {
      // User denied account access
      alert("User denied web3 access");
      web3Store.loading = false;
      return;
    }
    web3Store.loading = false;
  } // No web3 provider
  else {
    web3Store.loading = false;
    console.error("No web3 provider detected");
    return;
  }
}

// const contractAddress = ref("0x6A2B49f74983cA16668B609d5fa2cbE0739fc131");
// const contractAddress = ref("0xf026f6a987DA1ceebc9302a50cCA2041c6ef23B4");
// const contractAddress = ref("0x3E2E0aEaaEEf41229e100eAf90fde58C4e0A55a8");
// const contractAddress = ref("0x8b43D7adDf99B107b29975eBe82f3700e0E60f6e");
