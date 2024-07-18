import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariant> {
  children: ReactNode
}
// Biblioteca tailwind-variants, importamos o tv e tudo que for igual nos botões usamos em base. Tudo que variar usamos em variants, onde colocamos o nome como primary.
// Usamos o size para definir variantes de tamanho
const buttonVariant = tv({
  base: 'rounded-lg sm:px-5 px-3.5 py-2 font-medium flex items-center gap-2 justify-center',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11',
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }
})
const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariant({ variant, size })} >
      {children}
    </button>);
}

export default Button;