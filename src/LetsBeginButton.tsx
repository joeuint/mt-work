import { Icon } from '@iconify/react'

type Props = {
  className?: string
}

export default function LetsBeginButton({ className = '' }: Props) {
  const base = 'flex items-center w-full justify-between bg-linear-to-r from-[#0D4EB2] to-[#C76BE5] rounded-4xl text-white py-2 px-4 mt-16'
  const cls = `${base} ${className}`.trim()

  return (
    <button className={cls}>
      <span>Let's Begin</span>
      <Icon icon="mdi:arrow-right" inline width={31} height={31} />
    </button>
  )
}

