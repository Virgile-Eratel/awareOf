type Props = {
    isActive: boolean
    onToggle: () => void
}

const WorkerItem = ({ isActive, onToggle }: Props) => {
    return (
        <div
            onClick={onToggle}
            className="relative w-52 h-52 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
            {/* LED */}
            <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full shadow-md border border-white ${
                    isActive ? 'bg-green-500' : 'bg-red-500'
                }`}
            />
            {/* Image */}
            <img
                src="/images/worker.webp"
                alt="worker"
                className={`w-full h-full object-contain ${
                    isActive ? '' : 'grayscale opacity-60'
                }`}
            />
        </div>
    )
}

export default WorkerItem