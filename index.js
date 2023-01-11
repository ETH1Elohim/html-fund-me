// in front-end javascript you can't use require()
// import

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else {
        document.getElementById("connectButton").innerHTML =
            "Please install MetaMask!"
    }
}

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}...`)
        if (typeof window.ethereum !== "undefined") {
        // provider / connection to the blockchain
        // signer / wallet / someone with some gas
        // contract that we are interacting with
        // contract ABI & Address
    }
}

// fund function

// withdraw
