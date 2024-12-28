import Image from 'next/image';

export default function Home() {
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        };
        return date.toLocaleString('en-US', options);
    };

    return (
        <div>
            <p className="text-sm font-regular absolute top-5 left-5">
                {' '}
                {formatDate(new Date())}
            </p>
            <p className="text-sm font-regular absolute top-5 right-5">
                RESUME
            </p>

            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <main className="flex flex-col items-center text-center">
                    <p className="text-9xl font-regular">
                        JOSEPH LIAO
                        <span className="text-4xl font-regular">™</span>
                    </p>
                    <p className="text-sm font-regular">
                        Programmer . Artist . Wrestler
                    </p>
                </main>
            </div>
        </div>
    );
}
