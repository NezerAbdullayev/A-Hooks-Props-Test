import React, {
  useEffect,
  useState,
  ReactNode,
  CSSProperties,
  ElementType,
} from "react";

type BoxProps = {
  visible?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: (visible: boolean) => void;
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Box: React.FC<BoxProps> = ({
  visible = true,
  onShow,
  onHide,
  onToggle,
  as: Tag = "div",
  children,
  className,
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (isVisible) {
      onShow?.();
    } else {
      onHide?.();
    }
    onToggle?.(isVisible);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};
