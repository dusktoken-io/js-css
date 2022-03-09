const gameAddress = "0xAE6b0eF791CEB94D22E485D5C2F649d1A80AD8B8"
const tokenAddress = "0x652ef77f3b38F4424CcC98AE49ec0EBc38f49476"

const gameABI = [
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getPersonaIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idToPersona",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "rarity",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "race",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "gender",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "class",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "art",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "exp",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "battles",
				"type": "uint16"
			},
			{
				"internalType": "uint32",
				"name": "lastHunt",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "lastBattle",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "age",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "bounty",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "price",
				"type": "uint32"
			},
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [],
		"name": "getMarketSales",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "marketSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			}
		],
		"name": "cancelMarketSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			}
		],
		"name": "marketBuy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "saleToOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [],
		"name": "getBattles",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "bytes",
				"name": "_name",
				"type": "bytes"
			},
			{
				"internalType": "uint8",
				"name": "_race",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_gender",
				"type": "uint8"
			}
		],
		"name": "createPersona",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "nameTaken",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastWithdraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "prefBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lockedBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "enterVault",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [],
		"name": "gameData",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "arts",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "vladsLock",
				"type": "bool"
			},
			{
				"internalType": "uint16",
				"name": "vladsEntrants",
				"type": "uint16"
			},
			{
				"internalType": "uint32",
				"name": "nftCost",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "vamps",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "humans",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "lockedFunds",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "liquidityFunds",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "totalSales",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_monsterLvl",
				"type": "uint256"
			}
		],
		"name": "hunt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bounty",
				"type": "uint256"
			}
		],
		"name": "startBattle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			}
		],
		"name": "endBattle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_enemyId",
				"type": "uint256"
			}
		],
		"name": "enterBattle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"inputs": [],
		"name": "getVladsCastleEntrants",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			}
		],
		"name": "enterVladsCastle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "champion",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"name": "VladsCastleSurvivor",
		"type": "event"
	},
  {
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "NewPersona",
		"type": "event"
	},
  {
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "monster",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "exp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "item",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "keep",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "chance",
				"type": "uint256"
			}
		],
		"name": "HuntResult",
		"type": "event"
	},
  {
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "defender",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "attacker",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bounty",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "chance",
				"type": "uint256"
			}
		],
		"name": "BattleWon",
		"type": "event"
	},
  {
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "SoldOnMarket",
		"type": "event"
	},
  {
		"inputs": [
			{
				"internalType": "uint256",
				"name": "personaId",
				"type": "uint256"
			}
		],
		"name": "getInventory",
		"outputs": [
			{
				"internalType": "uint16[16]",
				"name": "",
				"type": "uint16[16]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
]

const tokenABI = [
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
]

// Get current gas price from Owracle API (wei)
const gasPriceWei = 10000000000; // 5000000000;

// Deployment block of DuskGame
const deploymentBlock = 15864422

const blockExplorer = "https://bscscan.com/"

const loginBtn = document.getElementById("login-btn")
const logged = document.getElementById("logged")
const createVampire = document.getElementById("createVampire")
const createHuman = document.getElementById("createHuman")
const vampCont = document.getElementById("vampCont")
const vampBox = document.getElementById("vampBox")
const vampClose = document.getElementById("vampClose")
const vampApprove = document.getElementById("vampApprove")
const vampAwake = document.getElementById("vampAwake")
const vampNameCheck = document.getElementById("vampNameCheck")
const vampName = document.getElementById("vampName")
const vampFemale = document.getElementById("vampImg")
const vampMale = document.getElementById("vampImg2")
const vampPrevious = document.getElementById("vampImgPrevious")
const vampNext = document.getElementById("vampImgNext")
const vampNFT = document.getElementById("vampNFT")
const nftClose = document.getElementById("nftClose")
const snackbar = document.getElementById("snackbar")
const pveWon = document.getElementById("pveWonCont")
const pveLost = document.getElementById("pveLost")
var pvpList

var readGame = game = readToken = token = null
var gameData
var arts
var gender = race = allowance = balance = 0

// CARROSSEL 
if(pveWon) {
  var carousel = document.querySelector('.carousel__list');
  var cells = carousel.querySelectorAll('.carousel__cell');

  var cellWidth = carousel.offsetWidth;
  var cellHeight = carousel.offsetHeight;
  var cellSize = cellHeight;
  var cellCount = 5;

  var radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
  var theta = 360 / cellCount;

  var selectedIndex = 0;
  const prevButton = document.querySelector('.previous-button');
  prevButton.addEventListener('click', selectPrev);

  const nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', selectNext);
}

async function listNFTs() {
  console.log("ListPersonas")
  let ids = await readGame.getPersonaIds(accounts[0])
  let vamps = humans = html = ""
  for(let i = 0; i < ids.length; i++) {
    let persona = await readGame.idToPersona(ids[i])
    race = ""
    if(persona.race !== 0)
      race = "human"
    let rarity = "basic"
    switch(persona.rarity) {
      case 1:
        rarity = "common"
        break;
      case 2:
        rarity = "rare"
        break;
      case 3:
        rarity = "epic"
        break;
      case 4:
        rarity = "legendary"
        break;
    }
    let age = Math.round((Date.now() - persona.age * 1000) / (1000 * 86400))
    let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
    let pvp = pve = exp = expPercentage = stamina = 0
    let str = dex = int = 10 + (lvl * 3);
    switch(persona.class) {
      case 0:
        str += 10 + (lvl * 3)
        break;
      case 1:
        dex += 10 + (lvl * 3)
        break;
      case 2:
        int += 10 + (lvl * 3)
        break;
    }
    // ********** STR DEX INT adicionar os pontos dos ITENS **************
    html = 
    `<li>
      <a href="nft?${ids[i]}">
        <div class="nft ${race}">
          <div class="nft-line1">
            <div class="line1-wrap">
              <span class="lvl notranslate">LVL<br/>${lvl}</span>
            </div>
            <div class="name">
              <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br/>
              <span class="age">
                <span>${age}</span> years
              </span>
            </div>
            <div class="line1-wrap">
              <span class="rank notranslate">GRADE<br/> img</span>
            </div>
          </div>
          <div class="nft-line3">
            <div class="stats">
              <span class="rarity-wrap">
                <span class="rarity">${rarity}</span>
              </span>
              <span class="str-wrap">
                <span class="str notranslate">${str}
                <span class="stat">STR</span></span>
              </span>
              <span class="dex-wrap">
                <span class="dex notranslate">${dex}
                <span class="stat">DEX</span></span>
              </span>
              <span class="int-wrap">
                <span class="int notranslate">${int}
                <span class="stat">INT</span></span>
              </span>
            </div>
            <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}" />
            <div class="info">
              <span class="info-wrap">
                <ul class="info">
                  <li>ID: #${ids[i]}</li>
                  <li>PVP: ${pvp}</li>
                  <li>---</li>
                  <li>---</li>
                </ul>
              </span>
            </div>
          </div>
          <div class="nft-line4">
            <div class="select-wrap">
              <a href="javascript:selectNFT(${ids[i]})" class="select" id="nft${ids[i]}">Select</a>
            </div>
          </div>
        </div>
      </a>
    </li>`
    if(persona.race == 0) {
      vamps += html
    } else
      humans += html
  }
  vampList = document.getElementById("vampList")
  humansList = document.getElementById("humanList")
  if(vampList) {
    vampList.innerHTML = vamps;
  }
  if(humanList) {
    humanList.innerHTML = humans;
  }
  if(sessionStorage.getItem("selectedNFT")) {
    document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).innerText = "Selected"
    document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).href = "javascript:void(0)"
    document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).style.backgroundColor =  "rgba(0,0,0,.7)"
  }
}

