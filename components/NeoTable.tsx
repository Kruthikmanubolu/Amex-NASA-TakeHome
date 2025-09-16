"use client";

import { useMemo, useState } from "react";
import { NeoObject } from "@/lib/types";

interface Props {
  data?: NeoObject[];
}

export default function NeoTable({ data = [] }: Props) {
  const [sortBy, setSortBy] = useState<"size" | "velocity" | "distance">(
    "size",
  );

  const sorted = useMemo(() => {
    return [...data].sort((a, b) => {
      if (sortBy === "size") return b.size - a.size;
      if (sortBy === "velocity")
        return parseFloat(b.velocity) - parseFloat(a.velocity);
      return parseFloat(a.distance) - parseFloat(b.distance);
    });
  }, [data, sortBy]);

  return (
    <div>
      <div className="mb-2">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "size" | "velocity" | "distance")
          }
          className="border rounded p-1"
        >
          <option value="size">Size (Max - Min)</option>
          <option value="velocity">Velocity (Max - Min)</option>
          <option value="distance">Closeness (Closest - Farthest)</option>
        </select>
      </div>

      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Size (m)</th>
            <th className="border p-2">Velocity (km/h)</th>
            <th className="border p-2">Distance (km)</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((obj) => (
            <tr key={obj.id}>
              <td className="border p-2 text-center">{obj.name}</td>
              <td className="border p-2 text-center">{obj.size.toFixed(2)}</td>
              <td className="border p-2 text-center">
                {parseFloat(obj.velocity).toFixed(0)}
              </td>
              <td className="border p-2 text-center">
                {parseFloat(obj.distance).toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
