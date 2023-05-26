
export function Button({title, del, onClick, ...rest}: {title: any; del: boolean; onClick: any}) {
    return (
        <button
            {...rest}
            onClick={onClick}
            className={` font-medium w-full px-36 py-4 rounded-[10px] ${del ? ' bg-BLACK text-PINK' : 'bg-PINK text-BGDARK_700'} `}
        >
            {title}
        </button>
    )
}