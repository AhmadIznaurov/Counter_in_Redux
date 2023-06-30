import React, { useState, useEffect } from "react";
import  c from './ClockOnline.module.css'


function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return (
        <div className={c.clock }>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
    );
}

export default Clock;