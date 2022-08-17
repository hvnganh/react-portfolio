import classNames from 'classnames/bind';
import Client from './Client';
import Contact from './Contact';
import styles from './ContentLP.module.scss';
import Features from './Features';
import Home from './Home';
import Price from './Price';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('components')}>
                <Home />
            </div>
            <div className={cx('components')}>
                <Features />
            </div>
            <div className={cx('components')}>
                <Client />
            </div>
            <div className={cx('components')}>
                <Price />
            </div>
            <div className={cx('components')}>
                <Contact />
            </div>
        </div>
    );
}

export default Content;
