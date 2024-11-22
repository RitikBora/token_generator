import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import axios from 'axios';
import { createAssociatedTokenAccountInstruction, createInitializeMetadataPointerInstruction, createInitializeMintInstruction, createMintToInstruction, ExtensionType, getAssociatedTokenAddressSync,

 getMintLen,
 LENGTH_SIZE,
  TOKEN_2022_PROGRAM_ID, 
 TYPE_SIZE,  } from "@solana/spl-token";
 import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";



export const createToken = async({ tokenName , tokenSymbol , tokenImageUrl , tokenInitialSupply ,publicKey , sendTransaction , signTransaction } : { tokenName : string , tokenSymbol : string , tokenImageUrl : string , tokenInitialSupply: string , publicKey : PublicKey | null , sendTransaction : any , signTransaction: any}) =>
    {
        const connection = new Connection("https://api.devnet.solana.com");
       

        if(!publicKey || !signTransaction)
        {
            console.log("Wallet not connected");
            return {success: false};
        }


        try
        {
            
        const mintKeypair = Keypair.generate();

        const metadata = {
            mint : mintKeypair.publicKey,
            name: tokenName,
            symbol: tokenSymbol,
            uri: `https://crypto.ritikboradev.com/api/v1/metadata/${mintKeypair.publicKey}`,
            image: tokenImageUrl,
            additionalMetadata: []
        };


        await axios.post(`https://crypto.ritikboradev.com/api/v1/metadata` , metadata);

    
        
        const mintLen = getMintLen([ExtensionType.MetadataPointer]);
        const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metadata).length;

        
          const associatedToken = getAssociatedTokenAddressSync(
            mintKeypair.publicKey,  
            publicKey,       
            false,
            TOKEN_2022_PROGRAM_ID,       
        );




        const lamports = await connection.getMinimumBalanceForRentExemption(mintLen + metadataLen);

         const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: mintLen,
                lamports,
                programId: TOKEN_2022_PROGRAM_ID,
            }),
            createInitializeMetadataPointerInstruction(mintKeypair.publicKey, publicKey, mintKeypair.publicKey, TOKEN_2022_PROGRAM_ID),
         
             createInitializeMintInstruction(
                mintKeypair.publicKey,
                9, // decimals
                publicKey, // mint authority
                null, // freeze authority
                TOKEN_2022_PROGRAM_ID
            ), 
                createInitializeInstruction({
                programId: TOKEN_2022_PROGRAM_ID,
                mint: mintKeypair.publicKey,
                metadata: mintKeypair.publicKey,
                name: metadata.name,
                symbol: metadata.symbol,
                uri: metadata.uri,
                mintAuthority: publicKey,
                updateAuthority: publicKey,
            }),
              
            createAssociatedTokenAccountInstruction(
                publicKey ,
                associatedToken,
                publicKey,
                mintKeypair.publicKey,
                TOKEN_2022_PROGRAM_ID
            ),

             createMintToInstruction(
                mintKeypair.publicKey , associatedToken , publicKey , Number(tokenInitialSupply) * (10 ** 9) , [] ,TOKEN_2022_PROGRAM_ID
            )
        );

        
        


        transaction.feePayer = publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.partialSign(mintKeypair);
        
        await sendTransaction(transaction , connection );

        return {success : true};

        }catch(err)
        {
            console.log(err);
            return {success : false};
        }

    }
