import Image from "next/image";
import Home from "./home/page"
import { useQuery } from "@tanstack/react-query";

export default async function page() {
  return (
    <div>
      <Home />
    </div>
  );
}
