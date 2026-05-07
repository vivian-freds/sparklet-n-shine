import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  children,
  className,
  containerClassName
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 lg:py-28',
        className
      )}
    >
      <Container className={containerClassName}>
        <div className='relative z-10'>
          {children}
        </div>
      </Container>
    </section>
  )
}