import React from "react";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="mt-30 pb-4">
      &copy; {dayjs().format("YYYY")}&emsp;Jasper
    </footer>
  );
}
