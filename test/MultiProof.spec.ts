import {MerkleTree} from 'merkletreejs'
import keccak256 from 'keccak256'
import {ethers} from 'hardhat';
import {expect} from 'chai'


describe('MultiProof', () => {
    it('does not fail with 9 leaves', async () => {
        const MultiProofFactory = await ethers.getContractFactory('MultiProof')
        const multiProof = await MultiProofFactory.deploy()
        const leaves = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map(keccak256).sort(Buffer.compare)
        const merkleTree = new MerkleTree(leaves, keccak256, {sort: true})

        const root = merkleTree.getRoot()
        const proof = merkleTree.getMultiProof(leaves)
        const proofFlags = merkleTree.getProofFlags(leaves, proof)
        expect(await multiProof.multiProofVerifyCalldata(proof, proofFlags, root, leaves)).to.be.eq(
            true
        )
    })
})
