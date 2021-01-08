import * as React from "react";
const SpinSizes = ["small", "default", "large"];
export type SpinSize = typeof SpinSizes[number];
export type SpinIndicator = React.ReactElement<HTMLElement>;
interface SpinProps {
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

class Spin extends React.Component<SpinProps, SpinState> {
  static defaultProps: {
    spinning: boolean;
    size: "small" | "large" | "default";
  };

  static setDefaultIndicator(indicator: React.ReactNode) {}

  constructor(props: SpinProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <div>加载中</div>;
  }
}

export default Spin;
