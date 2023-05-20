
export function Tag({ title, ...rest}: {title: any}) {
    return (
        <div
            {...rest}
            className=" bg-BGDARK_700 rounded-lg px-4 py-1 font-ff_secondary text-xs text-WHITE_300"
        >
            {title}
        </div>
    )
}