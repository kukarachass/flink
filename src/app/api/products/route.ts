// src/app/api/products/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category");
    const discount = searchParams.get("discount");
    const search = searchParams.get("search");

    const filters: any = {};

    if (category) filters.category = category;
    if (discount === "true") filters.discount = { gt: 0};
    if (search) filters.name = { contains: search, mode: "insensitive" };

    const products = await prisma.product.findMany({
        where: filters,
    });

    return NextResponse.json(products);
}