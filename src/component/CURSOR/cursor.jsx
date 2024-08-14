import { useEffect, useRef } from "react";

const Cursor = () => {
  const getCursor = (e) => {
    const cursor = document.getElementById("cursor");
    const cursorOutline = document.getElementById("cursor-outline");

    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  };
  useEffect(() => {
    window.addEventListener("mousemove", getCursor);
    return () => window.removeEventListener("mousemove", getCursor);
  }, []);

  return (
    <>
      <div id="cursor" className="relative z-[999] size-4 bg-primary"></div>
      <div id="cursor-outline" className="  w-[30px] h-[30px] border-2 border-treed p-4"></div>
    </>
  );
};

export default Cursor;
