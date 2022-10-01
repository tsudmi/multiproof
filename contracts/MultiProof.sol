// SPDX-License-Identifier: MIT

pragma solidity =0.8.17;

import {MerkleProof} from '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

contract MultiProof {
    function multiProofVerifyCalldata(
        bytes32[] calldata proof,
        bool[] calldata proofFlags,
        bytes32 root,
        bytes32[] calldata leaves
    ) external pure returns (bool) {
        return MerkleProof.multiProofVerifyCalldata(proof, proofFlags, root, leaves);
    }
}
