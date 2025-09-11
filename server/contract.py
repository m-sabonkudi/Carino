from web3 import Web3
import os
from dotenv import load_dotenv
import json

load_dotenv()

ONINO_RPC = "https://rpctestnet.onino.io"

web3 = Web3(Web3.HTTPProvider(ONINO_RPC))

CONTRACT_ADDRESS = "0x8A471A793468d85E1BD56fFe7d5A70D3fEa65621"

with open("abi.json", "r") as f:
    abi = json.load(f)

contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=abi)


def get_balance_and_autowithdrawStatus(address):
    if not web3.is_address(address):
        return (False, {"error": "Invalid address.", "code": 400})
    try:
        address = web3.to_checksum_address(address)
        balance = contract.functions.balanceOf(address).call()
        balance_eth = web3.from_wei(balance, 'ether')
        status = contract.functions.getAutoWithdraw(address).call()
    except Exception as e:
        return (False, {"error": str(e), "code": 500})
    else:
        return (True, {"balance": str(balance_eth), "status": status})
    


