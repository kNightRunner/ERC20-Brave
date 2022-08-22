// // SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Brave is ERC20 {
    constructor(uint256 initialSupply) ERC20("Brave", "KKK") {
        _mint(msg.sender, initialSupply);
    }
}