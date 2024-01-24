import hre from "hardhat";

async function main() {
  const petRegistry = await hre.ethers.deployContract("PetRegistry");

  await petRegistry.waitForDeployment();

  console.log(`PetRegistry deployed to: ${petRegistry.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
