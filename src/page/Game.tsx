import WorkerItem from "../component/WorkerItem"
import { useState } from "react"

type Worker = {
    id: number
    isActive: boolean
}

const Game = () => {
    const [workers, setWorkers] = useState<Worker[]>(
        Array.from({ length: 8 }, (_, i) => ({ id: i, isActive: false }))
    )

    const toggleWorker = (id: number) => {
        setWorkers(prev =>
            prev.map(worker =>
                worker.id === id ? { ...worker, isActive: !worker.isActive } : worker
            )
        )
    }

    return (
        <div className="w-screen h-screen bg-[#dcd9c3] p-8">
            <h1 className="text-4xl text-black mb-4">Usine</h1>
            <div className="grid grid-cols-4 gap-4">
                {workers.map(worker => (
                    <WorkerItem
                        key={worker.id}
                        isActive={worker.isActive}
                        onToggle={() => toggleWorker(worker.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Game