async function listSell() {
  console.log("ListSell")
  let ids = await readGame.getMarketSales()
  let vamps = humans = html = ""
  for(let i = 1; i < ids.length; i++) {
    if(ids[i] != 0) {
      adr1 = new String(await readGame.saleToOwner(ids[i]))
      adr1 = adr1.toLowerCase()
      adr2 = new String(accounts[0])
      adr2 = adr2.toLowerCase()
      if(adr1 === adr2) {
        let persona = await readGame.idToPersona(ids[i])
        if(persona.race != 0)
          race = "human"
        else
          race = ""
        let rarity = "basic"
        switch(persona.rarity) {
          case 1:
            rarity = "common"
            break;
          case 2:
            rarity = "rare"
            break;
          case 3:
            rarity = "epic"
            break;
          case 4:
            rarity = "legendary"
            break;
        }
      console.log("Price => " + persona.price)
      let age = Math.round((Date.now() - persona.age * 1000) / (1000 * 86400))
      let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
      let pvp = pve = exp = expPercentage = stamina = 0
      let str = dex = int = 10 + (lvl * 3);
      switch(persona.class) {
        case 0:
          str += 10 + (lvl * 3)
          break;
        case 1:
          dex += 10 + (lvl * 3)
          break;
        case 2:
          int += 10 + (lvl * 3)
          break;
      }
      // ********** STR DEX INT adicionar os pontos dos ITENS **************
      html = 
      `<li>
          <div class="nft ${race}">
            <div class="nft-line1">
              <div class="line1-wrap">
                <span class="lvl notranslate">LVL<br/>${lvl}</span>
              </div>
              <span class="name">
                <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br/>
                <span class="age"><span>${age}</span> years</span>
              </span>
              <div class="line1-wrap">
                <span class="rank notranslate">GRADE<br/> img</span>
              </div>
            </div>
            <div class="nft-line3">
              <div class="stats">
                <span class="rarity-wrap">
                  <span class="rarity">${rarity}</span>
                </span>
                <span class="str-wrap">
                  <span class="str notranslate">${str}
                    <span class="stat">STR</span>
                  </span>
                </span>
                <span class="dex-wrap">
                  <span class="dex notranslate">${dex}
                    <span class="stat">DEX</span>
                  </span>
                </span>
                <span class="int-wrap">
                  <span class="int notranslate">${int}
                    <span class="stat">INT</span>
                  </span>
                </span>
              </div>
              <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}">
              <div class="info">
                <span class="info-wrap">
                  <ul class="info">
                    <li>PVP: ${pvp}</li>
                    <li>PVE: ${pve}</li>
                    <li>EXP: ${exp}(${expPercentage}%)</li>
                    <li>STAMINA: ${stamina}</li>
                  </ul>
                </span>
              </div>
              <span id="priceValue${ids[i]}" class="priceValue">${persona.price}</span>
            </div>
            <div class="nft-line4">
              <input type="number" id="priceBox${ids[i]}" class="priceBox hide" onkeyup="javascript:checkPrice(${ids[i]})" placeholder="$DUSK" autocomplete="off" required>
                <a href="javascript:sellNFT(${ids[i]})" class="btn btn-pve bountyBtn hide" id="sellNFT${ids[i]}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sell
                </a>
                <a href="javascript:sellCancel(${ids[i]})" class="btn btn-pve bountyBtn" id="cancelSell${ids[i]}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Cancel sale
                </a>
            </div>
          </div>
        </li>`
        if(persona.race == 0) {
          vamps += html
        } else
          humans += html
      }
    }
  }
  ids = await readGame.getPersonaIds(accounts[0])
  html = race = ""
  for(let i = 0; i < ids.length; i++) {
    let persona = await readGame.idToPersona(ids[i])
    if(persona.bounty == 0) {
      if(persona.race != 0)
        race = "human"
      else
        race = ""
      let rarity = "basic"
      switch(persona.rarity) {
        case 1:
          rarity = "common"
          break;
        case 2:
          rarity = "rare"
          break;
        case 3:
          rarity = "epic"
          break;
        case 4:
          rarity = "legendary"
          break;
      }
      let age = Math.round((Date.now() - persona.age * 1000) / (1000 * 86400))
      let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
      let pvp = pve = exp = expPercentage = stamina = 0
      let str = dex = int = 10 + (lvl * 3);
      switch(persona.class) {
        case 0:
          str += 10 + (lvl * 3)
          break;
        case 1:
          dex += 10 + (lvl * 3)
          break;
        case 2:
          int += 10 + (lvl * 3)
          break;
      }
      // ********** STR DEX INT adicionar os pontos dos ITENS **************
      html = 
      `<li>
          <div class="nft ${race}">
            <div class="nft-line1">
              <div class="line1-wrap">
                <span class="lvl notranslate">LVL<br/>${lvl}</span>
              </div>
              <span class="name">
                <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br/>
                <span class="age"><span>${age}</span> years</span>
              </span>
              <div class="line1-wrap">
                <span class="rank notranslate">GRADE<br/> img</span>
              </div>
            </div>
            <div class="nft-line3">
              <div class="stats">
                <span class="rarity-wrap">
                  <span class="rarity">${rarity}</span>
                </span>
                <span class="str-wrap">
                  <span class="str notranslate">${str}
                    <span class="stat">STR</span>
                  </span>
                </span>
                <span class="dex-wrap">
                  <span class="dex notranslate">${dex}
                    <span class="stat">DEX</span>
                  </span>
                </span>
                <span class="int-wrap">
                  <span class="int notranslate">${int}
                    <span class="stat">INT</span>
                  </span>
                </span>
              </div>
              <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}">
              <div class="info">
                <span class="info-wrap">
                  <ul class="info">
                    <li>PVP: ${pvp}</li>
                    <li>PVE: ${pve}</li>
                    <li>EXP: ${exp}(${expPercentage}%)</li>
                    <li>STAMINA: ${stamina}</li>
                  </ul>
                </span>
              </div>
              <span id="priceValue${ids[i]}" class="priceValue invisible"></span>
            </div>
            <div class="nft-line4">
            <input type="number" id="priceBox${ids[i]}" class="priceBox" onkeyup="javascript:checkPrice(${ids[i]})" placeholder="$DUSK" autocomplete="off" required>
              <a href="javascript:sellNFT(${ids[i]})" class="btn btn-pve bountyBtn" id="sellNFT${ids[i]}">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Sell
              </a>
              <a href="javascript:sellCancel(${ids[i]})" class="btn btn-pve bountyBtn hide" id="cancelSell${ids[i]}">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Cancel sale
              </a>
            </div>
          </div>
        </li>`
      if(persona.race == 0) {
        vamps += html
      } else
        humans += html
    }
    vampSell = document.getElementById("vampSell")
    humansSell = document.getElementById("humanSell")
    if(vampSell) {
      vampSell.innerHTML = vamps;
    }
    if(humanSell) {
      humanSell.innerHTML = humans;
    }
  }
}

async function listPVPs(wipe) {
  console.log("ListPVPs")
  let selected
  if(sessionStorage.getItem("selectedNFT"))
    selected = await readGame.idToPersona(sessionStorage.getItem("selectedNFT"))
  let pvpIds = await game.getBattles()
  pvpList = ""
  for(let i = 1; i < pvpIds.length; i++) {
    if(pvpIds[i]["_hex"] != 0) {
      console.log("entrou")
      let address = await readGame.ownerOf(pvpIds[i]["_hex"])
      let ids = await readGame.getPersonaIds(accounts[0])
      let address2
      if(ids.length > 0) {
        address2 = await readGame.ownerOf(ids[0])
      }
      if(address != address2 && sessionStorage.getItem("selectedNFT") != pvpIds[i]) {
        // Get NFT
        let persona = await readGame.idToPersona(pvpIds[i]["_hex"])
        if(persona.bounty > 0) {
          let race = ""
          if(persona.race == 1)
            race = "human"
          let rarity = ""
          switch(persona.rarity) {
            case 1:
              rarity = "common"
              break;
            case 2:
              rarity = "rare"
              break;
            case 3:
              rarity = "epic"
              break;
            case 4:
              rarity = "legendary"
              break;
          }
          let url = "javascript:pvpFight(" + pvpIds[i] + ")"
          let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
          let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)

          let reward = (persona.bounty * 2) - (Math.floor(persona.bounty * 2 / 10))

          let chance = 38;

          // *********** IMPLEMENTAR ITEMS *********************
          if(selected) {
            // Se tem mais PVP (4%)
            if(selected.battles < persona.battles)
              chance += 4;
            console.log("PVP: " + selected.battles + " | " + persona.battles)
            // Se tem mais PVE (2%)
            if(selected.exp > persona.exp)
              chance += 2;
            console.log("PVE: " + selected.exp + " | " + persona.exp)
            // Se é mais raro (2%)
            if(selected.rarity > persona.rarity)
                chance += 2;
            console.log("RARITY: " + selected.rarity + " | " + persona.rarity)
            // Se é mais velho (2%)
            if(selected.age < persona.age)
                chance += 2;
            console.log("AGE: " + selected.age + " | " + persona.age)
            // Se tiver a classe de vantagem (2%)
            // str vs int
            console.log("CLASS: " + selected.class + " | " + persona.class)
            if(selected.class == 0 && persona.class == 2)
                chance += 2;
            // dex vs str
            else if(selected.class == 1 && persona.class == 0)
                chance += 2;
            // int vs dex
            else if(selected.class == 2 && persona.class == 1)
                chance += 2;
          }

          pvpList += 
            `<li>
              <a href="nft?${i}">
                <div class="nft ${race}">
                  <div class="nft-line1">
                    <div class="line1-wrap">
                      <span class="lvl notranslate">LVL<br>${lvl}</span>
                    </div>
                    <span class="name">
                      <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br>
                      <span class="age">${age} years</span>
                    </span>
                    <div class="line1-wrap">
                      <span class="rank notranslate">GRADE<br> img</span>
                    </div>
                  </div>
                  <div class="nft-line3">
                    <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}">
                    <div class="info">
                      <span class="info-wrap">
                        <ul class="info">
                          <li>info1: 123</li>
                          <li>info2: 987</li>
                          <li>info3: 452</li>
                          <li>info3: 8252</li>
                        </ul>
                      </span>
                    </div>
                  <div class="pvpInfo">
                    <span>${chance} %</span>
                    <span>Win rate</span>
                    <span>${reward} D$</span>
                    <span>Reward</span>
                  </div>
                </div>
                <div class="nft-line4">
                  <div class="select-wrap">
                    <a href="${url}" class="select">Attack (${persona.bounty} D$)</a>
                  </div>
                </div>
              </div>
            </a>
          </li>`
        }
      }
    }
  }
  if(wipe)
        document.getElementById("pvpList").innerHTML = '<li>' + 
          document.getElementById("pvpFirst").innerHTML + '</li>' + pvpList
  else 
    document.getElementById("pvpList").innerHTML += pvpList
}

async function listBuy() {
  console.log("ListBuy")
  let sellIds = await game.getMarketSales();
  buyList = ""
  for(let i = 1; i < sellIds.length; i++) {
    console.log("SELL ID => " + sellIds[i])
    if(sellIds[i] != 0) {
      console.log("Entrou")
      adr1 = new String(await readGame.saleToOwner(sellIds[i]))
      adr1 = adr1.toLowerCase()
      adr2 = new String(accounts[0])
      adr2 = adr2.toLowerCase()
      if(adr1 !== adr2) {
        // Get NFT
        let persona = await readGame.idToPersona(sellIds[i])
        let race = ""
        if(persona.race == 1)
          race = "human"
        let rarity = ""
        switch(persona.rarity) {
          case 1:
            rarity = "common"
            break;
          case 2:
            rarity = "rare"
            break;
          case 3:
            rarity = "epic"
            break;
          case 4:
            rarity = "legendary"
            break;
        }
        let url = "javascript:buyNFT(" + sellIds[i] + ")"
        let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
        let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)

        buyList += 
          `<li id="nft-${sellIds[i]}">
            <div class="nft ${race}">
              <div class="nft-line1">
                <div class="line1-wrap">
                  <span class="lvl notranslate">LVL<br>${lvl}</span>
                </div>
                <span class="name">
                  <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br>
                  <span class="age">${age} years</span>
                </span>
                <div class="line1-wrap">
                  <span class="rank notranslate">GRADE<br> img</span>
                </div>
              </div>
              <div class="nft-line3">
                <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}">
              <div class="info">
                <span class="info-wrap">
                  <ul class="info">
                    <li>info1: 123</li>
                    <li>info2: 987</li>
                    <li>info3: 452</li>
                    <li>info3: 8252</li>
                  </ul>
                </span>
              </div>
            </div>
            <div class="nft-line4">
              <div class="select-wrap">
                <a href="${url}" class="select" id="buyNFT${sellIds[i]}">Buy (${persona.price} D$)</a>
                <a href="javascript:approve(${sellIds[i]})" class="btn btn-pve bountyBtn hide" id="buyApproveBtn${sellIds[i]}">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Approve $DUSK
                </a>
              </div>
            </div>
          </div>
        </li>`
      }
    }
  }
  document.getElementById("buyList").innerHTML += buyList
}

