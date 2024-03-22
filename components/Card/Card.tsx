import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { FlexBox } from "../FlexBox";
import { FlexBoxColumn } from "../FlexBoxColumn";

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface CardHeaderProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}
const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

export interface CardBodyProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}
const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

export interface CardFooterProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}

const CardFooter: FC<CardFooterProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

export interface CardProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}

export const Card: FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children, className, ...props }) => {
  return (
    <FlexBoxColumn className={cn('w-full bg-white shadow', className)} {...props}>
      {children}
    </FlexBoxColumn>
  )
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

