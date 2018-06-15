//contract spec
abi = JSON.parse('[{"constant":false,"inputs":[],"name":"abortSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyerApproves","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellerApproves","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"saleStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"arbitrator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disapprove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositFunds","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"cancelSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"buyerAddress","type":"address"},{"name":"sellerAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"SaleCanceled","type":"event"},{"anonymous":false,"inputs":[],"name":"SaleSucceeded","type":"event"},{"anonymous":false,"inputs":[],"name":"BuyerApproved","type":"event"},{"anonymous":false,"inputs":[],"name":"BuyerDisapproved","type":"event"},{"anonymous":false,"inputs":[],"name":"SellerApproved","type":"event"},{"anonymous":false,"inputs":[],"name":"SellerDisapproved","type":"event"},{"anonymous":false,"inputs":[],"name":"FundsDeposited","type":"event"}]');

newContractByteCode = '0x' + '608060405234801561001057600080fd5b50604051604080610b7983398101806040528101908080519060200190929190805190602001909291905050504260048190555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610a61806101186000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303bcf11d146100bf578063063e369a146100d657806308551a531461010557806312424e3f1461015c57806317c288f0146101735780635c474f9e146101a25780636cc6cde1146101cd5780637150d8ae14610224578063ce845d1d1461027b578063dcde0019146102a6578063e2c41dbc146102bd578063e7e10490146102c7575b600080fd5b3480156100cb57600080fd5b506100d46102de565b005b3480156100e257600080fd5b506100eb610371565b604051808215151515815260200191505060405180910390f35b34801561011157600080fd5b5061011a610383565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016857600080fd5b506101716103a9565b005b34801561017f57600080fd5b5061018861059f565b604051808215151515815260200191505060405180910390f35b3480156101ae57600080fd5b506101b76105b2565b6040518082815260200191505060405180910390f35b3480156101d957600080fd5b506101e26105b8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023057600080fd5b506102396105de565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028757600080fd5b50610290610604565b6040518082815260200191505060405180910390f35b3480156102b257600080fd5b506102bb61060a565b005b6102c561074b565b005b3480156102d357600080fd5b506102dc6107e5565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561036f57600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6000809054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561044b576001600060016101000a81548160ff0219169083151502179055507fe2d6d6afb0db325e0661178b673bdde8b5f1a467f67926f76ea330896175e10c60405160405180910390a16104e9565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156104e85760016000806101000a81548160ff0219169083151502179055507f4daaac1e3ca6e5318822bb82fdcd8eab0aca99fa78946ddc770547f99922504e60405160405180910390a15b5b600060019054906101000a900460ff16801561051057506000809054906101000a900460ff165b156105225761051d610963565b61059d565b600060019054906101000a900460ff1615801561054a57506000809054906101000a900460ff165b801561055c575062278d006004540142115b1561059c57600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b600060019054906101000a900460ff1681565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106ab5760008060016101000a81548160ff0219169083151502179055507f88101497c78a5ae6053757b79072b2141375e66871e7938a845ec0ca7f11de0a60405160405180910390a1610749565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156107485760008060006101000a81548160ff0219169083151502179055507ffd215913d5f6b61db3be101ee0c3f3410bd23521d147c9632c0806bf5cbc171260405160405180910390a15b5b565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107a757600080fd5b346003600082825401925050819055507fd2d72fde7537c550b5e85eabb70a65949c78bb66328f56c78ddc8251950a994160405160405180910390a1565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561085a5760008060016101000a81548160ff0219169083151502179055506108cc565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156108cb5760008060006101000a81548160ff0219169083151502179055505b5b600060019054906101000a900460ff161580156108f557506000809054906101000a900460ff16155b15610961577f0943552b21b3bcfb11bcb560653f2703faf49c76ac2a791e285b130c0117678a60405160405180910390a1600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f1935050505015610a305760006003819055507f0151fbf6d2def4666ab0f87412daa4ac6a67e9fa86a50cfbd7b36b16d72705d960405160405180910390a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b600080fd00a165627a7a72305820ea2a5a3583c785c762175a57b2a7067d36bbf2ccf48791d6f764f5c372e604660029000000000000000000000000';