async function listed() {
  console.log("Listed")
  let sellIds = await game.getMarketSales();
  buyList = ""
  let counter = 0
  for(let i = sellIds.length - 1; i > 0; i--) {
    if(sellIds[i] != 0 && counter < 4) {
      adr1 = new String(await readGame.saleToOwner(sellIds[i]))
      adr1 = adr1.toLowerCase()
      adr2 = new String(accounts[0])
      adr2 = adr2.toLowerCase()
      if(adr1 !== adr2) {
        // Get NFT
        let persona = await readGame.idToPersona(sellIds[i])
        let race = ""
        if(persona.race == 1)
          race = "human"
        let rarity = "basic"
        switch(persona.rarity) {
          case 1:
            rarity = "common"
            break;
          case 2:
            rarity = "rare"
            break;
          case 3:
            rarity = "epic"
            break;
          case 4:
            rarity = "legendary"
            break;
        }
        let url = "javascript:buyNFT(" + sellIds[i] + ")"
        let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
        let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
        let str = dex = int = 10 + (lvl * 3);
        switch(persona.class) {
          case 0:
            str += 10 + (lvl * 3)
            break;
          case 1:
            dex += 10 + (lvl * 3)
            break;
          case 2:
            int += 10 + (lvl * 3)
            break;
        }
        buyList += 
          `<li>
            <a href="nft?${sellIds[i]}">
            <div class="nft ${race}">
              <div class="nft-line1">
                <div class="line1-wrap">
                  <span class="lvl notranslate">LVL<br>${lvl}</span>
                </div>
                <span class="name">
                  <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br>
                  <span class="age">${age} years</span>
                </span>
                <div class="line1-wrap">
                  <span class="rank notranslate">GRADE<br> img</span>
                </div>
              </div>
              <div class="nft-line3">
              <div class="stats">
                <span class="rarity-wrap">
                  <span class="rarity">${rarity}</span>
                </span>
                <span class="str-wrap">
                  <span class="str notranslate">${str}
                  <span class="stat">STR</span></span>
                </span>
                <span class="dex-wrap">
                  <span class="dex notranslate">${dex}
                  <span class="stat">DEX</span></span>
                </span>
                <span class="int-wrap">
                  <span class="int notranslate">${int}
                  <span class="stat">INT</span></span>
                </span>
              </div>
              <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}" />
              <div class="info">
                <span class="info-wrap">
                  <ul class="info">
                    <li>PVP: ...</li>
                    <li>PVE: ...</li>
                    <li>EXP: ...</li>
                    <li>STAMINA: ...</li>
                  </ul>
                </span>
              </div>
            </div>
              <div class="nft-line4">
                <div class="select-wrap">
                  <a href="${url}" class="select" id="buyNFT${sellIds[i]}">Buy (${persona.price} D$)</a>
                  <a href="javascript:approve(${sellIds[i]})" class="btn btn-pve bountyBtn hide" id="buyApproveBtn${sellIds[i]}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Approve $DUSK
                  </a>
                </div>
              </div>
          </div>
          </a>
        </li>`
        counter++
      }
    }
    document.getElementById("listed-list").innerHTML = buyList
  }
}

async function sold() {
  console.log("Sold")

  var latest = await provider.getBlockNumber()

  var filter = readGame.filters.SoldOnMarket(null, null, null, null)

  var soldIds = []

  var totalVolume = 0
  var highestPrice = 0
  var vampCount = 0
  var humanCount = 0
  var vampAverage = 0
  var humanAverage = 0

  for(i = latest; i >= deploymentBlock; i -= 5000) {
    latest = i - 4999
    if(latest < 0)
      latest = 0
    console.log("Block: " + latest + " to " + i)
    if(filter) {
      soldNFTs = await readGame.queryFilter(filter, latest, i)
      for(j = soldNFTs.length; j >= 0; j--) {
        if(soldNFTs[j]) {

          totalVolume += Number.parseInt(soldNFTs[j].args["price"])

          if(Number.parseInt(soldNFTs[j].args["price"]) > highestPrice)
            highestPrice = Number.parseInt(soldNFTs[j].args["price"])

          if(soldIds.length < 13) {
            let persona = await readGame.idToPersona(soldNFTs[j].args["id"])
            let race = ""

            if(persona.race == 1) {
              race = "human"
              humanCount++
              humanAverage += Number.parseInt(soldNFTs[j].args["price"])
            } else {
              vampCount++
              vampAverage += Number.parseInt(soldNFTs[j].args["price"])
            }

            let rarity = ""

            switch(persona.rarity) {
              case 1:
                rarity = "common"
                break;
              case 2:
                rarity = "rare"
                break;
              case 3:
                rarity = "epic"
                break;
              case 4:
                rarity = "legendary"
                break;
            }
            let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
            let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)

            let sec = Math.floor((Date.now() - (await provider.getBlock(soldNFTs[j].blockNumber)).timestamp * 1000))

            document.getElementById("sold-list").innerHTML += 
            `<li>
              <a href="nft?${soldNFTs[j].args["id"]}">
                <div class="nft ${race}">
                  <div class="nft-line1">
                    <div class="line1-wrap">
                      <span class="lvl notranslate">LVL<br>${lvl}</span>
                    </div>
                    <span class="name">
                      <span class="notranslate">${ethers.utils.parseBytes32String(persona.name)}</span><br>
                      <span class="age">${age} years</span>
                    </span>
                    <div class="line1-wrap">
                      <span class="rank notranslate">GRADE<br> img</span>
                    </div>
                  </div>
                  <div class="nft-line3">
                    <img class="${rarity}" src="${artsJson[persona.race][persona.gender][persona.art]["src"]}">
                    <div class="info">
                      <span class="info-wrap">
                        <ul class="info">
                          <li>info1: 123</li>
                          <li>info2: 987</li>
                          <li>info3: 452</li>
                          <li>info3: 8252</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  </a>
                  <div class="nft-line4">
                    <div class="buysellinfo">
                      <span>
                        <a href="${blockExplorer}address/${soldNFTs[j].args["buyer"]}" target="_blank">
                          <p class="buyer">Buyer:</p> 0x...${soldNFTs[j].args["buyer"].substring(38,42)}
                        </a>
                      </span>
                      <span>
                        <a href="${blockExplorer}address/${soldNFTs[j].args["seller"]}" target="_blank">
                          <p class="seller">Seller:</p> 0x...${soldNFTs[j].args["seller"].substring(38,42)}
                        </a>
                      </span>
                    </div>
                    <div class="timetxinfo">
                      <span>D$ ${ethers.utils.commify(soldNFTs[j].args["price"])}</span>
                      <span class="time">
                        <a href="${blockExplorer}tx/${soldNFTs[j].transactionHash}" target="_blank">
                          ${secondsToDhms(sec, true)} ago
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
            </li>`
          } else if(vampCount < 11 || humanCount < 11) {
            let persona = await readGame.idToPersona(soldNFTs[j].args["id"])

            if(humanCount < 11 && persona.race == 1) {
              humanCount++
              humanAverage += Number.parseInt(soldNFTs[j].args["price"])
            }
            else if(vampCount < 11) {
              vampCount++
              vampAverage += Number.parseInt(soldNFTs[j].args["price"])
            }
          }
        }
      }
    }
  }
  document.getElementById("total-volume").innerText = "D$ " + ethers.utils.commify(totalVolume)
  document.getElementById("highest-price").innerText = "D$ " + ethers.utils.commify(highestPrice)
  if(vampAverage > 0)
    document.getElementById("vamp-average").innerText = "D$ " + ethers.utils.commify(vampAverage / vampCount)
  if(humanAverage > 0)
    document.getElementById("human-average").innerText = "D$ " + ethers.utils.commify(humanAverage / humanCount)
}

