import Image from "next/image";
import { useState } from "react";
interface CardProps {
    name: string;
    imageUrl: string;
}

export function Card({name, imageUrl}: CardProps) {
    const [like, setLike] = useState<boolean>(false)

    function handleClick() {
        setLike(!like)
    }

    return (
        <div className="flex flex-col items-center w-56 m-5">
            <h2 className="font-bold text-3xl text-white">{name}</h2>
            <Image src={imageUrl} alt={name} width={200} height={200} >
            </Image>
            <div className="w-full px-2 text-white">
                <button onClick={handleClick}>
                    {like ? "💖 Curtido" : "🤍 Curtir"}
                </button>
            </div>
        </div>
    );
}