//534fe4a78820c46519028704c48f4785789f42260000000000000000000000001e8e9c1a1b71ff88829b962cfa7190d074343b37';

//buyer address, then 24 zeroes, then seller address
window.addEventListener("load", function() {
	//Check for metamask
	if (typeof web3 !== "undefined") {
		//use metamask provider
		window.web3 = new Web3(web3.currentProvider);
		web3.version.getNetwork((arr, netId) => {
			if (netId !== "3") {
				alert("You need to be on the Ropsten testnet.");
			}
		});
		window.contract = web3.eth.contract(abi);
	} else {
		alert("Web3 client not detected! Install metamask or log in to it!");
	}
});

//TODO: params!! seller, buyer
function deployContract() {
	
	let buyer = document.getElementById("buyer").value;
	buyer = buyer.replace(/^0x/, '');
	
	if (buyer.length < 40) {
		alert("Please provide a valid address for the buyer");
		return;
	}
	
	let seller = document.getElementById("seller").value;
	seller = seller.replace(/^0x/, '');
	
	if (seller.length < 40) {
		alert("Please provide a valid address for the seller");
		return;
	}
	
	//Encode addresses into bytecode
	newContractByteCode = newContractByteCode + buyer + '000000000000000000000000' + seller;
	
	console.log("Need to unlock acct to deploy");
	var pw = "";
	
	web3.personal.unlockAccount(web3.eth.coinbase, pw, (err) => {
		if (err) {
			console.log("Error: " + err);
		}
	});
	
	console.log("Deploying...");
	let newContract = web3.eth.contract(abi);
	newContract.new({from: web3.eth.coinbase, gas: 1000000, data: newContractByteCode}, (error, deployed) => {
		if (!error) {
			if (!deployed.address) {
				document.getElementById("description").innerHTML = "Contract " + deployed.transactionHash + " waiting to be mined...";
			} else {
				document.getElementById("description").innerHTML = "Your contract is at: ";
				document.getElementById("contractlink").innerHTML = "https://ropsten.etherscan.io/address/" + deployed.address;
				document.getElementById("contractlink").setAttribute('href', "https://ropsten.etherscan.io/address/" + deployed.address);
			}
			console.log(deployed.address);
		} else {
			console.log("Deployment error: " + error);
		}
	});
}

function addContract() {
	let contractAddress = document.getElementById("salecontract").value;
	//Load the contract instance
	window.contractInstance = contract.at(contractAddress);
	//Set the event listeners
	window.saleCanceledEvent = contractInstance.SaleCanceled();
	saleCanceledEvent.watch(saleCanceledHandler);
	
	window.saleSucceededEvent = contractInstance.SaleSucceeded();
	saleSucceededEvent.watch(saleSucceededHandler);
	
	window.buyerApprovedEvent = contractInstance.BuyerApproved();
	buyerApprovedEvent.watch(buyerApprovedHandler);
	
	window.buyerDisapprovedEvent = contractInstance.BuyerDisapproved();
	buyerDisapprovedEvent.watch(buyerDisapprovedHandler);
	
	window.sellerApprovedEvent = contractInstance.SellerApproved();
	sellerApprovedEvent.watch(sellerApprovedHandler);
	
	window.sellerDisapprovedEvent = contractInstance.SellerDisapproved();
	sellerDisapprovedEvent.watch(sellerDisapprovedHandler);
	
	window.fundsDepositedEvent = contractInstance.FundsDeposited();
	fundsDepositedEvent.watch(fundsDepositedHandler);
	
	//And run these once to grab the current contract status
	buyerApprovedHandler();
	sellerApprovedHandler();
	fundsDepositedHandler();
	saleStartedHandler();
}

