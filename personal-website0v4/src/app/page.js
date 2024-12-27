import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <main className="flex flex-col items-center gap-6 text-center">
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <p className="text-9xl font-regular">
                    JOSEPH LIAO
                    <span className="text-8xl font-regular">™</span>
                </p>
            </main>
            <footer className="mt-8">
                <a
                    className="text-blue-600 hover:underline"
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to Next.js
                </a>
            </footer>
        </div>
    );
}
