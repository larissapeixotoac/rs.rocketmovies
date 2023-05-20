
export function Button({title, del, ...rest}: {title: any; del: boolean}) {
    return (
        <button
            {...rest}
            className={` font-medium w-full px-36 py-4 rounded-[10px] ${del ? ' bg-BLACK text-PINK' : 'bg-PINK text-BGDARK_700'} `}
        >
            {title}
        </button>
    )
}