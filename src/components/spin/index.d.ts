import * as React from "react";
declare const SpinSizes: ["small", "default", "large"];
export declare type SpinSize = typeof SpinSizes[number];
export declare type SpinIndicator = React.ReactElement<HTMLElement>;
export interface SpinProps {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: string;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
}
export interface SpinState {
  spinning?: boolean;
  notCssAnimationSupported?: boolean;
}

declare class Spin extends React.Component<SpinProps, SpinState> {
  static defaultProps: {
    spinning: boolean;
    size: "small" | "large" | "default";
    wrapperClassName: string;
  };
  static setDefaultIndicator(indicator: React.ReactNode): void;
  constructor(props: SpinProps);
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  render(): JSX.Element;
}
