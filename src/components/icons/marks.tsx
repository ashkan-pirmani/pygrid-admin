import type {FunctionComponent} from 'react'
import cn from 'classnames'

const CheckMark: FunctionComponent<{className?: string}> = ({className}) => {
  return (
    <svg viewBox="0 -46 417.81333 417" xmlns="http://www.w3.org/2000/svg" className={cn('inline', className)}>
      <path
        fill="currentColor"
        d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"
      />
    </svg>
  )
}

const XMark: FunctionComponent<{className?: string}> = ({className}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={cn('inline', className)}>
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
    </svg>
  )
}

const Plus: FunctionComponent<{className?: string}> = ({className}) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('inline', className)}>
      <path fill="currentColor" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
    </svg>
  )
}

export {CheckMark, XMark, Plus}