function secondsToDhms(seconds, biggest) {
  seconds = Number(seconds / 1000);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  if(biggest) {
    if(dDisplay)
      return dDisplay.slice(0, -2)
    else if(hDisplay)
      return hDisplay.slice(0, -2)
    else if(mDisplay)
      return mDisplay.slice(0, -2)
    else
      return sDisplay
  }
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

async function selectNFT(id) {
  let persona = await readGame.idToPersona(id)
  if(document.getElementById("pveLocation")) {
    if(persona.race != 0)
      document.getElementById("pveNFT").classList.add("human")
    document.getElementById("pveName").innerText = ethers.utils.parseBytes32String(persona.name)
    document.getElementById("pveImg").src = artsJson[persona.race][persona.gender][persona.art]["src"]
    let rarity = "basic"
    switch(persona.rarity) {
      case 1:
        rarity = "common"
        break;
      case 2:
        rarity = "rare"
        break;
      case 3:
        rarity = "epic"
        break;
      case 4:
        rarity = "legendary"
        break;
    }
    document.getElementById("pveImg").classList.add(rarity)
    let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
    let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
    document.getElementById("pveAge").innerText = age
    document.getElementById("pveLvl").innerHTML = "LVL <br>" + lvl
    let nextHunt = Math.floor((Date.now() - ((persona.lastHunt + 60) * 1000 /* 86400 */)))

    if(nextHunt < 0) {
      document.getElementById("nextHunt").innerText = "Next hunt in: " + secondsToDhms(Math.abs(nextHunt))
      o = setInterval(function () {
        nextHunt = Math.floor((Date.now() - ((persona.lastHunt + 60) * 1000 /* 86400 */)))
        document.getElementById("nextHunt").innerText = "Next hunt in: " + secondsToDhms(Math.abs(nextHunt))
        if(nextHunt > 0) {
          document.getElementById("nextHunt").innerText = "Ready to hunt"
          clearInterval(o)
        }
      }, 1000)
    }
    else 
      document.getElementById("nextHunt").innerText = "Ready to hunt"
    document.getElementById("pveLink").href = "nft?" + id
    document.getElementById("pveNFT").classList.remove("hide")
    document.getElementById("pveSelect").classList.add("hide")
  } else if(document.getElementById("vampList") && document.getElementById("nft" + sessionStorage.getItem("selectedNFT"))) {
    if(sessionStorage.getItem("selectedNFT")) {
      document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).innerText = "Select"
      document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).href = "javascript:selectNFT(" + sessionStorage.getItem("selectedNFT") + ")"
      document.getElementById("nft" + sessionStorage.getItem("selectedNFT")).style.background =  
      "radial-gradient(circle, rgba(0,0,0,.5) 0%, rgba(0,0,0,.95) 90%)"
    }
  } else if(document.getElementById("vampNFTsel")){
    vampCont.classList.add("hide")
    vampNFT.classList.add("hide")
    vampNFT.classList.remove("human")
    vampBox.classList.remove("hide")
    vampName.value = ""
    gender = 0
    race = 0
    vampFemale.style.opacity = 1
    vampMale.style.opacity = 0
  } else if(document.getElementById("pvpNFT")) {
    if(sessionStorage.getItem("selectedNFT")) {
      document.getElementById("selectBtnPVP").classList.add("hide")
      let persona = await readGame.idToPersona(id)
      // Se tem bounty
      if(persona.bounty > 0) {
        document.getElementById("bountyBox").classList.add("hide")
        document.getElementById("placeBounty").classList.add("hide")
        document.getElementById("removeBounty").classList.remove("hide")
        document.getElementById("bountyValue").innerText = persona.bounty
        document.getElementById("bountyValue").classList.remove("invisible")
      }
      if(persona.race != 0)
        document.getElementById("pvpNFT").classList.add("human")
      document.getElementById("pvpLink").href = "nft?" + sessionStorage.getItem("selectedNFT")
      document.getElementById("pvpName").innerText = ethers.utils.parseBytes32String(persona.name)
      document.getElementById("pvpImg").src = artsJson[persona.race][persona.gender][persona.art]["src"]
      let rarity = "basic"
      switch(persona.rarity) {
        case 1:
          rarity = "common"
          break;
        case 2:
          rarity = "rare"
          break;
        case 3:
          rarity = "epic"
          break;
        case 4:
          rarity = "legendary"
          break;
      }
      document.getElementById("pvpImg").classList.add(rarity)
      let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
      let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
      document.getElementById("pvpAge").innerText = age
      document.getElementById("pvpLvl").innerHTML = "LVL <br>" + lvl
      document.getElementById("pvpNFT").classList.remove("hide")
    }
  }
  if(document.getElementById("nft" + id)){
    document.getElementById("nft" + id).innerText = "Selected"
    document.getElementById("nft" + id).href = "javascript:void(0)"
    document.getElementById("nft" + id).style.backgroundColor =  "rgba(0,0,0,.7)"
  }
  sessionStorage.setItem("selectedNFT", id)
}

async function newNFT(event) {
  console.log("new NFT")
  vampNameCheck.style.opacity = 0
  if(document.getElementById(event.target.id).classList[1] == "btn-nft-h")
    race = 1;
  if(game) {
    try {
      let txResponse = await game.createPersona(
        ethers.utils.toUtf8Bytes(document.getElementById("vampName").value), 
        race,
        gender, 
        { gasPrice: gasPriceWei, gasLimit: 1200000})
      let txReceipt = await txResponse.wait()

      console.log(txReceipt)

      // Loop through events, args find id
      for(i = 0; i < txReceipt.events.length; i++) {
        if(typeof txReceipt.events[i].args !== "undefined" && typeof txReceipt.events[i].args["id"] !== "undefined")
          id = txReceipt.events[i].args["id"]
      }

      console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
      
      let persona = await readGame.idToPersona(id)

      if(race != 0)
        document.getElementById("vampNFT").classList.add("human")

      let lvl = Math.floor(((persona.exp % 1000) / 10) + 1)
      document.getElementById("vampNFTlvl").innerHTML = "LVL<br>" + lvl

      document.getElementById("vampNFTname").innerText = ethers.utils.parseBytes32String(persona.name)
      document.getElementById("vampNFTimg").src = artsJson[persona.race][persona.gender][persona.art]["src"]
      let rarity = "basic"
      switch(persona.rarity) {
        case 1:
          rarity = "common"
          break;
        case 2:
          rarity = "rare"
          break;
        case 3:
          rarity = "epic"
          break;
        case 4:
          rarity = "legendary"
          break;
      }
      document.getElementById("vampNFTrarity").innerText = rarity
      document.getElementById("vampNFTimg").className = rarity

      let age = Math.floor((Date.now() - persona.age * 1000) / (1000 * 86400))
      document.getElementById("vampNFTage").innerText = age

      document.getElementById("vampNFTsel").href = "javascript:selectNFT(" + id + ")"

      let str = dex = int = 10 + (lvl * 3);
      switch(persona.class) {
        case 0:
          str += 10 + (lvl *3)
          break;
        case 1:
          dex += 10 + (lvl *3)
          break;
        case 2:
          int += 10 + (lvl *3)
          break;
      }
      document.getElementById("vampNFTstr").innerText = str
      document.getElementById("vampNFTdex").innerText = dex
      document.getElementById("vampNFTint").innerText = int
      vampBox.classList.add("hide")
      vampNFT.classList.remove("hide")

      updateBalance()
      updateNFTCount()
      updateRaceCount()
    } catch(e) {
      console.log(e.message)
      return
    }
  }
}

async function approve(id) {
  console.log("Approve")
    if(token) {
        let totalSupply = await token.totalSupply();
        console.log("Total supply: " + ethers.utils.formatUnits(totalSupply, 18))
        let txResponse = await token.approve(gameAddress, totalSupply, { gasPrice: gasPriceWei}) // ethers.utils.parseEther("1.0")
        let txReceipt = await txResponse.wait()
        console.log(txReceipt)
        let allowance = await readToken.allowance(accounts[0], gameAddress)
        console.log("New allowance: " + ethers.utils.formatUnits(allowance, 18))

        // If successfull hide approve button, show awake button
        if(allowance > gameData.nftCost) {
          if(vampApprove) {
            vampApprove.classList.add("hide")
            vampAwake.classList.remove("hide")
            vampAwake.addEventListener("click", checkName)
            vampName.disabled = false
            vampName.addEventListener("keyup", checkName)
            vampName.focus()
          }

          if(document.getElementById("buyApproveBtn" + id)) {
            document.getElementById("buyNFT" + id).classList.remove("hide")
            document.getElementById("buyApproveBtn" + id).classList.add("hide")
          }
      }
    }
}

async function checkName() {
  vampAwake.removeEventListener("click", newNFT)
  vampAwake.addEventListener("click", checkName)
  vampNameCheck.style.opacity = 0
  //check length
  if(vampName.value.length < 3 || vampName.value.length > 15) {
    vampNameCheck.innerText = "Name must have between 3 and 15 characters"
  } else {
    //check allowed characters
    if(!/^[A-Za-z0-9/-]+$/.test(vampName.value)) {
      vampNameCheck.innerText = "Name can only contain alphanumeric characters and dashes"
    } else {
      let taken = await readGame.nameTaken(ethers.utils.formatBytes32String(vampName.value.toLowerCase()))
      if(!taken) {
        vampNameCheck.innerText = "Available"
        vampAwake.removeEventListener("click", checkName)
        vampAwake.addEventListener("click", newNFT)
      } else {
        vampNameCheck.innerText = "Unavailable"
      }
    }
  }
  vampNameCheck.style.opacity = 1
}

async function updateGameVault() {
  lastWithdraw = await readGame.lastWithdraw(accounts[0])
  //let nextWithdraw = new Date((lastWithdraw * 1000) + (5 * 24 * 60 * 60 * 1000)) // 5 dias
  let nextWithdraw = new Date((lastWithdraw * 1000) + (1 * 60 * 1000)) // 1 minuto
  let now = new Date()

  if(now < nextWithdraw) {
    console.log("Não pode sacar ainda")
    // var t = new Date((lastWithdraw * 1000) + (5 * 24 * 60 * 60 * 1000)).getTime()
    var t = new Date((lastWithdraw * 1000) + (1 * 60 * 1000)).getTime()
    o = setInterval(function () {
      let e = new Date().getTime()
      n = t - e;
      (document.getElementById("days").innerText = Math.floor(n / 864e5)),
      (document.getElementById("hours").innerText = Math.floor(
          (n % 864e5) / 36e5
      )),
      (document.getElementById("minutes").innerText = Math.floor(
          (n % 36e5) / 6e4
      )),
      (document.getElementById("seconds").innerText = Math.floor(
          (n % 6e4) / 1e3
      )),
      n < 0 &&
          ((
            document.getElementById("withdraw-counter").style.display = "none",
            document.getElementById("withdrawAmount").style.display = "flex",
            document.getElementById("vaultBtn").addEventListener("click", withdraw)
            ),
          clearInterval(o))
    }, 500);
    document.getElementById("withdraw-counter").style.display = "flex"
    document.getElementById("withdrawAmount").style.display = "none"
  }
  else {
    console.log("Pode sacar")
    document.getElementById("vaultBtn").addEventListener("click", withdraw)
    document.getElementById("withdraw-counter").style.display = "none"
    document.getElementById("withdrawAmount").style.display = "block"
  }

  document.getElementById("withdrawAmount").value = ""

  // Balances
  let inGameBalance = await readGame.balances(accounts[0])
  let lockedBalance = await readGame.lockedBalances(accounts[0])
  document.getElementById("vaultBalance").innerText = ethers.utils.commify(inGameBalance - lockedBalance)
  document.getElementById("vaultLocked").innerText = `(${ethers.utils.commify(lockedBalance)} locked)`
  console.log("PREFERENTIAL BALANCE => " + await readGame.prefBalances(accounts[0]))
  // NFTs
  document.getElementById("vaultNFTs").innerText = await readGame.balanceOf(accounts[0])
  let ids = await readGame.getPersonaIds(accounts[0])
  let vamps = humans = basic = common = rare = epic = legendary = 0
  for(let i = 0; i < ids.length; i++) {
    persona = await readGame.idToPersona(ids[i])
    if(persona.race == 0)
      vamps++
    else
      humans++
    switch(persona.rarity) {
      case 0:
        basic++;
        break;
      case 1:
        common++;
        break;
      case 2:
        rare++;
        break;
      case 3:
        epic++;
        break;
      case 4:
        legendary++;
        break;
    }
  }
  document.getElementById("vaultVamps").innerText = vamps
  document.getElementById("vaultHumans").innerText = humans
  document.getElementById("vaultBasic").innerText = basic
  document.getElementById("vaultCommon").innerText = common
  document.getElementById("vaultRare").innerText = rare
  document.getElementById("vaultEpic").innerText = epic
  document.getElementById("vaultLegendary").innerText = legendary

  /*
  var latest = await provider.getBlockNumber()

  if(sessionStorage.getItem("selectedNFT")) {
    var filter1 = readGame.filters.pveResult(accounts[0], parseInt(sessionStorage.getItem("selectedNFT")), null, null, null, null)
    var filter2 = readGame.filters.pvpResult(null, null, parseInt(sessionStorage.getItem("selectedNFT")), null, null)
  }
  var filter3 = readGame.filters.withdrawBalance(accounts[0], null)

  var hunts
  var battles
  var withdrawals
  
  percorrer todos os blocos desde o bloco de DEPLOYMENT do contrato
  var huntsList = battlesList = withdrawalsList = ""
  var huntsIndex = battlesIndex = withdrawalsIndex = 0
  var initialBlock = 0
  for(i = latest; i >= initialBlock; i-=5000) {
    if(huntsIndex + battlesIndex + withdrawalsIndex > 27)
      break;
    latest = i - 4999
    if(latest < 0)
      latest = 0
    console.log("Block: " + latest + " to " + i)
    if(filter1) {
      hunts = await readGame.queryFilter(filter1, latest, i)
      for(j = hunts.length; j >= 0; j--) {
        if(huntsIndex > 9)
            break;
        if(hunts[j]) {
          huntsList += `<tr><td>${hunts[j].args["reward"]}</td><td>${hunts[j].args["exp"]}</td></tr>`
          huntsIndex++
        }
      }
      document.getElementById("vaultHunts").innerHTML = huntsList
    }
    if(filter2) {
      battles = await readGame.queryFilter(filter2, latest, i)
      for(k = battles.length; k >= 0; k--) {
        if(battlesIndex > 9)
            break;
        if(battles[k]) {
          if(sessionStorage.getItem("selectedNFT") != battles[k].args["defender"])
            enemyId = battles[k].args["defender"]
          else
            enemyId = battles[k].args["attacker"]
          battlesList += `<tr><td>${battles[k].args["reward"]}</td><td>#${enemyId}</td></tr>`
          battlesIndex++
        }
      }
      document.getElementById("vaultBattles").innerHTML = battlesList
    }
    withdrawals = await readGame.queryFilter(filter3, latest, i)
    for(m = withdrawals.length; m >= 0; m--) {
      if(withdrawalsIndex > 9)
          break;
      if(withdrawals[m]) {
        withdrawalsList += `<tr><td>${withdrawals[m].args["amount"]}</td><td>${new Date((await provider.getBlock(withdrawals[m].blockNumber)).timestamp * 1000).toLocaleString()}</td></tr>`
        withdrawalsIndex++
      }
    }
    document.getElementById("vaultWithdrawals").innerHTML = withdrawalsList
  }
  */
}

