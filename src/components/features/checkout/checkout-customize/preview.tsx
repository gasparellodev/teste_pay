import Image from 'next/image'

// import brand from '../../../../../public/brand/iluckpay-icon-black.png'

export function Preview() {
  return (
    <div className="pointer-events-none w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-700">
      <header className="flex justify-center gap-6 bg-zinc-200 p-6">
        {/* <Image src={brand} alt="Brand" className="size-8 object-cover" /> */}
      </header>
      <div className="p-6"></div>
      <div className="p-6">
        <button className="flex h-9 items-center justify-center rounded-lg bg-violet-400 px-3 text-white">
          <div className="h-2 w-32 rounded-full bg-white" />
        </button>
      </div>
    </div>
  )
}