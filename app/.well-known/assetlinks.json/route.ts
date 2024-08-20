import { NextRequest, NextResponse } from "next/server";

export async function GET(res: NextResponse, req : NextRequest) {

    const json = [];

    return new NextResponse( JSON.stringify(json), { status: 200 });
}