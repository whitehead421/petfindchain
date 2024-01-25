// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PetRegistry {
    // Structure to represent pet information
    struct Pet {
        address origin;
        address owner;
        uint256 microchipId;
        string name;
        string breed;
        string color;
        string lastSeenLocation;
        uint256 age;
        bool isFound;
    }

    // Contract owner to transfer funds
    address payable public owner;
    // Registered pet count
    uint registeredPetCount;
    // Variables to track pet food purchases
    uint256 public totalPurchases;
    uint256 public totalPaid;
    // Mapping to store pet information using a unique identifier (e.g., microchip ID)
    mapping(uint256 => Pet) public pets;
    // Array for storing all the pets
    Pet[] public allPets;

    // Constructor - set the owner at deployment
    constructor() {
        owner = payable(msg.sender);
    }

    // Event to notify when a new pet is added
    event PetAdded(uint256 microchipId, address owner, string name);
    // Event to notify when pet food is purchased
    event PetFoodPurchased(uint256 amount);

    // Function to add a new pet to the registry
    function addPet(
        uint256 microchipId,
        string calldata name,
        string calldata breed,
        string calldata color,
        string calldata lastSeenLocation,
        uint256 age
    ) external {
        // Ensure the microchip ID is unique
        require(
            pets[microchipId].owner == address(0),
            "Microchip ID already registered"
        );

        // Create a new pet
        Pet memory newPet = Pet(
            tx.origin,
            msg.sender,
            microchipId,
            name,
            breed,
            color,
            lastSeenLocation,
            age,
            false
        );

        // Add the pet to the registry
        pets[microchipId] = newPet;
        // Add the pet to the array of all pets
        allPets.push(newPet);
        // Increment the registered pet count
        registeredPetCount++;

        // Emit an event to notify the addition of a new pet
        emit PetAdded(microchipId, msg.sender, name);
    }

    // Function to mark a pet as found (update the status)
    function markAsFound(uint256 microchipId) external {
        // Ensure the pet with the given ID exists before accessing it
        require(
            pets[microchipId].owner != address(0),
            "Pet with the given microchip ID does not exist"
        );
        // Ensure the caller is the owner of the pet
        require(
            pets[microchipId].owner == msg.sender,
            "You are not the owner of this pet"
        );
        // Ensure the pet is not already marked as found
        require(!pets[microchipId].isFound, "Pet is already marked as found");

        // Mark the pet as found
        pets[microchipId].isFound = true;

        // Update the isFound status in the allPets array
        for (uint i = 0; i < allPets.length; i++) {
            if (allPets[i].microchipId == microchipId) {
                allPets[i].isFound = true;
                break; // Stop the loop once the pet is found and updated
            }
        }
    }

    // Function to get pets
    function getAllPets() external view returns (Pet[] memory) {
        return allPets;
    }

    // Function to buy pet food
    function buyPetFood(uint256 amount) external payable {
        // Ensure the caller is not the owner of the contract
        require(msg.sender != owner, "You are the owner of the contract");
        // Ensure the caller has sent some ether
        require(msg.value > 0, "You need to send some ether");
        // Ensure the sent ether matches the specified amount
        require(
            msg.value == amount,
            "Sent ether does not match the specified amount"
        );
        // Transfer the ether to the owner of the contract

        // Update purchase tracking variables
        totalPurchases++;
        totalPaid += msg.value;
        // Emit an event to notify the purchase of pet food
        emit PetFoodPurchased(msg.value);

        owner.transfer(msg.value);
    }

    // Function to get pet food purchase statistics
    function getPurchaseStatistics()
        external
        view
        returns (uint256 purchases, uint256 totalAmountPaid)
    {
        return (totalPurchases, totalPaid);
    }
}
