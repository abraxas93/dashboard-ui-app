import { FC } from 'react'

type TextProps = {
  title?: string;
  text?: string;
  className?: string;
  size?: TextSize;
  bold?: boolean;
}

export type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text: FC<TextProps> = (props) => {

  const { title, text, size = 'm', className, bold } = props;
  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div>
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