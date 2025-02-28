import type {FunctionComponent, PropsWithChildren, HTMLAttributes, ComponentProps} from 'react'
import React, {forwardRef} from 'react'
import cn from 'classnames'
import {Search} from '@/components/icons/search'
import {CloseCircle} from './icons/marks'

export const Tag: FunctionComponent<PropsWithChildren<{className?: string}>> = ({className, children}) => (
  <div className={cn('px-2 font-light text-xs text-white bg-blue-500 rounded-sm whitespace-nowrap', className)}>
    #{children}
  </div>
)

export const Card: FunctionComponent<PropsWithChildren<{className?: string}>> = ({className, children}) => (
  <div className={cn('w-full p-6 rounded-md shadow-md bg-gray-50', className)}>{children}</div>
)

export const ButtonGhost: FunctionComponent<{className?: string} & HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => <button className={cn('btn', 'text-red-500 bg-white', className)} {...props} />

export const ButtonAsLink: FunctionComponent<{className?: string} & HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => (
  <button
    className={cn('btn', 'h-auto px-0 text-base leading-6 text-blue-400 normal-case bg-transparent', className)}
    {...props}
  />
)

export const ButtonAsIcon: FunctionComponent<{className?: string} & HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => <button className={cn('btn h-auto px-0 bg-transparent focus:outline-none', className)} {...props} />

export const ButtonRound: FunctionComponent<{className?: string} & HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => <button className={cn('btn', 'rounded-md', className)} {...props} />

interface SearchBarProperties {
  search: string
  placeholder: string
  onChange: (text: string) => void
}

export const SearchBar: FunctionComponent<SearchBarProperties> = ({search, placeholder, onChange}) => {
  return (
    <div className="flex text-gray-800 bg-gray-50 container mx-auto border border-gray-200 rounded-md">
      <div className="flex">
        <Search className="w-4 h-4 m-auto fill-current" />
      </div>
      <input
        name="search"
        placeholder={placeholder}
        className="flex-1 h-12 px-5 text-xl bg-transparent rounded-full focus:outline-none"
        onChange={e => onChange(e.target.value)}
        value={search}
      />
    </div>
  )
}

export const Alert: FunctionComponent<{
  className?: string
  error: string
  description: string
}> = ({className, error, description}) => (
  <div className={cn('p-4 rounded-md bg-red-50', className)}>
    <div className="flex">
      <div className="flex-shrink-0">
        <CloseCircle className="w-5 h-5 text-red-500" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">{error}</h3>
        {description && <div className="mt-2 text-sm text-red-700">{description}</div>}
      </div>
    </div>
  </div>
)

export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<'textarea'> & ComponentProps<'input'> & {label?: string; hint?: string; error?: string}
>(function InputField(props, ref) {
  const {name, label, hint, error, type = 'text'} = props

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block ml-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          ref={ref}
          type={type}
          name={name}
          id={name}
          className={cn(
            'block w-full border-gray-300 rounded-md shadow-sm sm:text-sm placeholder-gray-400',
            error ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'
          )}
          {...props}
        />
      ) : (
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          className={cn(
            'block w-full border-gray-300 rounded-md shadow-sm sm:text-sm placeholder-gray-400',
            error ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'
          )}
          {...props}
        />
      )}
      {hint && <p className="mt-1 ml-1 text-xs text-gray-400">{hint}</p>}
      {error && <p className="mt-1 ml-1 text-xs text-red-800">{error}</p>}
    </div>
  )
})

export const Select = forwardRef<
  HTMLSelectElement,
  ComponentProps<'select'> & {label: string; options: {value: string | number; label: string}[]}
>(function SelectField(props, ref) {
  const {name, label, placeholder, options, ...inputProps} = props
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...inputProps}
        id={name}
        name={name}
        ref={ref}
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md invalid:text-gray-400">
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map(({value, label}) => (
          <option key={`option-${value}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
})

export const Title: FunctionComponent<{children: string}> = ({children}) => <h1>{children}</h1>

export const Subtitle: FunctionComponent<{children: string}> = ({children}) => <p className="subtitle">{children}</p>
