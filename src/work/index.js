import classNames from 'classnames/bind';
import UseEffect from './UseEffect';
import UseState from './UseState';
import styles from './Work.module.scss';

const cx = classNames.bind(styles);

function Work() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('components')}></div>
        </div>
    );
}

export default Work;
