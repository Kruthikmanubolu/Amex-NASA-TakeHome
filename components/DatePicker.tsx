"use client";

import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DatePicker({ selected, onChange }: Props) {
  return (
    <div className="mb-4">
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        className="border p-2 rounded"
      />
    </div>
  );
}
