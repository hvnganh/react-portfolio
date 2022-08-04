import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            {/* <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}></div>
            </div> */}
            <div className={cx('content')}>{children}</div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
