import { NextResponse } from "next/server";


export function GET(){
    console.log("pasindu your GET request received");
}

export async function POST(req: Request){
    const message =await req.json();
    console.log(message);
    console.log(message.name);
    console.log(message.position);
    console.log(message.card);
    console.log("pasindu your POST request received");

    return NextResponse.json({message: "Your POST request received successfully"});
}

export function PUT(){
    console.log("pasindu your PUT request received");
}