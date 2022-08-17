import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <div className={cx('section-1')}>
                    <div className={cx('title')}>
                        <h1 className={cx('title-text')}>
                            <span className={cx('line')}></span>
                            Contact Our Sales Team
                        </h1>
                    </div>
                    <div className={cx('desc')}>
                        <h3 className={cx('desc-text')}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                            facilis.
                        </h3>
                    </div>
                </div>
                <div className={cx('section-2')}>
                    <div className={cx('form-wrapper')}>
                        <form className={cx('form')}>
                            <div className={cx('infor-wrapper')}>
                                <div className={cx('infor-wrapper-name')}>
                                    <label className={cx('label')}>Name</label>
                                    <input className={cx('input')} placeholder="Your name..." type="text" />
                                </div>
                                <div className={cx('infor-wrapper-email')}>
                                    <label className={cx('label')}>Email address</label>
                                    <input className={cx('input')} placeholder="Your email..." type="text" />
                                </div>
                            </div>
                            <div className={cx('subject-wrapper')}>
                                <label className={cx('label')}>Subject</label>
                                <input className={cx('input')} placeholder="Your Subject..." type="text" />
                            </div>

                            <div className={cx('message-wrapper')}>
                                <label className={cx('label')}>Message</label>
                                <textarea className={cx('input')} placeholder="Your message..." type="text"></textarea>
                            </div>
                            <div className={cx('btn-wrapper')}>
                                <button className={cx('btn-submit')}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={cx('section-3')}>
                    <div className={cx('section-3-1')}>
                        <div className={cx('section-3-1-infor')}>
                            <FontAwesomeIcon className={cx('section-3-1-icon')} icon={faMailBulk} />
                            <h1 className={cx('section-3-1-name')}>Email</h1>
                            <p className={cx('section-3-1-desc')}>information@gmail.com</p>
                        </div>
                        <div className={cx('section-3-1-infor')}>
                            <FontAwesomeIcon className={cx('section-3-1-icon')} icon={faPhone} />
                            <h1 className={cx('section-3-1-name')}>Telephone</h1>
                            <p className={cx('section-3-1-desc')}>+(485) 874 249 23</p>
                        </div>
                        <div className={cx('section-3-1-infor')}>
                            <FontAwesomeIcon className={cx('section-3-1-icon')} icon={faStopwatch} />
                            <h1 className={cx('section-3-1-name')}>Business Hours</h1>
                            <p className={cx('section-3-1-desc')}>Monday To Friday</p>
                            <p className={cx('section-3-1-desc')}>9:00am To 6:00pm (GMT)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