//Contract actions
//Check and warn if user hasn't opened a contract yet
function checkInstance() {
	if (typeof contractInstance === "undefined") {
		alert("You haven't opened a contract yet! Paste the contract address and click Open Contract.");
	}
}

function abortSale() {
	checkInstance();
	contractInstance.abortSale((err) => {
		if (err) {
			alert(err);
		}
	});
}

function approveSale() {
	checkInstance();
	contractInstance.approve((err) => {
		if (err) {
			alert(err);
		}
	});
}

function disapproveSale() {
	checkInstance();
	contractInstance.disapprove((err) => {
		if (err) {
			alert(err);
		}
	});
}

function cancelSale() {
	checkInstance();
	contractInstance.cancelSale((err) => {
		if (err) {
			alert(err);
		}
	});
}

function depositFunds() {
	checkInstance();
	let fundsAmount = document.getElementById("depositamount").value;
	contractInstance.abortSale(fundsAmount, (err) => {
		if (err) {
			alert(err);
		}
	});
}

//Event handlers (update UI)
function saleCanceledHandler() {
	document.getElementById("salebalance").innerHTML = "Sale canceled!";
}

function saleSucceededHandler() {
	document.getElementById("salebalance").innerHTML = "Sale succeeded!";
}

function saleStartedHandler() {
	contractInstance.saleStarted((err, starttime) => {
		if (!err) {
			var date = new Date(starttime*1000);
			// Hours part from the timestamp
			var hours = date.getHours();
			// Minutes part from the timestamp
			var minutes = "0" + date.getMinutes();
			// Seconds part from the timestamp
			var seconds = "0" + date.getSeconds();
								 
			// Will display time in 10:30:23 format
			var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
			
			document.getElementById("salestarted").innerHTML = "Sale started on: " + date + " " + formattedTime;
		}
	});
}

function buyerApprovedHandler() {
	contractInstance.buyerApproves((err, approves) => {
		if (!err) {
			contractInstance.buyer((err, buyer) => {
				if (!err) {
					if (approves) {
						document.getElementById("buyerstatus").innerHTML = "(Buyer) " + buyer +": Agrees";
					} else {
						document.getElementById("buyerstatus").innerHTML = "(Buyer) " + buyer +": Disagrees";
					}
				}
			});
		}
	});
}

function sellerApprovedHandler() {
	contractInstance.sellerApproves((err, approves) => {
		if (!err) {
			contractInstance.seller((err, seller) => {
				if (!err) {
					if (approves) {
						document.getElementById("sellerstatus").innerHTML = "(Seller) " + seller +": Agrees";
					} else {
						document.getElementById("sellerstatus").innerHTML = "(Seller) " + seller +": Disagrees";
					}
				}
			});
		}
	});
}

function buyerDisapprovedHandler() {
	contractInstance.buyerApproves((err, approves) => {
		if (!err) {
			contractInstance.buyer((err, buyer) => {
				if (!err) {
					if (approves) {
						document.getElementById("buyerstatus").innerHTML = "(Buyer) " + buyer +": Agrees";
					} else {
						document.getElementById("buyerstatus").innerHTML = "(Buyer) " + buyer +": Disagrees";
					}
				}
			});
		}
	});
}

function sellerDisapprovedHandler() {
	contractInstance.sellerApproves((err, approves) => {
		if (!err) {
			contractInstance.seller((err, seller) => {
				if (!err) {
					if (approves) {
						document.getElementById("sellerstatus").innerHTML = "(Seller) " + seller +": Agrees";
					} else {
						document.getElementById("sellerstatus").innerHTML = "(Seller) " + seller +": Disagrees";
					}
				}
			});
		}
	});
}

function fundsDepositedHandler() {
	contractInstance.currentBalance((err, balance) => {
		if (!err) {
			document.getElementById("salebalance").innerHTML = "Sale balance: " + balance/1000000000000000000 + " ETH";
		}
	});
}
