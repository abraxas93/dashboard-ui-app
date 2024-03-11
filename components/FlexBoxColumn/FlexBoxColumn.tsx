import { FC } from 'react';
import { FlexBox, FlexBoxProps } from '../FlexBox';
import cn from 'classnames';

export const FlexBoxColumt: FC<FlexBoxProps> = (props) => {
  const { children, className, ...otherProps } = props;
  return <FlexBox className={cn(className, 'flex-col')} {...otherProps}>{children}</FlexBox>
}