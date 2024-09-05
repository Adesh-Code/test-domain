import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest, res: NextResponse) {

    const json = {
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "C0TM36R0SP.com.docnote.dev",
                    "paths": ["*"],
                }
            ]
        }
    };

    return new NextResponse( JSON.stringify(json, null, 1), { status: 200, headers: {
        "content-type": "application/json"
    } });
}