function getWalletBalance(contractInstance, address, callback) {
  contractInstance.balanceOf.call(address, function(error, balance) {
    if (error) {
      return callback(error);
    }

    return callback(null, balance);
  });
}

function addEliteBorker(contractInstance, address, callback) {
  contractInstance.addEliteBorker.call(address, function(error, newGuy) {
    if (error) {
      return callback(error);
    }

    return callback(null, newGuy);
  });
}

function removeEliteBorker(contractInstance, address) {
  contractInstance.removeEliteBorker.call(address, function(error, loser) {
    if (error) {
      return callback(error);
    }

    return callback(null, loser);
  });
}

function createBork(contractInstance, borkName, price, borkType, totalSupply, dataArray) {
  contractInstance.createBork.call(address, function(error, newBork) {
    if (error) {
      return callback(error);
    }

    return callback(null, newBork);
  });
}
