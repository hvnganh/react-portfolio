import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../Header/ThemeContext/ThemeContext';

const cx = classNames.bind(styles);

function Footer() {
    const value = useContext(ThemeContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('social-list')}>
                {/* <div className={cx('link-items')}>
                    <a href="https://www.facebook.com/nguyenhunganhh/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className={cx('icon-link')} icon={faFacebook} />
                    </a>
                </div> */}
                <div className={cx('link-items')}>
                    <a
                        href="https://www.linkedin.com/in/anh-nguy%E1%BB%85n-6982341b5/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={cx('icon-link', value.theme)} icon={faLinkedin} />
                    </a>
                </div>
                <div className={cx('link-items')}>
                    <a href="https://github.com/hvnganh" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className={cx('icon-link', value.theme)} icon={faGithub} />
                    </a>
                </div>
            </div>
            <div className={cx('copyright')}>
                <p className={cx('text')}>
                    Designed by <span style={{ textDecoration: 'underline' }}>Hvnganh</span> with{' '}
                    <FontAwesomeIcon className={cx('text-icon', value.theme)} icon={faHeart} />
                </p>
            </div>
        </div>
    );
}

export default Footer;