async function updateBalance() {
  balance = await readToken.balanceOf(accounts[0])
  if(balance) {
    inGameBalance = await readGame.balances(accounts[0])
    inGameBalance = parseInt(inGameBalance)
    balance = parseInt(ethers.utils.formatUnits(balance, 18))
    console.log("Balance: " + balance)
    console.log("In-Game Balance: " + inGameBalance)
    document.getElementById("balance").innerText = "Wallet: D$ " + balance.toLocaleString()
    document.getElementById("inGameBalance").innerText = "In-Game: D$ " + inGameBalance.toLocaleString()
    document.getElementById("balance").href = blockExplorer + "address/" + accounts[0]
  }
}

async function updateNFTCount() {
  nftCount = await readGame.balanceOf(accounts[0])
  console.log("NFT Count: " + nftCount)
  document.getElementById("nftCount").innerText = nftCount
}

async function updateRaceCount() {
  gameData = await readGame.gameData()
  console.log("Liquidity FUNDS => " + gameData.liquidityFunds)
  document.getElementById("vampCount").innerText = gameData.vamps
  document.getElementById("humanCount").innerText = gameData.humans
  document.getElementById("vampCost").innerText = gameData.nftCost + " $DUSK"
  document.getElementById("humanCost").innerText = gameData.nftCost + " $DUSK"
  //let total = parseInt(ethers.utils.formatUnits(await readToken.balanceOf(gameAddress)).slice(0, -2).replace(/\D/g,''),10);
  let total = ethers.utils.formatUnits(await readToken.balanceOf(gameAddress))
  console.log("TOTAL Balance => " + total)
  //let pvp = parseInt(ethers.utils.formatUnits(await readGame.pvpBalance()).replace(/\D/g,''),10);
  //let pvp = ethers.utils.formatUnits(await readGame.pvpBalance())
  locked = gameData.lockedFunds
  console.log("LOCKED Balance => " + locked)
  let n = Math.floor(total - locked)
  document.getElementById("playToEarn").innerText = n.toLocaleString()
}

async function updatePveLocations(index, e) {
  // Buscar monstros (name, img ...)
  const response = await fetch("./json/monsters.json")
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  var monstersJson = await response.json();
  if(e) {
    let str = document.getElementById(e).innerText.split("(")
    console.log(str[0])
    document.getElementById("locSel").innerText = str[0]
  }
  console.log("Update PVE caroussel")
  // Criar a lista de monsters
  if(readGame && sessionStorage.getItem("selectedNFT")) {
    gameData = await readGame.gameData()
    persona = await readGame.idToPersona(sessionStorage.getItem("selectedNFT"))
    var lvl = Math.floor(((persona.exp % 1000) / 10)) + 1
    var minReward = Math.floor(gameData.nftCost / (22 - persona.rarity * 4))
    var maxReward = Math.floor(gameData.nftCost / (18 - persona.rarity * 4))
  } else {
    var lvl = 1;
    var minReward = 0
    var maxReward = 0
  }
    let monsterList = ""
    let rarity = ""
    for(let i = index; i < index + 5; i++) {
      switch(i % 5) {
        case 1:
          rarity = "common";
          break;
        case 2:
          rarity = "rare";
          break;
        case 3:
          rarity = "epic";
          break;
        case 4:
          rarity = "legendary";
          break;
      }
    let chance = 90
    let exp = 10;
    let monsterLvl = (i + 1)
    if(lvl != monsterLvl) {
      if(lvl - Math.floor(lvl / 2) > monsterLvl) {
        chance += ((lvl - Math.floor(lvl / 2)) - monsterLvl) * 2
        if((lvl - monsterLvl) < 10)
          exp -= ((lvl - Math.floor(lvl / 2)) - monsterLvl) * 2
        else
          exp = 0
      } else {
        if(monsterLvl - (lvl - Math.floor(lvl / 2)) < 5)
          chance -= (monsterLvl - (lvl - Math.floor(lvl / 2))) * 20
        else
          chance = 0
        exp += (monsterLvl - (lvl - Math.floor(lvl / 2))) * 4
      }
    } else {
      if(Math.floor(lvl / 2) < 5) {
        chance -= Math.floor(lvl / 2) * 20
        exp += Math.floor(lvl / 2) * 4
      }
      else
        chance = exp = 0
    }
    console.log("CHANCE => " + chance)
    monsterList +=
    `<li class="carousel__cell">
      <span class="song__title notranslate" id="monster${i}">${monstersJson.monsters[i].name}</span>
      <span class="song__artist">
        <img class="${rarity}" src="${monstersJson.monsters[i].img}">
      </span>
      <a href="javascript:pve(${i + 1})" class="btn btn-pve">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Attack
      </a>
      <span class="pveInfo">
          <span id="monster${i}chance">
            Win rate: ${chance}%
          </span>
          <span id="monster${i}reward">
            Reward: ${minReward} - ${maxReward}
          </span>
          <span id="monster${i}exp">
            Experience: ${exp}
          </span>
        </span>
    </li>`
  }

  document.getElementById("monsterList").innerHTML = monsterList
  carousel = document.querySelector('.carousel__list')
  cells = carousel.querySelectorAll('.carousel__cell')

  cellWidth = carousel.offsetWidth
  cellHeight = carousel.offsetHeight
  cellSize = cellHeight
  cellCount = 5

  radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount))
  theta = 360 / cellCount

  selectedIndex = 0
  initCarousel()

  var w = document.documentElement.clientWidth || window.innerWidth
  if (w > 768) {
      let t = document.querySelector("body").getBoundingClientRect(),
      o = (t.left + window.scrollX + t.right) / 2,
      n = (t.top + window.scrollY + t.bottom) / 2
      document.querySelector("body").addEventListener("mousemove", (e) => {
      let t = e.clientX,
          l = e.clientY,
          s = (n - l) / 28,
          r = (o - t) / 28
      document.querySelector(".selected img").style.transform =
          "rotateX(" + s + "deg) rotateY(" + r + "deg) "
      })
  }
}

function checkBounty() {
  if(Number(document.getElementById("bountyBox").value) > gameData.nftCost / 100) {
    if(Number(document.getElementById("bountyBox").value) > balance)
      document.getElementById("bountyBox").value = balance
    var n = parseInt(document.getElementById("bountyBox").value.replace(/\D/g,''),10)
    bountyValue.innerText = n.toLocaleString()
    bountyValue.classList.remove("invisible")
  } else
    bountyValue.innerText = "> " + Math.floor(gameData.nftCost / 100)
  bountyValue.classList.remove("invisible")
}

function checkPrice(id) {
  document.getElementById("priceValue" + id).classList.add("invisible")
  if(document.getElementById("priceBox" + id).value) {
    if(Number(document.getElementById("priceBox" + id).value) > gameData.nftCost / 10) {
      if(Number(document.getElementById("priceBox" + id).value) > balance)
        document.getElementById("priceBox" + id).value = balance
      var n = parseInt(document.getElementById("priceBox" + id).value.replace(/\D/g,''),10)
      document.getElementById("priceValue" + id).innerText = n.toLocaleString()
    } else
      document.getElementById("priceValue" + id).innerText = "> " + Math.floor(gameData.nftCost / 10)
    document.getElementById("priceValue" + id).classList.remove("invisible")
  }
}

