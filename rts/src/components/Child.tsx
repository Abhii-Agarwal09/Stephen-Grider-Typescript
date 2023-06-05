interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click me</button> 
      {children}
    </div>
  );
};

// Better approach
/**
 * Child is a React function component
 * Child might have properties assigned to it like propTypes and contextTypes
 * Child will receive props of type ChildProps
 */
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click</button> {children}
    </div>
  );
};
