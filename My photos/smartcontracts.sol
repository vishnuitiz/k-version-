//1. Data Access Control Contract
//Keeps a whitelist of approved users.
//Grants or revokes access to datasets.

pragma solidity ^0.8.0;

contract DataAccess {
    address public owner;
    mapping(address => bool) public approved;

    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function grantAccess(address user) external onlyOwner {
        approved[user] = true;
        emit AccessGranted(user);
    }

    function revokeAccess(address user) external onlyOwner {
        approved[user] = false;
        emit AccessRevoked(user);
    }

    function hasAccess(address user) external view returns (bool) {
        return approved[user];
    }
}


//2. Incentive/Payment Contract
//Uses ERC20 tokens or native ETH to reward contributors.
//Contributors call claimReward after verified contribution.

pragma solidity ^0.8.0;

contract Incentive {
    address public owner;
    mapping(address => uint256) public rewards;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function addReward(address user, uint256 amount) external onlyOwner {
        rewards[user] += amount;
    }

    function claimReward() external {
        uint256 amount = rewards[msg.sender];
        require(amount > 0, "No rewards available");
        rewards[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    receive() external payable {}
}


//3. Audit/Traceability Contract
//Immutable logs of every event.
//Perfect for recording dataset usage or model updates.

pragma solidity ^0.8.0;

contract AuditLog {
    struct LogEntry {
        address user;
        string action;
        uint256 timestamp;
    }

    LogEntry[] public logs;

    event ActionLogged(address indexed user, string action, uint256 timestamp);

    function recordAction(string calldata action) external {
        logs.push(LogEntry(msg.sender, action, block.timestamp));
        emit ActionLogged(msg.sender, action, block.timestamp);
    }

    function getLogs() external view returns (LogEntry[] memory) {
        return logs;
    }
}
