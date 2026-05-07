interface RadialBlurProps {
  className?: string
}

export function RadialBlur({
  className
}: RadialBlurProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        blur-[120px]
        ${className}
      `}
    />
  )
}