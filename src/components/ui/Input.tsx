import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, type = 'text', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        'w-full px-4 py-2.5 border rounded-lg transition-all',
                        'text-neutral-900 placeholder:text-neutral-400',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                        'disabled:bg-neutral-50 disabled:cursor-not-allowed',
                        error
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-neutral-300 hover:border-neutral-400',
                        className
                    )}
                    ref={ref}
                    aria-invalid={error ? 'true' : 'false'}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-red-600" role="alert">
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'
export default Input
