import { NextResponse,NextRequest } from "next/server";

export async function GET(req: NextRequest,context:any) {
    const {params} = context;
    console.log('params :>> ', params);
return NextResponse.json({
    status:200,
    body:{message: "GET /api/posts"}
})

    
}