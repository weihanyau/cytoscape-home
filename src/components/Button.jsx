
import clsx from 'clsx'

const baseStyles = {
  solid: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline: 'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    primary: 'relative overflow-hidden bg-primary-400 text-gray-900 before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-gray-900/10 active:bg-primary-600 active:text-gray-900/80 before:transition-colors',
    complement: 'relative overflow-hidden bg-complement-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-complement-600 active:text-white/80 before:transition-colors',
    white: 'bg-white text-complement-900 hover:bg-white/90 active:bg-white/90 active:text-complement-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    primary: 'border-2 border-primary-500 text-gray-900 font-semibold bg-primary-50 hover:bg-primary-100 active:bg-primary-200 active:text-gray-900/80',
    complement: 'border border-complement-300 text-complement-500 bg-complement-50 hover:border-complement-500 active:bg-complement-100 active:text-complement-500/80',
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <a className={className} {...props} />
  )
}
