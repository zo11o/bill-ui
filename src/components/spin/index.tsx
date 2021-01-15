import * as React from "react";
import classNames from "classnames";
import "./style/index.less";

export const tuple = <T extends string[]>(...args: T) => args;
const SpinSizes = tuple("small", "default", "large");

export type SpinSize = typeof SpinSizes[number];
export type SpinIndicator = React.ReactElement<HTMLElement>;

const PRE_FIX_CLS = "ant";

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

let defaultIndicator: React.ReactNode = null;

function renderIndicator(prefixCls: string, props: SpinProps): React.ReactNode {
  const { indicator } = props;
  const dotClassName = `${prefixCls}-dot`;
  if (indicator === null) {
    return null;
  }
  // 做错误判断
  console.log(`${prefixCls}-dot-spin`);

  return (
    <span className={classNames(dotClassName, `${prefixCls}-dot-spin`)}>
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
    </span>
  );
}

function shouldDelay(spinning?: boolean, delay?: number): boolean {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

class Spin extends React.Component<SpinProps, SpinState> {
  static defaultProps: {
    spinning: true;
    size: "default";
    wrapperClassName: "";
  };

  static setDefaultIndicator(indicator: React.ReactNode) {
    defaultIndicator = indicator;
  }

  originalUpdateSpinning: () => void;

  constructor(props: SpinProps) {
    super(props);

    const { spinning, delay } = props;
    const shouldBeDelayed = shouldDelay(spinning, delay);
    this.state = {
      spinning: spinning && !shouldBeDelayed,
    };
    this.originalUpdateSpinning = this.updateSpinning;
  }

  updateSpinning = () => {
    const { spinning } = this.props;

    const { spinning: currentSpinning } = this.state;
    if (currentSpinning !== spinning) {
      this.setState({ spinning });
    }
  };

  // getSnapshotBeforeUpdate() {}

  // componentDidUpdate() {}
  renderSpin = () => {
    const {
      className,
      size,
      tip,
      wrapperClassName,
      style,
      ...restProps
    } = this.props;

    const { spinning } = this.state;
    let _prefix = PRE_FIX_CLS + "-spin";
    const spinClassName = classNames(
      _prefix,
      {
        [`${_prefix}-sm`]: size === "small",
        [`${_prefix}-lg`]: size === "large",
        [`${_prefix}-spinning`]: spinning,
      },
      className
    );
    console.log(spinClassName);

    const spinElement = (
      <div style={style} className={spinClassName}>
        {renderIndicator(_prefix, this.props)}
      </div>
    );
    return spinElement;
  };

  render() {
    return <>{this.renderSpin()}</>;
  }
}

export default Spin;
