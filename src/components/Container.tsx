import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <main className={cn('max-w-[1250px] mx-auto', className)}>{children}</main>
  );
};

export default Container;
