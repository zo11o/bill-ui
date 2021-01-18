import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../_util';
import { debounce } from 'lodash';
import './style/index.less';

export const tuple = <T extends string[]>(...args: T) => args;
const SpinSizes = tuple('small', 'default', 'large');

export type SpinSize = typeof SpinSizes[number];
export type SpinIndicator = React.ReactElement<HTMLElement>;

type SpinProps = {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: string;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
};

export type SpinState = {
  spinning?: boolean;
  notCssAnimationSupported?: boolean;
};

// let defaultIndicator: React.ReactNode = null;

function renderIndicator(prefixCls: string, props: SpinProps): React.ReactNode {
  const { indicator } = props;
  const dotClassName = `${prefixCls}-dot`;
  if (indicator === null) {
    return null;
  }
  // 做错误判断

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
  return !!spinning && !!delay && !Number.isNaN(Number(delay));
}

class Spin extends React.Component<SpinProps, SpinState> {
  static defaultProps = {
    spinning: true,
    size: 'default' as SpinSize,
    wrapperClassName: '',
  };

  // static setDefaultIndicator(indicator: React.ReactNode) {
  //   defaultIndicator = indicator;
  // }

  originalUpdateSpinning: () => void;

  constructor(props: SpinProps) {
    super(props);
    const { spinning, delay } = props;
    const shouldBeDelayed = shouldDelay(spinning, delay);
    this.state = {
      spinning: spinning && !shouldBeDelayed,
    };
    this.originalUpdateSpinning = this.updateSpinning;
    this.debouncifyUpdateSpinning(props);
  }

  updateSpinning = () => {
    const { spinning } = this.props;

    const { spinning: currentSpinning } = this.state;
    if (currentSpinning !== spinning) {
      this.setState({ spinning });
    }
  };

  debouncifyUpdateSpinning = (props?: SpinProps) => {
    const { delay } = props || this.props;
    if (delay) {
      this.cancelExistingSpin();
      this.updateSpinning = debounce(this.originalUpdateSpinning, delay);
    }
  };

  cancelExistingSpin() {
    const { updateSpinning } = this;
    if (updateSpinning && (updateSpinning as any).cancel) {
      (updateSpinning as any).cancel();
    }
  }

  renderSpin = () => {
    const { className, size, style } = this.props;

    const { spinning } = this.state;
    const prefix = getPrefixCls('spin');
    const spinClassName = classNames(
      prefix,
      {
        [`${prefix}-sm`]: size === 'small',
        [`${prefix}-lg`]: size === 'large',
        [`${prefix}-spinning`]: spinning,
      },
      className,
    );

    const spinElement = (
      <div style={style} className={spinClassName}>
        {renderIndicator(prefix, this.props)}
      </div>
    );
    return spinElement;
  };

  render() {
    return <>{this.renderSpin()}</>;
  }
}

export default Spin;
