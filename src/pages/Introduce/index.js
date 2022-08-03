import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import avt from '../../assets/images/avt.jpg';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('container')}>
            <div className={cx('avatar')}>
                <img className={cx('img')} src={avt} alt="Hùng Anh" />{' '}
            </div>
            <div className={cx('information')}>
                <p className={cx('name')}>Nguyen Hung Anh</p>
                <p className={cx('title')}>Web Developer</p>
                <p className={cx('desc')}>
                    Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines.
                    Enthusiastic team player ready to contribute to company success. Driven Web Developer skilled in
                    team collaboration to formulate and conceptualize corporate web presence. Embraces challenging
                    projects requiring detailed coding changes, search engine-related considerations and security.
                    Integrates knowledge of visual arts to develop functional, appealing, custom-made web products and
                    services.
                </p>
            </div>
        </div>
    );
}

export default Introduce;
