A really simple Ethereum escrow smart contract with a lean JS + web3.js GUI. No JQuery! No `solc` required.
The contract contains a bunch of events the client listens to, so you get feedback if you wait a little bit.

You can deploy a new sales contract between two parties with the topmost fields. Set the buyer's address, and the seller's, and you become the arbitrator.

Paste in the address of an existing sales contract and click `Open Contract` to observe its status, and interact with it.

Please, only deploy this contract on testnets. I am in no way responsible if you lose Ethereum. This contract has *not* been audited in any way.
The buyer/seller addresses are appended to the precompiled bytecode by hand.

This Dapp was created for the TIEP1000 course in Jyväskylä University.
