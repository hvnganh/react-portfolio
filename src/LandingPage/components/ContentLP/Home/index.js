import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-1')}>
                <div className={cx('started')}>
                    <h1 className={cx('started-text')}>Get Started</h1>
                </div>
                <div className={cx('vision')}>
                    <h1 className={cx('vision-text')}>Powerfull Analytics Tools For Your Business.</h1>
                </div>
                <div className={cx('mision')}>
                    <p className={cx('mision-text')}>
                        It is a long established fact that a reader by the readable content of a page when looking at
                        its layout.
                    </p>
                </div>
                <div className={cx('subcribe')}>
                    <input className={cx('subcribe-mail')} placeholder="Email" />
                    <span className={cx('subcribe-btn-wrapper')}>
                        <button className={cx('subcribe-btn')}>Subcribe</button>
                    </span>
                </div>
                <div className={cx('btn-client-wrapper')}>
                    <button className={cx('btn-client')}>
                        <FontAwesomeIcon className={cx('icon-client')} icon={faArrowDown} />
                    </button>
                </div>
            </div>
            <div className={cx('section-2')}>
                <img className={cx('img')} alt="img" src="https://oliver-new.netlify.app/images/home_side.png" />
            </div>
            <div className={cx('section-3')}>
                <div className={cx('sponsors')}>
                    <div className={cx('row')}>
                        <div className={cx('col')}>
                            <img
                                className={cx('sponsor-img')}
                                src="https://oliver-new.netlify.app/images/clients/1.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('col')}>
                            <img
                                className={cx('sponsor-img')}
                                src="https://oliver-new.netlify.app/images/clients/2.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('col')}>
                            <img
                                className={cx('sponsor-img')}
                                src="https://oliver-new.netlify.app/images/clients/3.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('col')}>
                            <img
                                className={cx('sponsor-img')}
                                src="https://oliver-new.netlify.app/images/clients/4.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
