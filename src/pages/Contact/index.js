import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { faLocationArrow, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact-content')}>
                <div className={cx('infor-contact')}>
                    <div className={cx('infor-items', 'address')}>
                        <FontAwesomeIcon className={cx('icon-contact')} icon={faLocationArrow} />
                        <p className={cx('contact-text')}>130 Le Van Luong, Tan Hung Ward, District 7, HCMC</p>
                    </div>
                    <div className={cx('infor-items')}>
                        <FontAwesomeIcon className={cx('icon-contact')} icon={faPhone} />
                        <p className={cx('contact-text')}>079.477.0468</p>
                    </div>
                    <div className={cx('infor-items')}>
                        <FontAwesomeIcon className={cx('icon-contact')} icon={faMailBulk} />
                        <p className={cx('contact-text')} style={{ textTransform: 'lowercase' }}>
                            nguyenhunganhhcm@gmail.com
                        </p>
                    </div>
                </div>
                {/* <div className={cx('contact-form')}>
                    <form action="">
                        <div className={cx('form-1')}>
                            <div className={cx('line-1')}>
                                <input type="text" required name="" placeholder="Name" className={cx('form-control')} />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    required
                                    name=""
                                    placeholder="Email"
                                    className={cx('form-control')}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={cx('line-2')}>
                                <input type="text" name="" placeholder="Message..." className={cx('form-control')} />
                            </div>
                        </div>
                        <input type="submit" className={cx('contact-submit')} value="SEND" />
                    </form>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;
