import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

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
const CardBody: FC<CardBodyProps> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export interface CardFooterProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}

const CardFooter: FC<CardFooterProps> = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

export interface CardProps extends DivProps {
  children: React.ReactNode,
  className?: string,
}

export const Card: FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children }) => {
  return <div className="card">{children}</div>;
};

// Assign subcomponents to the main component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