async function congrats(owner, champion, reward) {
  persona = await readGame.idToPersona(champion)
  if(persona.race == 0)
    race = "vamp-red"
  else
    race = "human-blue"
  showSnackbar(`Congrats to&nbsp;<span class="${race}">${ethers.utils.parseBytes32String(persona.name)}</span>&nbsp;
  <span style="color:#999">(0x...${owner.substring(38,42)})</span>, for being the last one standing at&nbsp;
  <span class="neutral">Vlad's Castle</span>, and receiving ${ethers.utils.commify(reward)} $DUSK! as reward`, 8000)
}

async function metamaskLogin() {
    console.log("Metamask login")
    try {
        accounts = await ethereum.request({ method: "eth_requestAccounts"})
        chainId = await ethereum.request({ method: 'eth_chainId' })

        // Moralis speedy nodes
        const provider = new ethers.providers.JsonRpcProvider(
          "https://speedy-nodes-nyc.moralis.io/3fae69c248338dfe53a77478/bsc/mainnet");
        readGame = new ethers.Contract(gameAddress, gameABI, provider)
        readToken = new ethers.Contract(tokenAddress, tokenABI, provider)
        
        /*
        provider = new ethers.providers.Web3Provider(window.ethereum)
        readGame = new ethers.Contract(gameAddress, gameABI, provider)
        readToken = new ethers.Contract(tokenAddress, tokenABI, provider)
        */
        
        signer = provider.getSigner()
        game = new ethers.Contract(gameAddress, gameABI, signer)
        token = new ethers.Contract(tokenAddress, tokenABI, signer)
       
        if(chainId !== "0x38") { 
            loginBtn.innerText = "Wrong network on Metamask"
            console.log("Wrong network on Metamask")
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: "0x38" }], 
                })
            } catch(e) {
                if (e.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: "0x38", 
                                chainName: "Smart Chain",
                                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                            },],
                        });
                    } catch (e) {
                        console.log(e.message);
                        return
                    }
                  }
                console.log(e.message)
                return
            }
        } else {
            userAddress = accounts[0]
            logged.innerHTML = "0x..." + accounts[0].substring(38,42) + '<span class="down-arrow notranslate" id="logged-arrow">▼</span>'
            document.getElementById("logged-dropdown").classList.remove("hide")
            loginBtn.removeEventListener("click", this)
            document.getElementById("login-dropdown").classList.add("hide")
            loginBtn.classList.add("hide")

            console.log("Account address: " + accounts[0])

            gameData = await readGame.gameData()

            // Buscar arts (src, by ...)
            const arts = await fetch("../game/json/arts.json") // https://drive.google.com/uc?id=1-ARAU4exNxGWMhNTZh5t6K53oWRXGM2W
            if (!arts.ok) {
              throw new Error(`HTTP error ${arts.status}`)
            }
            artsJson = await arts.json()

            updateBalance()
            updateNFTCount()
            
            allowance = await readToken.allowance(accounts[0], gameAddress)
            if(allowance)
              console.log("Allowance: " + ethers.utils.formatUnits(allowance, 18))

            // listen for vlads castle
            var vladsFilter = readGame.filters.VladsCastleSurvivor(null, null, null)

            readGame.on(vladsFilter, (owner, champion, reward) => {
                congrats(owner, champion, reward)
            })

            /* contract.on("Transfer", (from, to, value, event) => {
              console.log({
                  from: from,
                  to: to,
                  value: value.toNumber(),
                  data: event
              });
            }); */

            // @@@@ AGRUPAR VIEWS DA MESMA PÁGINA EM UM ÚNICO IF (se tem um tem os outros)
            if(document.getElementById("vampCount"))
              updateRaceCount()
            if(createVampire) {
              createVampire.addEventListener("click", () => {
                vampNameCheck.innerText = ""
                vampName.placeholder = "Vampire's name"
                vampName.style.filter = "drop-shadow(0px 0px 5px rgba(255,0,0,.6))"
                vampFemale.src = "https://ik.imagekit.io/dusktoken/Vampires/Female/0_toRCiS0UIwF.png"
                vampMale.src = "https://ik.imagekit.io/dusktoken/Vampires/Male/0_RRfQmp3-4.png"
                document.getElementById("vampImg").style.filter = ""
                document.getElementById("vampImg2").style.filter = ""
                document.getElementById("vampApprove").classList.remove("btn-nft-h")
                document.getElementById("vampApprove").classList.add("btn-nft-v")
                document.getElementById("vampAwake").innerText = "Awake Vampire"
                document.getElementById("vampAwake").classList.remove("btn-nft-h")
                document.getElementById("vampAwake").classList.add("btn-nft-v")
                vampCont.classList.remove("hide")
                vampName.focus()
              })
              createHuman.addEventListener("click", () => {
                vampNameCheck.innerText = ""
                vampName.placeholder = "Slayer's name"
                vampName.style.filter = "drop-shadow(0px 0px 5px rgba(0,0,255,.6))"
                vampFemale.src = "https://ik.imagekit.io/dusktoken/Humans/Female/0_5dUntBI47.png"
                vampMale.src = "https://ik.imagekit.io/dusktoken/Humans/Male/0_urkspFkvB.png"
                document.getElementById("vampImg").style.filter = "brightness(0) drop-shadow(0px 0px 12px rgba(0,0,255,.5))"
                document.getElementById("vampImg2").style.filter = "brightness(0) drop-shadow(0px 0px 12px rgba(0,0,255,.5))"
                document.getElementById("vampApprove").classList.add("btn-nft-h")
                document.getElementById("vampApprove").classList.remove("btn-nft-v")
                document.getElementById("vampAwake").innerText = "Train Slayer"
                document.getElementById("vampAwake").classList.add("btn-nft-h")
                document.getElementById("vampAwake").classList.remove("btn-nft-v")
                vampCont.classList.remove("hide")
                vampName.focus()
              })

              // POPULATE VLADS CASTLE and NFTCOST
              var vlads = await readGame.getVladsCastleEntrants()
              document.getElementById("vladsCount").innerText = vlads.length + "/" + gameData.vladsEntrants

              document.getElementById("vladsReward").innerText = gameData.vladsEntrants * (gameData.nftCost / 10) + " $DUSK"

              document.getElementById("vladsCost").innerText = Math.abs(gameData.nftCost / 10)

              document.getElementById("enterVladsCastle").addEventListener("click", vladsCastle)
            }
            if(vampClose)
              vampClose.addEventListener("click", () => {
                vampCont.classList.add("hide")
                vampNFT.classList.remove("human")
                vampName.value = ""
                gender = 0
                race = 0
                vampFemale.style.opacity = 1
                vampMale.style.opacity = 0

              })
            if(nftClose)
              nftClose.addEventListener("click", () => {
                vampCont.classList.add("hide")
                vampNFT.classList.add("hide")
                vampNFT.classList.remove("human")
                vampBox.classList.remove("hide")
                vampName.value = ""
                gender = 0
                race = 0
                vampFemale.style.opacity = 1
                vampMale.style.opacity = 0
              })
            if(vampApprove)
              vampApprove.addEventListener("click", approve)
            if(vampPrevious)
              vampPrevious.addEventListener("click", () => {
                if (gender == 0) {
                  vampFemale.style.opacity = 0
                  vampMale.style.opacity = 1
                  gender = 1
                }
                else {
                  vampFemale.style.opacity = 1
                  vampMale.style.opacity = 0
                  gender = 0
                }
            })
            if(vampNext)
              vampNext.addEventListener("click", () => {
                if (gender == 0) {
                  vampFemale.style.opacity = 0
                  vampMale.style.opacity = 1
                  gender = 1
                }
                else {
                  vampFemale.style.opacity = 1
                  vampMale.style.opacity = 0
                  gender = 0
                }
              })
            if(allowance > gameData.nftCost) {
              if(vampApprove)
                vampApprove.classList.add("hide")
              if(vampAwake) {
                vampAwake.classList.remove("hide")
                vampAwake.addEventListener("click", checkName)
              }
              if(vampName) {
                vampName.disabled = false
                vampName.addEventListener("keyup", checkName)
              }
            }

            // PVE
            if(pveWon) {
              if(!data) {
                // Buscar monstros (name, img ...)
                const response = await fetch("./json/monsters.json")
                if (!response.ok) {
                  throw new Error(`HTTP error ${response.status}`)
                }
                var data = await response.json()
              }
              
              updatePveLocations(0)
            }

            // PVP
            if(document.getElementById("bountyBox")) {
              listPVPs()
            }

            // BUY
            if(document.getElementById("buyList")) {
              listBuy()
            }

            // GAME VAULT
            if(document.getElementById("vaultBalance")) {
              updateGameVault()
            }

            // NFT PAGE
            if(document.getElementById("nft-cont"))
              nft()

            // Market dashboard
            if(document.getElementById("listed-list")) {
              document.getElementById("total-sales").innerText = gameData.totalSales
              listed()
              sold()
            }

            // Se já tem uma persona selecionada
            if(sessionStorage.getItem("selectedNFT"))
              selectNFT(sessionStorage.getItem("selectedNFT"))
            // Definir usuário como logado durante a sessão
            sessionStorage.setItem("userLoggedIn", true)
            if(document.getElementById("vampList"))
              listNFTs()

            if(document.getElementById("vampSell"))
              listSell()
        }

        if(!accounts)
            return
    } catch(e) {
        console.log(e.message)
        return
    }
}

