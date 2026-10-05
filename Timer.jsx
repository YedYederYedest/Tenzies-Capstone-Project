import { useEffect, useState } from "react"

export default function Timer({ gameWon, resetKey }) {
    const [time, setTime] = useState(0)

    useEffect(() => {
        setTime(0)
    }, [resetKey])

    useEffect(() => {
        if (gameWon) return

        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [gameWon, resetKey])

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`
    }

    return (
        <>
        <div className="timer">
            Time: <span className="inducedPanic">{formatTime(time)}</span>
        </div>
        </>
    )
}
