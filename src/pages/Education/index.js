import classNames from 'classnames/bind';
import styles from './Education.module.scss';
import college from '../../assets/images/college.jpg';
import uni from '../../assets/images/uni.jpg';
import center from '../../assets/images/center.jpg';

const cx = classNames.bind(styles);

function Education() {
    return (
        <div className={cx('education')}>
            <div className={cx('college')}>
                <div className={cx('avatar-school')}>
                    <img className={cx('img')} src={college} alt="Hùng Anh" />
                </div>
                <p className={cx('year')} style={{ color: '#e22136' }}>
                    2017-2020
                </p>
                <p className={cx('title')}>Associate of arts</p>
            </div>
            <div className={cx('college')}>
                <div className={cx('avatar-school')}>
                    <img className={cx('img')} src={uni} alt="Hùng Anh" />
                </div>
                <p className={cx('year')} style={{ color: '#0134c1' }}>
                    2020-2022
                </p>
                <p className={cx('title')}>Bachelor’s Degree in English</p>
            </div>
            <div className={cx('college')}>
                <div className={cx('avatar-school')}>
                    <img className={cx('img')} src={center} alt="Hùng Anh" />
                </div>
                <p className={cx('year')} style={{ color: '#f57423' }}>
                    2021-2022
                </p>
                <p className={cx('title')}>Python django & ReactJS</p>
            </div>
        </div>
    );
}

export default Education;
