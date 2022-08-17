import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Content from '../components/ContentLP/Content';
import Footer from '../components/FooterLP/Footer';
import Header from '../components/HeaderLP/Header';
import styles from './MainPage.module.scss';

const cx = classNames.bind(styles);

function MainPage() {
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleGoToTop = () => {
            setShowGoToTop(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleGoToTop);

        return () => {
            window.removeEventListener('scroll', handleGoToTop);
        };
    }, []);

    const handleClickToTop = () => {
        window.scrollTo(0, 0);
    };

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
            <div className={cx('btn-wrapper')}>
                {showGoToTop && (
                    <button onClick={handleClickToTop} className={cx('btn')}>
                        <FontAwesomeIcon className={cx('icon-up')} icon={faArrowUp} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default MainPage;