async function pve(monsterLvl) {
  console.log("PVE battle")
  if(sessionStorage.getItem("selectedNFT")) {
    persona = await readGame.idToPersona(sessionStorage.getItem("selectedNFT"))
    lvl = Math.floor(((persona.exp % 1000) / 10)) + 1
    console.log("Player lvl => " + lvl + " Monster lvl => " + monsterLvl)
    oldBag = await readGame.getInventory(sessionStorage.getItem("selectedNFT"))
    try {
      let txResponse = await game.hunt(
        sessionStorage.getItem("selectedNFT"), 
        monsterLvl, 
        { gasPrice: gasPriceWei, gasLimit: 160000})
      let txReceipt = await txResponse.wait()
      console.log(txReceipt)
      console.log("EXP => " + txReceipt.events[0].args["exp"])
      console.log("Reward => " + txReceipt.events[0].args["reward"])
      console.log("Item => " + txReceipt.events[0].args["item"])
      console.log("KeepItem => " + txReceipt.events[0].args["keep"])
      console.log("Chance => " + txReceipt.events[0].args["chance"])
      newBag = await readGame.getInventory(sessionStorage.getItem("selectedNFT"))
      // Se venceu
      if(txReceipt.events[0].args["exp"] > 0){

        if(txReceipt.events[0].args["keep"]) {
          console.log("New item => " + txReceipt.events[0].args["item"])
          // Comparar as bags e ver qual item mudou 
          itemsJson = await getItems()
          for(let i=0; i<16; i++) {
            console.log("Bag loop")
            if(oldBag[i] != newBag[i]) { // Novo item
              console.log("New item - slot => " + i)
              // Buscar name e img 
              if(persona.race != 0 && i === 9) {
                itemName = itemsJson[1][0][0][i].weapon[persona.class].name
                itemImg = itemsJson[1][0][0][i].weapon[persona.class].img
              }
              else {
                itemName = itemsJson[persona.race][0][0][i].name
                itemImg = itemsJson[persona.race][0][0][i].img
              }
              // Setar name, rarity, img, remover hide
              document.getElementById("pveItemLink").href="nft?" + sessionStorage.getItem("selectedNFT")
              document.getElementById("pveItemName").innerText = itemName
              switch(Math.floor(txReceipt.events[0].args["item"] / 10000)) {
                case 1:
                  rarity = "basic"
                  break
                case 2:
                  rarity = "common"
                  break
                case 3:
                  rarity = "rare"
                  break
                case 4:
                  rarity = "epic"
                  break
                case 5:
                  rarity = "legendary"
                  break
              }
              document.getElementById("pveItemRarity").innerText = "(" + rarity + ")"
              document.getElementById("pveItemImg").src = itemImg

              // STR DEX INT
              switch(Math.floor((txReceipt.events[0].args["item"] % 10000) / 1000)) {
                case 1: // str
                  document.getElementById("pveItem").style.filter = "drop-shadow(0px 0px 16px red)"
                  break
                case 2: // dex
                  document.getElementById("pveItem").style.filter = "drop-shadow(0px 0px 16px green)"
                  break
                case 3: // int
                  document.getElementById("pveItem").style.filter = "drop-shadow(0px 0px 16px blue)"
                  break;
                case 4: // all (vamp black, human white)
                  if(persona.race == 0)
                    document.getElementById("pveItem").style.filter = "drop-shadow(0px 0px 16px #000)"
                  else
                    document.getElementById("pveItem").style.filter = "drop-shadow(0px 0px 16px #fff)"
                  break;
              }

              document.getElementById("pveItem").classList.remove("hide")
              break;
            }
          }
        }

        // Msg vitória (vampiro)
        if(persona.race == 1) {
          pveWon.classList.add("hWon")
        }
        document.getElementById("pveExp").innerText = txReceipt.events[0].args["exp"]
        document.getElementById("pveDusk").innerText = txReceipt.events[0].args["reward"]
        pveWon.style.top = "0"
        setTimeout(() => {
          pveWon.style.top = "-105vh"
        }, 5000)
      } else {
        pveLost.style.height = "100vh"
        setTimeout(() => {
          pveLost.style.height = "0"
        }, 5000)
      }
      console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
      // Atualizar NFT
      selectNFT(sessionStorage.getItem("selectedNFT"))
      // Atualizar PVE info
      updatePveLocations(0)
      updateBalance()
    } catch(e) {
      console.log(e.message)
      return
    }
  }
}

async function pvpCreate() {
  console.log("PVP create")
  console.log(document.getElementById("bountyBox").value)
  if(Number(document.getElementById("bountyBox").value) > gameData.nftCost / 100) {
    let str = document.getElementById("bountyBox").value;
    if(str.includes(".") || str.includes(",") || str.includes("-")) {
      str = str.replace(/[^1-9/-]/g, "")
      document.getElementById("bountyBox").value = str
      var n = parseInt(str.replace(/\D/g,''),10);
      document.getElementById("bountyValue").innerText = n.toLocaleString();
    }
    else {
      try {
        let txResponse = await game.startBattle(
          sessionStorage.getItem("selectedNFT"), 
          document.getElementById("bountyBox").value,
          { gasPrice: gasPriceWei, gasLimit: 200000})
        let txReceipt = await txResponse.wait()
        console.log(txReceipt)
        console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
        // Atualizar NFT
        document.getElementById("bountyBox").classList.add("hide")
        document.getElementById("placeBounty").classList.add("hide")
        document.getElementById("removeBounty").classList.remove("hide")
        document.getElementById("bountyValue").innerText = document.getElementById("bountyBox").value
        document.getElementById("bountyValue").classList.remove("invisible")
        updateBalance()
      } catch(e) {
        console.log(e.message)
        return
      }
    }
  } else
    console.log("Invalid bounty")
}

async function pvpDelete() {
  console.log("PVP delete")
  try {
    let txResponse = await game.endBattle(
      sessionStorage.getItem("selectedNFT"),
      { gasPrice: gasPriceWei, gasLimit: 500000})
    let txReceipt = await txResponse.wait()
    console.log(txReceipt)
    console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
    // Atualizar NFT
    document.getElementById("bountyBox").value = ""
    document.getElementById("bountyBox").classList.remove("hide")
    document.getElementById("placeBounty").classList.remove("hide")
    document.getElementById("removeBounty").classList.add("hide")
    document.getElementById("bountyValue").classList.add("invisible")
    updateBalance()
  } catch(e) {
    console.log(e.message)
    return
  }
}

async function pvpFight(enemyId) {
  console.log("PVP Battle")
  if(sessionStorage.getItem("selectedNFT")) {
    try {
      let txResponse = await game.enterBattle(
        sessionStorage.getItem("selectedNFT"), 
        enemyId,
        { gasPrice: gasPriceWei, gasLimit: 400000})
      let txReceipt = await txResponse.wait()
      console.log(txReceipt)
      let e = 0
      if(txReceipt.events.length > 1)
        e = 3
      console.log("Attacker => " + txReceipt.events[e].args["attacker"])
      console.log("Defender => " + txReceipt.events[e].args["defender"])
      console.log("Reward => " + txReceipt.events[e].args["bounty"])
      console.log("Chance => " + txReceipt.events[e].args["chance"])
      console.log("Winner => " + txReceipt.events[e].args["winner"])
      console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
      updateBalance()
      listPVPs(true)
    } catch(e) {
      console.log(e.message)
      return
    }
  } else
    console.log("No character selected")
}

async function sellNFT(id) {
  console.log("Sell")
  checkPrice(id)
  console.log(document.getElementById("priceBox" + id).value)
  if(Number(document.getElementById("priceBox" + id).value) > gameData.nftCost / 10) {
    let str = document.getElementById("priceBox" + id).value;
    if(str.includes(".") || str.includes(",") || str.includes("-")) {
      str = str.replace(/[^1-9/-]/g, "")
      document.getElementById("priceBox" + id).value = str
      var n = parseInt(str.replace(/\D/g,''),10);
      document.getElementById("priceValue" + id).innerText = n.toLocaleString();
    }
    else {
      try {
        let txResponse = await game.marketSale(id, 
          document.getElementById("priceBox" + id).value,
          { gasPrice: gasPriceWei, gasLimit: 250000})
        let txReceipt = await txResponse.wait()
        console.log(txReceipt)
        console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
        // Atualizar NFT
        document.getElementById("priceBox" + id).classList.add("hide")
        document.getElementById("sellNFT" + id).classList.add("hide")
        document.getElementById("cancelSell" + id).classList.remove("hide")
        document.getElementById("priceValue" + id).innerText = document.getElementById("priceBox" + id).value
        document.getElementById("priceValue" + id).classList.remove("invisible")
      } catch(e) {
        console.log(e.message)
        return
      }
    }
  }
}

async function sellCancel(id) {
  console.log("SELL CANCEL")
  console.log("Id => " + id)
  try {
    let txResponse = await game.cancelMarketSale(
      id,
      { gasPrice: gasPriceWei, gasLimit: 150000})
    let txReceipt = await txResponse.wait()
    console.log(txReceipt)
    console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
    // Atualizar NFT
    document.getElementById("priceBox" + id).value = ""
    document.getElementById("priceBox" + id).classList.remove("hide")
    document.getElementById("sellNFT" + id).classList.remove("hide")
    document.getElementById("cancelSell" + id).classList.add("hide")
    document.getElementById("priceValue" + id).classList.add("invisible")
  } catch(e) {
    console.log(e.message)
    return
  }
}

async function buyNFT(id) {
  let allowance = await readToken.allowance(accounts[0], gameAddress)
  let persona = await readGame.idToPersona(id);
  if(allowance >= persona.price) {
    document.getElementById("buyNFT" + id).classList.remove("hide")
    document.getElementById("buyApproveBtn" + id).classList.add("hide")
    console.log("Buy NFT")
    try {
      let txResponse = await game.marketBuy(
        id,
        { gasPrice: gasPriceWei, gasLimit: 700000})
      let txReceipt = await txResponse.wait()
      console.log(txReceipt)
      console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
      updateBalance()
      updateNFTCount()
      document.getElementById("nft-" + id).classList.add("hide")
      // Informar a compra concluída, link para my-nfts
    } catch(e) {
      console.log(e.message)
      return
    }
  } else {
    document.getElementById("buyNFT" + id).classList.add("hide")
    document.getElementById("buyApproveBtn" + id).classList.remove("hide")
  }
}

async function vladsCastle() {
  // Checar se tem alguma persona selecionada
  if(sessionStorage.getItem("selectedNFT")) {
    // Checar se já não tem alguma Persona registrada

    console.log(await readGame.getVladsCastleEntrants())

    // Caso não tenha
    try {
      let txResponse = await game.enterVladsCastle(
        sessionStorage.getItem("selectedNFT"),
        {gasPrice: gasPriceWei, gasLimit: 600000})
      let txReceipt = await txResponse.wait()
      console.log(txReceipt)
      showSnackbar("You've successfully enter Vlad's Castle using an Blood Bibble!")
      console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))
      let vlads = await readGame.getVladsCastleEntrants()
      document.getElementById("vladsCount").innerText = `${vlads.length}/${gameData.vladsEntrants}`
      updateBalance()
    } catch(e) {
      console.log(e.message)
      return
    }
  } else {
    showSnackbar("No character selected")
  }
  
}

