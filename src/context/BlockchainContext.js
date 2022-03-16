import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import ApeContractData from "../blockchain/ApeContract";
import StakingContractData from "../blockchain/StakingContract";

export const BlockchainContext = createContext();

const { ethereum } = window;

const getProvider = () => {
  return new ethers.providers.Web3Provider(ethereum);
};

const getSigner = () => {
  const provider = getProvider();
  return provider.getSigner();
};

// returns promise
const getSignerAddress = () => {
  const provider = getProvider();
  return provider.getSigner().getAddress();
};

const getCurrentNetwork = () => {
  const provider = getProvider();
  return provider.getNetwork();
};

// returns Promise
const getNetworkChainId = async () => {
  const network = await getCurrentNetwork();
  return network.chainId;
};

export const BlockchainContextProvider = (props) => {
  const [currentSigner, setCurrentSigner] = useState("");
  const [currentSignerAddress, setCurrentSignerAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unstakedNfts, setUnstakedNfts] = useState();
  const [stakedNfts, setStakedNfts] = useState();
  //
  const [unstakedBalance, setUnstakeBalance] = useState();
  const [stakedBalance, setStakeBalance] = useState();
  const [rewardTokenBalance, setRewardTokenBalance] = useState();

  useEffect(() => {
    checkIfWalletIsConnected();
    listenMMAccount(); // Event is registered in background
  }, []);

  async function listenMMAccount() {
    ethereum.on("accountsChanged", async function () {
      window.location.reload();
    });

    ethereum.on("chainChanged", (currentChainId) => {
      window.location.reload();
    });
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      // Check Network
      const chainId = await getNetworkChainId();
      if (chainId !== 4) {
        alert("Please Change Network to Ethereum Rinkeby Testnet!");
        return;
      }

      if (accounts.length) {
        // Set Current Signer
        const signer = getSigner();
        setCurrentSigner(signer);

        // Set Current Signer Address
        const signerAddress = await getSignerAddress();
        setCurrentSignerAddress(signerAddress);

        // Fetch Unstaked Nfts
        const unstakedNfts_fetched = await fetchUnstakedInfo(signerAddress);
        setUnstakedNfts(unstakedNfts_fetched);

        // Fetch Staked Nfts
        const stakedNfts_fetched = await fetchStakedInfo(signerAddress);
        setStakedNfts(stakedNfts_fetched);

        await getUnstakedBalance(signerAddress);
        await getStakedBalance(signerAddress);
        await getReawardTokenBalance(signerAddress);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      alert(error.data.message);

      throw new Error("No Ethereum Object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      // Request Metamask for accounts
      await ethereum.request({ method: "eth_requestAccounts" });

      // Check Network
      const chainId = await getNetworkChainId();
      if (chainId !== 4) {
        alert("Please Change Network to Ethereum Rinkeby Testnet!");
        return;
      }

      // Set Current Signer
      const signer = getSigner();
      setCurrentSigner(signer);

      // Set Current Signer Address
      const signerAddress = await getSignerAddress();
      setCurrentSignerAddress(signerAddress);

      // Fetch Unstaked Nfts
      const unstakedNfts_fetched = await fetchUnstakedInfo(signerAddress);
      setUnstakedNfts(unstakedNfts_fetched);

      // Fetch Staked Nfts
      const stakedNfts_fetched = await fetchStakedInfo(signerAddress);
      setStakedNfts(stakedNfts_fetched);

      await getUnstakedBalance(signerAddress);
      await getStakedBalance(signerAddress);
      await getReawardTokenBalance(signerAddress);
    } catch (error) {
      alert(error.data.message);

      throw new Error("No Ethereum Object");
    }
  };

  // Get APE Contract

  const getApeContract = async () => {
    if (!currentSigner) {
      alert("Please Connect Wallet First!");
      // setIsLoading(false);
      return;
    }

    const provider = getProvider();
    const ApeContract = new ethers.Contract(
      ApeContractData.address,
      ApeContractData.abi,
      provider
    );
    return ApeContract;
  };

  // Get Staking Contract
  const getStakingContract = async () => {
    if (!currentSigner) {
      alert("Please Connect Wallet First!");
      // setIsLoading(false);
      return;
    }

    const provider = getProvider();
    const StakingContract = new ethers.Contract(
      StakingContractData.address,
      StakingContractData.abi,
      provider
    );
    return StakingContract;
  };

  /* 
  * -------------------------------------------
            Functions
  * -------------------------------------------
  */
  // Get User Owned NFTs (Unstaked)
  const fetchUnstakedInfo = async (signerAddress) => {
    let tokenIds = [];
    let metadatas = [];

    // Get Ape Contract
    const provider = getProvider();
    const apeContract = new ethers.Contract(
      ApeContractData.address,
      ApeContractData.abi,
      provider
    );

    const balance = await apeContract.balanceOf(signerAddress);
    let a1 = 0;
    for (a1 = 0; a1 < balance; a1++) {
      const tokenId = await apeContract.tokenOfOwnerByIndex(signerAddress, a1);

      // const metadata = await apeContract.methods.tokenURI(tokenId).call();
      // const image = await getImageHash(metadata);
      const image =
        "https://arthall.mypinata.cloud/ipfs/QmcwZ8fmBhRxGGFfEH6bsAsY9EQT3JMEhG1NvLjJM8Hdpj";

      console.log(tokenId);
      tokenIds.push(tokenId);
      metadatas.push(image);
    }

    return {
      tokenIds,
      metadatas,
    };
  };

  const fetchStakedInfo = async (signerAddress) => {
    let tokenIds = [];
    let metadatas = [];

    // Get Staking Contract
    const provider = getProvider();
    const stakingContract = new ethers.Contract(
      StakingContractData.address,
      StakingContractData.abi,
      provider
    );

    // const balance = await stakingContract.methods.stakingAmount(account).call();
    const balance = await stakingContract.checkHowManyStaked(signerAddress);

    let a = 0;
    for (a = 0; a < balance; a++) {
      const tokenInfo = await stakingContract.getFulltokenOf(signerAddress);

      // const stakedInfo = await stakingContract.methods
      //   .getUserStakedInfo(account)
      //   .call();
      // const tokenInfo = stakedInfo[a];
      // const metadata = await apeContract.methods
      //   .tokenURI(tokenInfo.tokenId)
      //   .call();
      // const image = await getImageHash(metadata);
      const image =
        "https://arthall.mypinata.cloud/ipfs/QmcwZ8fmBhRxGGFfEH6bsAsY9EQT3JMEhG1NvLjJM8Hdpj";
      tokenIds.push(tokenInfo[a]);
      metadatas.push(image);
    }

    return {
      tokenIds,
      metadatas,
    };
  };

  const stake = async (_tokenIds) => {
    // Get Ape Contract
    const apeContract = await getApeContract();

    // Get Staking Contract
    const stakingContract = await getStakingContract();
    try {
      // Set Stake
      let tx = await stakingContract.connect(currentSigner).stake(_tokenIds);
      await tx.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const unstake = async (_tokenIds) => {
    // Get Staking Contract
    const stakingContract = await getStakingContract();
    try {
      // Set untake
      let tx = await stakingContract.connect(currentSigner).unstake();
      await tx.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getUnstakedBalance = async (signerAddress) => {
    try {
      // Get Ape Contract
      const provider = getProvider();
      const apeContract = new ethers.Contract(
        ApeContractData.address,
        ApeContractData.abi,
        provider
      );
      const balance = await apeContract.balanceOf(signerAddress);
      setUnstakeBalance(balance.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const getStakedBalance = async (signerAddress) => {
    try {
      // Get Staking Contract
      const provider = getProvider();
      const stakingContract = new ethers.Contract(
        StakingContractData.address,
        StakingContractData.abi,
        provider
      );
      const balance = await stakingContract.checkHowManyStaked(signerAddress);
      setStakeBalance(balance.toString());
    } catch (error) {
      console.log(error);
    }
  };
  const getReawardTokenBalance = async (signerAddress) => {
    try {
      // Get Staking Contract
      const provider = getProvider();
      const stakingContract = new ethers.Contract(
        StakingContractData.address,
        StakingContractData.abi,
        provider
      );
      let balance = await stakingContract.calculateReward(signerAddress);

      balance = ethers.utils.formatEther(balance);

      setRewardTokenBalance(balance);
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawToERC20 = async () => {
    try {
      const stakingContract = await getStakingContract();
      let tx = await stakingContract.connect(currentSigner).getReward();
      await tx.wait();
      window.location.reload();
    } catch (error) {
      if (
        error
          .toString()
          .includes("execution reverted: You have not staked any NFTs")
      ) {
        alert("You have not staked any NFTs");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <BlockchainContext.Provider
      value={{
        currentSigner,
        currentSignerAddress,
        connectWallet,
        unstakedNfts,
        stakedNfts,
        stake,
        unstake,
        withdrawToERC20,
        unstakedBalance,
        stakedBalance,
        rewardTokenBalance,
      }}
    >
      {props.children}
    </BlockchainContext.Provider>
  );
};
