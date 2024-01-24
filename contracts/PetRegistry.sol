// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PetRegistry {
    // Structure to represent pet information
    struct Pet {
        address owner;
        uint256 microchipId;
        string name;
        string breed;
        string color;
        uint256 age;
        bool isFound;
    }

    // Registered pet count
    uint registeredPetCount;
    // Mapping to store pet information using a unique identifier (e.g., microchip ID)
    mapping(uint256 => Pet) public pets;
    // Array for storing all the pets
    Pet[] public allPets;

    // Event to notify when a new pet is added
    event PetAdded(uint256 microchipId, address owner, string name);

    // Function to add a new pet to the registry
    function addPet(
        uint256 microchipId,
        string calldata name,
        string calldata breed,
        string calldata color,
        uint256 age
    ) external {
        // Ensure the microchip ID is unique
        require(
            pets[microchipId].owner == address(0),
            "Microchip ID already registered"
        );

        // Create a new pet
        Pet memory newPet = Pet(
            msg.sender,
            microchipId,
            name,
            breed,
            color,
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
    }

    // Function to get pets
    function getAllPets() external view returns (Pet[] memory) {
        return allPets;
    }
}
