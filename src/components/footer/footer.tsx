import React from "react";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <div className="pb-4">&copy; {dayjs().format("YYYY")}&emsp;Jasper</div>
  );
}
