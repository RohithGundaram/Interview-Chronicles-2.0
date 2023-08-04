import Posts from "@/Models/Posts";
import connectToMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, tags, username, likes, photo} = await request.json();
    await connectToMongoDB();
    await Posts.create({title, description, tags, username, likes, photo});
    return NextResponse.json({message: "post created"}); 
}

