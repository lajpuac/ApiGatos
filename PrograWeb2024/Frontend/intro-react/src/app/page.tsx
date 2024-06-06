"use client";

import axios from "axios";
import Button from "./components/Button";
import CatCard from "./components/CatCard";
import { parsedEnv } from "../../parseEnv";
import { useEffect, useState } from "react";

interface Cat {
  id: string;
  url: string;
  height: number;
  width: number;
};

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Cat[]>(
        process.env["NEXT_PUBLIC_API_URL"] + `/search?limit=10` ?? "",
        {
          headers: {
            "x-api-key": process.env["NEXT_PUBLIC_API_KEY"],
          },
        }
      );
      setCats(response.data)
      console.log(response.data);
    };
    fetchData();
  }, []);
  
  const names = ["Pepito", "Pepito2", "Pepito3", "Pepito4"];
  return (
    <main>
      <h1>Listado de Gatos</h1>
      <div>
        {cats.map((cat) => (
           <CatCard 
              key={cat.id} 
              id={cat.id} 
              src={{
                url: cat.url,
                height: cat.height,
                width: cat.width,
              }}
            />
        ))}
      </div>
    </main>
  );
}