async function withdraw() {
  if(document.getElementById("withdrawAmount").value > 0) {
    contractFunds = await readToken.balanceOf(accounts[0])
    inGameBalance = await readGame.balances(accounts[0])
    prefBalance = await readGame.prefBalances(accounts[0])
    lockedBalance = await readGame.lockedBalances(accounts[0])
    amount = document.getElementById("withdrawAmount").value
    let available = inGameBalance - lockedBalance
    if(amount <= available) {
      console.log("WITHDRAWING " + amount)
      try {
        let txResponse = await game.enterVault(
          amount,
          { gasPrice: gasPriceWei, gasLimit: 100000})
        let txReceipt = await txResponse.wait()
        console.log(txReceipt)
        console.log("Gas used = " + Number(txReceipt.cumulativeGasUsed["_hex"]))

        updateBalance()
        updateGameVault()
      } catch(e) {
        console.log(e.message)
        return
      }
    } else
      console.log("Insuficient funds")
  } else
    console.log("No value")
}

function rotateCarousel() {
    const angle = theta * selectedIndex * -1
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateX(' + -angle + 'deg)'
    
    const cellIndex = selectedIndex < 0 ? (((cellCount - ((selectedIndex * -1)) 
    % cellCount) + cellCount)  % cellCount) : (selectedIndex % cellCount);

    const cells = document.querySelectorAll('.carousel__cell')
    cells.forEach((cell, index) => {
      console.log("CELLINDEX " + cellIndex + " | " + "INDEX " + index)
        if(cellIndex === index) {
            cell.classList.add('selected')
        }
        else {
            if(cell.classList.contains('selected')) {
                cell.classList.remove('selected')
            }
        }
    });
}

function selectPrev() {
    selectedIndex--
    rotateCarousel()
}

function selectNext() {
    selectedIndex++
    rotateCarousel()    
}

function initCarousel() {    
    for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellAngle = theta * i;
        cell.style.transform = 'rotateX(' + -cellAngle + 'deg) translateZ(' + radius + 'px)';
    }

    rotateCarousel();
}

function updateTrans() {
  document.querySelector('.menu2').setAttribute(
      "data-text", document.querySelector('.menu2').innerText)
  document.querySelector('.menu3').setAttribute(
      "data-text", document.querySelector('.menu3').innerText)
  document.querySelector('.menu4').setAttribute(
      "data-text", document.querySelector('.menu4').innerText)
  document.querySelector('.menu5').setAttribute(
      "data-text", document.querySelector('.menu5').innerText)
  document.querySelector('.menu6').setAttribute(
      "data-text", document.querySelector('.menu6').innerText)
  document.querySelector('.menu7').setAttribute(
      "data-text", document.querySelector('.menu7').innerText)
}

function trans(a) {
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i]
      if(option.value == a){
          selectField.selectedIndex = i
          selectField.dispatchEvent(new Event('change'))
          setTimeout(updateTrans, 1000);
          break;
      }
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en', 
      includedLanguages: 'ar,zh-CN,zh-TW,en,fr,de,hi,id,it,ja,ko,pt,es,tr,vi,ru,tl,bn', 
      autoDisplay: false
  }, 'google_translate_element');
}

function changeLanguage(lang) {
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i];
      if(option.value == lang){
      selectField.selectedIndex = i;
      selectField.dispatchEvent(new Event('change'));
      break;
      }
  }
}

async function nft() {
  var id = window.location.search.slice(-1);
  if(id) {
      let persona = await readGame.idToPersona(id)

      if(persona.age != 0) {
        document.getElementById("id").innerText = "#" + id

        document.getElementById("ageValue").innerText = Math.round((Date.now() - persona.age * 1000) / (1000 * 86400))

        if(persona.race != 0) {
          document.getElementById("name-box").style.filter = "drop-shadow(0px 0px 8px blue)"
          document.getElementById("rarity-box").style.filter = "drop-shadow(0px 0px 8px blue)"
          document.getElementById("img").classList.add("human", "noanimation")
        }
        document.getElementById("name").innerHTML = document.getElementById("name").innerHTML + ethers.utils.parseBytes32String(persona.name)
        
        let lvl = Math.floor(((persona.exp % 1000) / 10) + 1);
        document.getElementById("lvlValue").innerText = lvl
        let rarity = "basic"
        switch(persona.rarity) {
          case 1:
            rarity = "common"
            break;
          case 2:
            rarity = "rare"
            break;
          case 3:
            rarity = "epic"
            break;
          case 4:
            rarity = "legendary"
            break;
        }
        document.getElementById("rarity").innerText = rarity

        // STR DEX INT BASIC
        str = dex = int = 10 + (lvl * 3);
        switch(persona.class) {
          case 0:
            str += 10 + (lvl * 3)
            break;
          case 1:
            dex += 10 + (lvl * 3)
            break;
          case 2:
            int += 10 + (lvl * 3)
            break;
        }

        // BASIC STR DEX INT
        document.getElementById("basic-str").innerText = str
        document.getElementById("basic-dex").innerText = dex
        document.getElementById("basic-int").innerText = int
        
        document.getElementById("art").src = artsJson[persona.race][persona.gender][persona.art]["src"]
        document.getElementById("gearImg").src = artsJson[persona.race][persona.gender][persona.art]["src"]
        document.getElementById("artist").innerText = "art by @" + artsJson[persona.race][persona.gender][persona.art]["by"]
        document.getElementById("artist").href = artsJson[persona.race][persona.gender][persona.art]["url"]
        

        document.getElementById("art").classList.add(rarity)

        document.getElementById("pvpValue").innerText = persona.battles

        document.getElementById("nft-cont").classList.remove("hide")

        // ITEMS (BAG)
        itemsJson = await getItems()
        console.log(itemsJson)

        bag = await readGame.getInventory(id)
        console.log(bag)

        if(persona.race != 0) {
          document.getElementById("vampGear").classList.add("hide")
          document.getElementById("humanGear").classList.remove("hide")
        }

        // Percorrer items e popular inventário
        for(let i=0; i<16; i++) {
          let job = persona.class
          // STR DEX INT
          let rarityPts = Math.floor(bag[i] / 10000) * 4
          let itemRarity = "basic"
          switch(Math.floor(bag[i] / 10000)) {
            case 2:
              itemRarity = "common"
              break;
            case 3:
              itemRarity = "rare"
              break;
            case 4:
              itemRarity = "epic"
              break;
            case 5:
              itemRarity = "legendary"
              break;
          }
          switch(Math.floor((bag[i] % 10000) / 1000)) { // Add totalSTR DEX INT
            case 1: // str
              stats = "drop-shadow(0px 0px 4px rgba(255,0,0,.7))"
              statsValue = `${itemRarity} +${rarityPts} STR`
              str += rarityPts
              break
            case 2: // dex
              stats = "drop-shadow(0px 0px 4px rgba(0,255,0,.7))"
              statsValue = `${itemRarity} +${rarityPts} DEX`
              dex += rarityPts
              break
            case 3: // int
              stats = "drop-shadow(0px 0px 4px rgba(0,0,255,.7))"
              statsValue = `${itemRarity} +${rarityPts} INT`
              int += rarityPts
              break;
            case 4: // all (vamp black, human white)
              if(persona.race == 0)
                stats = "drop-shadow(0px 0px 4px rgba(16,16,16,.7))"
              else
                stats = "drop-shadow(0px 0px 4px rgba(255,255,255,.7))"
              statsValue = `${itemRarity} +${rarityPts} ALL`
              str += rarityPts
              dex += rarityPts
              int += rarityPts
              break;
          }
          if(persona.race == 0) {
            let name = itemsJson[0][0][0][i].name
            let img = itemsJson[0][0][0][i].img
            // Se possui item na posição
            if(bag[i] != 0) {
              document.getElementById("vamp" + i).setAttribute("data-title", statsValue)
              document.getElementById("vamp" + i).innerHTML = `<img src=${img}>`
              document.getElementById("vamp" + i).style.filter = stats
              if(i == 5) {
                document.getElementById("vamp5mirror").innerHTML = `<img src=${img}>`
                document.getElementById("vamp5mirror").style.filter = stats
              }
            } else
              break
          } else {
            let name
            let img
            if(i === 9) {
              name = itemsJson[1][0][0][i].weapon[job].name
              img = itemsJson[1][0][0][i].weapon[job].img
            }
            else {
              name = itemsJson[1][0][0][i].name
              img = itemsJson[1][0][0][i].img
            }
            // Se possui item na posição
            if(bag[i] != 0) {
              document.getElementById("human" + i).setAttribute("data-title", statsValue)
              document.getElementById("human" + i).innerHTML = `<img src=${img}>`
              document.getElementById("human" + i).style.filter = stats
            } else
              break
          }
        }

        // STR DEX INT (items added)
        document.getElementById("total-str").innerText = str
        document.getElementById("total-dex").innerText = dex
        document.getElementById("total-int").innerText = int
        // Total habilities
        document.getElementById("total-hab").innerText = str + dex + int
      }
  }
}

async function getItems() {
  // Buscar items (name, img ...)
  const fetchItems = await fetch("./json/items.json")
  if (!fetchItems.ok) {
    throw new Error(`HTTP error ${fetchItems.status}`)
  }
  return await fetchItems.json()
}

function showSnackbar(msg, time, permanent) {
  snackbar.innerHTML = msg
  snackbar.style.height = "16vh"
  if(permanent !== true) {
    if(time)
      setTimeout(() => {snackbar.style.height = "0"}, time)
    else
      setTimeout(() => {snackbar.style.height = "0"}, 4000)
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(updateTrans, 1000);

    window.ethereum.on("accountsChanged", () => {
      sessionStorage.clear()
      document.location.reload(true)
    })

    window.ethereum.on("chainChanged", () => {
      sessionStorage.clear()
      document.location.reload(true)
    })

    if(pveWon && !sessionStorage.getItem("userLoggedIn"))
      updatePveLocations(0)
      
    // Se o usuário já fez login anteriormente na sessão
    if(sessionStorage.getItem("userLoggedIn")) {
        metamaskLogin()
    } else {
      if (typeof window.ethereum !== 'undefined') {
        console.log("Ativar botão de login")
        if(loginBtn)
          loginBtn.addEventListener("click", metamaskLogin)
      } else {
          loginBtn.innerText = "Install Metamask"
          loginBtn.href = "https://metamask.io/download/"
          loginBtn.target = "_blank"
          console.log("Metamask is not installed")
          return false
      }
    }
})
