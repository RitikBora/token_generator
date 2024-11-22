import { PublicKey } from "@solana/web3.js";
import axios from "axios";


const devnet_url = "https://solana-devnet.g.alchemy.com/v2/8sOQankwSXTIsoynVjRIHuqJLcsWglVh";
const testnet_url = "https://api.testnet.solana.com";

export const requestSolAirdrop = async( 
    publicKey : PublicKey,
    amount : string,
    type : "DEVNET" | "TESTNET"
) =>
{
    const lamports = Number(amount) * 1e9;
    let isSuccess = true;
    try
    {
        const url = type === 'DEVNET' ? devnet_url : testnet_url;
        
        await axios.post(url, {
            jsonrpc: "2.0",
            id: 1,
            method: "requestAirdrop",
            params: [publicKey.toBase58(), lamports]
        });  

    }catch(err)
    {
        isSuccess = false;
    }

    return({isSuccess});
}

export const submitAirdropRequest = async(type : "DEVNET" | "TESTNET" , solAmount : string , solanaAddress: string) =>{
        let publicKey = null;
        
        if(isNaN(parseFloat(solAmount)))
        {
            return {success : false};
        }


        try
        {
            publicKey = new PublicKey(solanaAddress);
            const {isSuccess} = await requestSolAirdrop(publicKey , solAmount , type);

            if(isSuccess)
            {
                return {success : true};
            }else
            {
                return {success : false};
            }


        }catch(err)
        {
                        return {success : false};
        }

    }