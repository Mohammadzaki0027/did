const express = require("express");
const router = express.Router();
const Identity = require("../models/identity");
const { ethers } = require("ethers");
const { EthrDID } = require("ethr-did");

router.post("/", async (req, res) => {
  const { vehicleNumber } = req.body;

  if (!vehicleNumber) {
    return res.status(400).json({ error: "Vehicle number is required" });
  }

  try {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const provider = new ethers.providers.InfuraProvider(
      "ropsten",
      process.env.INFURA_PROJECT_ID  
    );

    const ethrDid = new EthrDID({
      identifier: wallet.address,
      privateKey: privateKey,
      provider,
    });

    const newIdentity = new Identity({
      vehicleNumber,
      did: ethrDid.did,
      privateKey: privateKey,
    });

    await newIdentity.save();
    res.status(201).json({ vehicleNumber, did: ethrDid.did });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ error: "Vehicle number already exists" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
