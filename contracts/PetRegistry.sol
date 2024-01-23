// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PetRegistry {
    // Structure to represent pet information
    struct Pet {
        address owner;
        string name;
        string breed;
        string color;
        uint256 age;
        bool isFound;
    }

    // Mapping to store pet information using a unique identifier (e.g., microchip ID)
    mapping(uint256 => Pet) public pets;

    // Event to notify when a new pet is added
    event PetAdded(uint256 microchipId, address owner, string name);

    // Function to add a new pet to the registry
    function addPet(
        uint256 microchipId,
        string memory name,
        string memory breed,
        string memory color,
        uint256 age
    ) external {
        // Ensure the microchip ID is unique
        require(pets[microchipId].owner == address(0), "Microchip ID already registered");

        // Create a new pet object
        Pet storage newPet = pets[microchipId];
        newPet.owner = msg.sender;
        newPet.name = name;
        newPet.breed = breed;
        newPet.color = color;
        newPet.age = age;
        newPet.isFound = false;

        // Emit an event to notify the addition of a new pet
        emit PetAdded(microchipId, msg.sender, name);
    }

    // Function to mark a pet as found (update the status)
    function markAsFound(uint256 microchipId) external {
        // Ensure the caller is the owner of the pet
        require(pets[microchipId].owner == msg.sender, "You are not the owner of this pet");

        // Mark the pet as found
        pets[microchipId].isFound = true;
    }
}
