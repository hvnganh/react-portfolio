import classNames from 'classnames/bind';
import styles from './Skill.module.scss';
import html from '../../assets/images/html.jpg';
import css from '../../assets/images/css.jpg';
import js from '../../assets/images/js.jpg';
import react from '../../assets/images/react.jpg';
import python from '../../assets/images/python.jpg';
import django from '../../assets/images/django.jpg';

const cx = classNames.bind(styles);

function Skill() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={html} alt="html" />
            </div>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={css} alt="html" />
            </div>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={js} alt="html" />
            </div>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={react} alt="html" />
            </div>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={python} alt="html" />
            </div>
            <div className={cx('skill-items')}>
                <img className={cx('img')} src={django} alt="html" />
            </div>
        </div>
    );
}

export default Skill;
