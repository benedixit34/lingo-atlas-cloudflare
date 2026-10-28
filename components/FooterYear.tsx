"use client";

import { useEffect, useState } from "react";

/** Renders the current year on the client, matching the original footer script. */
export default function FooterYear() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return <span id="footer-year">{year}</span>;
}
