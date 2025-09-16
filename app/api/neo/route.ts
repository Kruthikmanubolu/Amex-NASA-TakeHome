import { NextRequest, NextResponse } from "next/server";
import { getCache, setCache } from "@/lib/cache";
import { NeoObject } from "@/lib/types";
import { NASAResponse, NasaNeo } from "@/lib/types";

const NASA_API = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = process.env.NASA_API_KEY || "DEMO_KEY";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date") || start_date;

  if (!start_date) {
    return NextResponse.json(
      { error: "start_date is required" },
      { status: 400 },
    );
  }

  const cacheKey = `${start_date}_${end_date}`;
  const cached = getCache<NeoObject[]>(cacheKey);
  if (cached) {
    return NextResponse.json({ objects: cached, cached: true });
  }

  try {
    const res = await fetch(
      `${NASA_API}?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`,
    );
    const data: NASAResponse = await res.json();

    const objects: NeoObject[] = Object.values(data.near_earth_objects)
      .flat()
      .map((obj: NasaNeo) => ({
        id: obj.id,
        name: obj.name,
        size: obj.estimated_diameter.meters.estimated_diameter_max,
        velocity:
          obj.close_approach_data[0].relative_velocity.kilometers_per_hour,
        distance: obj.close_approach_data[0].miss_distance.kilometers,
      }));

    setCache(cacheKey, objects);

    return NextResponse.json({ objects, cached: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch NASA data" },
      { status: 500 },
    );
  }
}
