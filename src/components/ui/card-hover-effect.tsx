import { AnimatePresence, motion } from 'motion/react'
import { useState, useRef } from 'react'
import { useProfessionalCardHover } from '../../hooks/useProfessionalCardHover'
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      }}
      className={className}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          style={{
            position: 'relative',
            display: 'block',
            height: '100%',
            width: '100%',
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                style={{
                  position: 'absolute',
                  inset: 0,
                  height: '100%',
                  width: '100%',
                  background:
                    'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                  borderRadius: '0.75rem',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 212, 170, 0.2)',
                  zIndex: 1,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  style,
}: {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <div
      style={{
        borderRadius: '0.75rem',
        height: '100%',
        width: '100%',
        padding: '1.5rem',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid transparent',
        position: 'relative',
        zIndex: 20,
        transition: 'all 300ms ease',
        backdropFilter: 'blur(8px)',
        ...style,
      }}
      className={className}
    >
      <div style={{ position: 'relative', zIndex: 50 }}>
        <div style={{ padding: '0.5rem' }}>{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
  style,
}: {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <h4
      style={{
        color: '#ffffff',
        fontWeight: 700,
        letterSpacing: '0.05em',
        marginTop: '1rem',
        fontSize: '1.125rem',
        fontFamily: 'var(--font-heading), system-ui',
        ...style,
      }}
      className={className}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
  style,
}: {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <p
      style={{
        marginTop: '1rem',
        color: '#cbd5e0',
        letterSpacing: '0.05em',
        lineHeight: 1.6,
        fontSize: '0.875rem',
        ...style,
      }}
      className={className}
    >
      {children}
    </p>
  )
}

// Generic Card Wrapper with Enhanced Hover
export const EnhancedCard = ({
  children,
  className,
  onClick,
  style,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}) => {
  const {
  isHovered,
  onMouseEnter,
  onMouseLeave,
} = useProfessionalCardHover()
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'relative',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        transition: 'all 300ms ease',
        ...style,
      }}
      className={className}
     onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ y: -8 }}
    >
      {/* Hover Background */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Glow Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '0.75rem',
              opacity: 0.5,
              pointerEvents: 'none',
              zIndex: 5,
              filter: 'blur(12px)',
              background:
                'radial-gradient(circle at center, rgba(0, 212, 170, 0.2), transparent 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 20 }}>{children}</div>
    </motion.div>
  )
}
