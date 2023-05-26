export function Rating({big}: {big: boolean}) {
    return (
        <div className="flex items-center gap-[6px]">
            <div className={`  bg-no-repeat ${big ? 'w-5 h-5 bg-BIG_STAR' : 'bg-PINK_STAR w-3 h-3'}`}></div>
            <div className={`  bg-no-repeat ${big ? 'w-5 h-5 bg-BIG_STAR' : 'bg-PINK_STAR w-3 h-3'}`}></div>
            <div className={`  bg-no-repeat ${big ? 'w-5 h-5 bg-BIG_STAR' : 'bg-PINK_STAR w-3 h-3'}`}></div>
            <div className={`  bg-no-repeat ${big ? 'w-5 h-5 bg-BIG_STAR' : 'bg-PINK_STAR w-3 h-3'}`}></div>
            <div className={`  bg-no-repeat ${big ? 'w-5 h-5 bg-BIG_HOLLOW_STAR' : 'bg-HOLLOW_STAR w-3 h-3 '}`}></div>
        </div>
    )
}