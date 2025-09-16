import { NextResponse } from "next/server";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NASA Dashboard API",
      version: "1.0.0",
      description: "API for fetching Near Earth Objects from NASA",
    },
  },
  apis: ["./app/api/neo/route.ts"],
};

const openapiSpec = swaggerJsdoc(options);

export async function GET() {
  return NextResponse.json(openapiSpec);
}
