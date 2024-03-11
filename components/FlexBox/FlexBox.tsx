import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

interface FlexBoxProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}

export const FlexBox: FC<FlexBoxProps> = (props) => {
  const {children, className, ...otherProps} = props;
  return (
    <div className={cn(className, 'flex')} {...otherProps}>{children}</div>
  )
}