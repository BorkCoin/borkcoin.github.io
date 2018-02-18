const rinkeby = {
  name: "Bork Coin",
  borkCoinAddress: "0xb93e30ee766c02eeffda724a4c7e2ab4edf87a18",
  borkCoinJson: "[ { \"constant\": true, \"inputs\": [], \"name\": \"getBorkCount\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"_owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"name\": \"balance\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"symbol\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"name\": \"borks\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"owner\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"decimals\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"getEliteCount\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"_address\", \"type\": \"address\" } ], \"name\": \"isEliteBorker\", \"outputs\": [ { \"name\": \"\", \"type\": \"bool\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_newGuy\", \"type\": \"address\" } ], \"name\": \"addEliteBorker\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"newOwner\", \"type\": \"address\" } ], \"name\": \"transferOwnership\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_loser\", \"type\": \"address\" } ], \"name\": \"removeEliteBorker\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_name\", \"type\": \"string\" }, { \"name\": \"_price\", \"type\": \"uint256\" }, { \"name\": \"_type\", \"type\": \"string\" }, { \"name\": \"_totalSupply\", \"type\": \"uint256\" }, { \"name\": \"_data\", \"type\": \"int256[]\" } ], \"name\": \"createBork\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" } ]",
  borkJson: "[ { \"constant\": true, \"inputs\": [], \"name\": \"creator\", \"outputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"getApprovalCount\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"name\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"publish\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_decliner\", \"type\": \"address\" } ], \"name\": \"decline\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"name\": \"forSale\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"totalSupply\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"retrieveBorkData\", \"outputs\": [ { \"name\": \"\", \"type\": \"int256[]\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"data_type\", \"outputs\": [ { \"name\": \"\", \"type\": \"string\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"\", \"type\": \"address\" } ], \"name\": \"balances\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"created\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [ { \"name\": \"_owner\", \"type\": \"address\" } ], \"name\": \"balanceOf\", \"outputs\": [ { \"name\": \"balance\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_amount\", \"type\": \"uint256\" }, { \"name\": \"_seller\", \"type\": \"address\" } ], \"name\": \"buy\", \"outputs\": [], \"payable\": true, \"stateMutability\": \"payable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"getDeclineCount\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"price\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_to\", \"type\": \"address\" }, { \"name\": \"_value\", \"type\": \"uint256\" } ], \"name\": \"transfer\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_approver\", \"type\": \"address\" } ], \"name\": \"approve\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [ { \"name\": \"_amount\", \"type\": \"uint256\" } ], \"name\": \"sell\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": false, \"inputs\": [], \"name\": \"cancelSale\", \"outputs\": [], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"constant\": true, \"inputs\": [], \"name\": \"getCommitteeCount\", \"outputs\": [ { \"name\": \"\", \"type\": \"uint256\" } ], \"payable\": false, \"stateMutability\": \"view\", \"type\": \"function\" }, { \"inputs\": [ { \"name\": \"_creator\", \"type\": \"address\" }, { \"name\": \"_committee\", \"type\": \"address[]\" }, { \"name\": \"_price\", \"type\": \"uint256\" }, { \"name\": \"_type\", \"type\": \"string\" }, { \"name\": \"_name\", \"type\": \"string\" }, { \"name\": \"_totalSupply\", \"type\": \"uint256\" }, { \"name\": \"_data\", \"type\": \"int256[]\" } ], \"payable\": false, \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" } ]"
};

function getBorkCoinContract(web3, callback) {
  let abi;
  let contractAddress;
  let contract;
  let contractInstance;

  web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        abi = mainnet.borkCoinJson;
        contractAddress = mainnet.borkCoinAddress;
        break
      case "3":
        abi = ropsten.borkCoinJson;
        contractAddress = ropsten.borkCoinAddress;
        break
      case "4":
        abi = rinkeby.borkCoinJson;
        contractAddress = rinkeby.borkCoinAddress;
        break
      case "42":
        abi = kovan.borkCoinJson;
        contractAddress = kovan.borkCoinAddress;
        break
      default:
        return callback(new Error('Could not load contract'));
    }

    contract = web3.eth.contract(JSON.parse(abi));
    contractInstance = contract.at(contractAddress);

    return callback(null, {
      abi: abi,
      contractAddress: contractAddress,
      contract: contract,
      contractInstance: contractInstance
    });
  });
}
