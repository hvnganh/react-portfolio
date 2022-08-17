import MainPage from './MainPage/MainPage';
import classNames from 'classnames/bind';
import styles from './LandingPage.module.scss';

const cx = classNames.bind(styles);

function LandingPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('components')}>
                <MainPage />
            </div>
        </div>
    );
}

export default LandingPage;
