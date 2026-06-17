import type { ComponentProps, ReactNode } from 'react';

import { Button } from './Chip.styled';

interface Props extends ComponentProps<'button'> {
  children: ReactNode;
}

export function Chip({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}
