import classNames from 'classnames/bind';
import Content from '../components/ContentLP/Content';
import Footer from '../components/FooterLP/Footer';
import Header from '../components/HeaderLP/Header';
import styles from './MainPage.module.scss';

const cx = classNames.bind(styles);

function MainPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-landing-page')}>
                <Header />
            </div>
            <div className={cx('content-landing-page')}>
                <Content />
            </div>
            <div className={cx('footer-landing-page')}>
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;
