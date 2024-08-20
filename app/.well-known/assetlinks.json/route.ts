import { NextRequest, NextResponse } from "next/server";

export async function GET(res: NextResponse, req : NextRequest) {

    const json = [{
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.example.docnote_mobile",
          sha256_cert_fingerprints:
         ["27:AF:4B:B7:5E:35:EF:AF:63:01:9B:AA:7C:E7:A4:7F:1A:B2:E7:DE:9E:45:71:13:7E:E6:D0:B9:D3:BE:09:4C"]
        }
      }];

    return new NextResponse( JSON.stringify(json, null, 1), { status: 200 });
}