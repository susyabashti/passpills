import { useEffect, useState } from "react"
import { NoticeList } from "../lists/notices";

export const Notice = () => {
    const [text, setText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const span = document.getElementById("notice") as HTMLSpanElement;
            span.classList.add("opacity-0");

            const timer = setTimeout(() => {
                setText((prev) => {
                    if(prev + 1 >= NoticeList.length) {
                        return 0;
                    } else {
                        return prev + 1;
                    }
                });
                span.classList.remove("opacity-0");
            }, 600);

            return () => clearTimeout();

        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span id="notice" className="text-sm transition-opacity duration-300 ease-in-out">
            {NoticeList[text]}
        </span>
    )
}