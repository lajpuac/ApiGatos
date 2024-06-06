'use client';

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Cat {
    id: string;
    url: string;
    height: number;
    width: number;
};

interface Props {
    params: {
        id: string;
    };
};

export default function CatProfile( { params }: Props) {
    const [cat, setCat] = useState<Cat | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get<Cat>(
                    process.env.NEXT_PUBLIC_API_URL + `/${params.id}` ?? ""
                );
                console.log(response.data);
                setCat(response.data)
            } catch (error){
                console.error(error);
            }
        };

        fetchData();
    }, [params.id]);
    return(
        <main>
            <h1 className="text-4xl">Perfil del gato</h1>
            {cat != null && (
                <Image
                    src={cat?.url}
                    height={cat.height}
                    width={cat.width}
                    alt="Gato"
                />
                )
            }
            <h4 className="text-xl">{`ID: ${params.id}`}</h4>
            
        </main>
    )
}