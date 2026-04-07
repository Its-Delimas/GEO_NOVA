export default function loading() {
    return (
        <main className="min-h-screen px-20 py-20 max-w-5x1 mx-auto animate-pulse">
            {/* back button skeleton */}
            <div className="h-4 w-32 bg-white/10 ronded-full mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                {/* flag skeleton */}
                <div className="rounded-2xl bg-white/10 h-64 w-full" />
                {/* Info skeleton */}
                <div className="space-y-4">
                    <div className="h-3 w-24 bg-white/10 rounded/full" />
                    <div className="h-10 w-64 bg-white/10 rounded-full" />
                    <div className="h-3 w-48 bg-white/10 rounded-full mb-8" />

                    <div className="space-y-3 pt-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="h-3 w-24 bg-white/10 rounded-full" />
                                <div className="h-3 w-36 bg-white/10 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* borders skeleton */}
            <div className="h-3 w-32 bg-white/10 rounded-full mb-4" />
            <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 w-16 bg-white/10 rounded-full" />
                ))}
            </div>
        </main>
    );
}