"use client";

import { useState, useEffect, useMemo } from "react";
import DatePicker from "@/components/DatePicker";
import NeoTable from "@/components/NeoTable";
import { NeoObject } from "@/lib/types";

export default function HomePage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [objects, setObjects] = useState<NeoObject[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("data changed -> NeoTable rerender");
    if (!startDate || !endDate) return;

    const formattedStart = startDate.toISOString().split("T")[0];
    const formattedEnd = endDate.toISOString().split("T")[0];

    fetch(`/api/neo?start_date=${formattedStart}&end_date=${formattedEnd}`)
      .then((res) => res.json())
      .then((data) => setObjects(data.objects));
  }, [startDate, endDate]);

  const filteredObjects = useMemo(() => {
    if (!search) return objects;

    return objects.filter((obj) => {
      const values = Object.values(obj).join(" ").toLowerCase();
      return values.includes(search.toLowerCase());
    });
  }, [objects, search]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">NASA Dashboard</h1>

      <div className="mb-4 flex gap-4">
        <div>
          <label className="font-semibold mr-2">Start Date:</label>
          <DatePicker selected={startDate} onChange={setStartDate} />
        </div>
        <div>
          <label className="font-semibold mr-2">End Date:</label>
          <DatePicker selected={endDate} onChange={setEndDate} />
        </div>
        <div className="ml-10">
          <label className="font-semibold mr-2">Search:</label>
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search all fields..."
              className="border rounded p-2 w-64"
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl mb-4">
        Total Number of NASA Objects :- {filteredObjects.length}
      </h2>

      <NeoTable data={filteredObjects} />
    </main>
  );
}
