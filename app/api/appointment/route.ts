import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// export async function POST(req:NextRequest){

//     const message =await req.json();
//     console.log(message);
//     console.log(message.surname);
//     console.log(message.lastname);
//     return NextResponse.json({message: "Your Inner POST request received successfully"});

// }

export async function GET(req:NextRequest){

    console.log("pasindu your GET request received");

    const name = req.nextUrl.searchParams.get("name");
    const age = req.nextUrl.searchParams.get("age");
    const designation =req.nextUrl.searchParams.get("designation");

    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Designation: ", designation);

    return NextResponse.json({message:"  Your GET request received successfully"});
}