export default function Loading() {
    return (
        <main className="min-h-screen px-6 py-20 max-w-7x1 mx-auto animate-pulse">
            {/* Header skeleton */}
            < div className="mb-12">
                <div className="h-3 w-24 bg-white/10 rounded-full mb-3" />
                <div className="h-10 w-64 bg-white rounded-full" />
            </div>

            {/* Srarch Bar skeleton */}
            <div className="flex gap-4 mb-10">
                <div className="flex-1 h-12 bg-white/10 rounded-full" />
                <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-12 w-24 bg-white/10 rounded-full" />
                    ))}
                </div>
            </div>

            {/* grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="border border-white/10 rounded-2x1 overflow-hidden bg-white/5">
                        <div className="h-40 bg-white/10" />
                        <div className="p-5 space-y-3">
                            <div className="h-4 w-32 bg-white/10 rounded-full" />
                            <div className="h-3 w-24 bg-white/10 rounded-full" />
                            <div className="h-3 w-20 bg-white/10 rounded-full" />
                            <div className="h-3 w-28 bg-white/10 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}