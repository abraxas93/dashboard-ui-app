import { FC } from 'react';
import cn from 'classnames'; 
import cls from './Text.module.css';

type TextProps = {
  title?: string;
  text?: string;
  className?: string;
  size?: TextSize;
}

export type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text: FC<TextProps> = (props) => {

  const { title, text, size = 'm', className } = props;
  const HeaderTag = mapSizeToHeaderTag[size];

  const additionalClasses = [className];

  return (
    <div className={cn(cls.text, additionalClasses)}>
      {title && (
        <HeaderTag>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p>
          {text}
        </p>
      )}
    </div>
  )
}