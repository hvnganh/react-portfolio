/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './FooterLP.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('row')}>
                    <div className={cx('col-4')}>
                        <div className={cx('introduce-wrapper')}>
                            <h1 className={cx('brand-name')}>
                                <span className={cx('line')}></span>
                                Anh
                            </h1>
                            <p className={cx('copyright')}>2021 © Oliver. Design by ThemeBoss.</p>
                            <h2 className={cx('follow')}>Follow Us</h2>
                            <div className={cx('icon-wrapper')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                <FontAwesomeIcon className={cx('icon')} icon={faLinkedin} />
                                <FontAwesomeIcon className={cx('icon')} icon={faGooglePlus} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <div className={cx('introduce-wrapper')}>
                            <h1 className={cx('introduce-link')}>Our Product</h1>
                            <ul className={cx('link-wrapper')}>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Getbootstrap</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Wordpress</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Shopify</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>React</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <div className={cx('introduce-wrapper')}>
                            <h1 className={cx('introduce-link')}>Company</h1>
                            <ul className={cx('link-wrapper')}>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>About</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Terms</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Privacy Policy</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Careers</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <div className={cx('introduce-wrapper')}>
                            <h1 className={cx('introduce-link')}>Services</h1>
                            <ul className={cx('link-wrapper')}>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Documentation</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Design</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Themes</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Illustrations</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>UI Kit</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-2')}>
                        <div className={cx('introduce-wrapper')}>
                            <h1 className={cx('introduce-link')}>More</h1>
                            <ul className={cx('link-wrapper')}>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Documentation</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>License</li>
                                </a>
                                <a className={cx('link')} href="#">
                                    <li className={cx('link-item')}>Changelog</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
