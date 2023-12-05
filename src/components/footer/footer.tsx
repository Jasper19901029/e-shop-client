import React from "react";
import dayjs from "dayjs";

export default function Footer() {
  return <div>&copy; {dayjs().format("YYYY")}&emsp;Jasper</div>;
}
