import {motion} from "framer-motion"
import { useEffect, useState } from "react";

export const HoverImages = () =>
{
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

     const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

    return(
        <div className="relative w-full">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Ethereum"
                role="img"
                viewBox="0 0 256 417"
                className="hidden lg:block size-12 absolute -top-10 -left-24 -rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
                style={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                variants={floatingVariant}
                initial="initial"
                animate="animate"
            >
                <path
                    fill="#fff"
                    d="M127.8 0L127 1.85v275.8l.8.8 127-74.8L127.8 0zM127.8 0L0 203.6l127.8 74.8V0zM127.8 301.8l-.4.5v113.6l.4 1.2 127-178-127 62.7zM127.8 417V301.8L0 239.5l127.8 177.5z"
                />
            </motion.svg>

            <motion.svg
                className="hidden lg:block size-12 absolute top-80 -left-32 drop-shadow-[0_16px_24px_rgba(0,0,255,0.35)]"
                style={{
                    x: mousePosition.x * 0.02, // Parallax effect based on mouse position
                    y: mousePosition.y * 0.02,
                }}
                variants={floatingVariant}
                initial="initial"
                animate="animate"
                width="800px"
                height="800px"
                viewBox="0 0 398 400"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <linearGradient id="solana-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00FFA3" />
                        <stop offset="100%" stopColor="#DC1FFF" />
                    </linearGradient>
                    <path
                        d="M64.36 121.6c2.59-3.14 6.45-4.95 10.55-4.95h308.58c3.21 0 4.82 3.87 2.55 6.18l-61.02 61.46a12.98 12.98 0 0 1-10.55 4.95H5.89c-3.21 0-4.82-3.87-2.55-6.18l61.02-61.46ZM333.09 216.77c-2.59-3.14-6.45-4.95-10.55-4.95H13.96c-3.21 0-4.82 3.87-2.55 6.18l61.02 61.46c2.59 3.14 6.45 4.95 10.55 4.95h308.58c3.21 0 4.82-3.87 2.55-6.18l-61.02-61.46ZM64.36 312.39c2.59-3.14 6.45-4.95 10.55-4.95h308.58c3.21 0 4.82 3.87 2.55 6.18l-61.02 61.46a12.98 12.98 0 0 1-10.55 4.95H5.89c-3.21 0-4.82-3.87-2.55-6.18l61.02-61.46Z"
                        fill="url(#solana-gradient)"
                    />
            </motion.svg>

            <motion.svg
                style={{
                    x: mousePosition.x * 0.02, // Parallax effect based on mouse position
                    y: mousePosition.y * 0.02,
                }}
                variants={floatingVariant}
                initial="initial"
                animate="animate"
                className="hidden lg:block size-16 absolute top-96 -right-32  rotate-12 drop-shadow-[0_16px_24px_rgba(160,79,18,0.35)]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16" cy="16" r="16" fill="#26A17B" />
                <path
                    d="M16.83 11.383V9h5.92V6H9.25v3.383h5.581v2.32c-4.248.142-7.459.966-7.459 1.93 0 .963 3.21 1.787 7.459 1.928v6.95h2.581v-6.95c4.249-.142 7.459-.965 7.459-1.928 0-.964-3.21-1.788-7.459-1.93v-.002zm0 3.446v.001c-.329.013-.65.02-.83.02-.18 0-.501-.007-.83-.02v-.001c-3.978-.16-6.95-.86-6.95-1.626 0-.765 2.972-1.466 6.95-1.626v.005c.329-.013.65-.02.83-.02.18 0 .501.007.83.02v-.005c3.977.16 6.95.86 6.95 1.626 0 .765-2.973 1.466-6.95 1.626z"
                    fill="white"
                />
            </motion.svg>

            <motion.svg
                className="hidden lg:block size-14 absolute bottom-20 right-0 rotate-12 drop-shadow-[0_16px_24px_rgba(247,147,20,0.35)]"
                style={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                variants={floatingVariant}
                initial="initial"
                animate="animate"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Bitcoin"
                role="img"
                viewBox="0 0 512 512"
            >
                <rect width="512" height="512" rx="15%" fill="#f7931a" />
                <path
                    fill="#ffffff"
                    d="m391 216c6-43-25-64-68-79l14-55-34-9-13 54-28-7 14-54-35-9-13 56-22-5-47-12-8 36 24 6c14 4 17 14 15 21l-15 63 3 1-3-1-22 89c-2 5-6 11-16 8l-24-6-17 39 68 17-13 57 33 8 14-55 26 6-13 55 34 9 14-56c58 11 102 6 120-46 14-42-1-66-32-82 22-5 39-20 44-49zm-77 108c-11 41-82 20-105 14l19-75c23 6 97 17 86 61zm9-110c-9 39-67 20-87 15l17-68c20 5 81 14 70 53z"
                />
            </motion.svg>
        </div>
    )
}

