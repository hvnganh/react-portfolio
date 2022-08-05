import classNames from 'classnames/bind';
import UseEffect from './UseEffect';
import UseState from './UseState';
import styles from './Work.module.scss';
import Redux from './Redux/Redux';
import Weather from './Weather';

const cx = classNames.bind(styles);

function Work() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('components')}>
                <Weather />
            </div>
            <div className={cx('components')}>
                <Redux />
            </div>
        </div>
    );
}

export default Work;
