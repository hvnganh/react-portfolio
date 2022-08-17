import classNames from 'classnames/bind';
import styles from './Client.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Client() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-text')}>
                        <span className={cx('line')}></span>
                        Oliver Is Loved By Users
                    </h1>
                </div>
                <div className={cx('desc')}>
                    <h3 className={cx('desc-text')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.
                    </h3>
                </div>
            </div>
            <div className={cx('sliders')}>
                <div className={cx('items-slide')}>
                    <div className={cx('section-1')}>
                        <div className={cx('section-1-img-wrapper')}>
                            <img
                                className={cx('section-1-img')}
                                src="https://oliver-new.netlify.app/images/testi/3.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('section-1-infor-wrapper')}>
                            <div className={cx('section-1-infor-name')}>
                                <span className={cx('section-1-name')}>Alex Smith,</span>
                                <span style={{ fontWeight: '300' }} className={cx('section-1-name')}>
                                    {' '}
                                    Oliver
                                </span>
                            </div>
                            <div className={cx('section-1-infor-icon')}>
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('section-2')}>
                        <p className={cx('section-2-desc')}>
                            Nulla metus metus sed euismod volutpat velit class aptent taciti sociosqu ad litora torquent
                            per conubia nostra.
                        </p>
                    </div>
                </div>
                <div className={cx('items-slide')}>
                    <div className={cx('section-1')}>
                        <div className={cx('section-1-img-wrapper')}>
                            <img
                                className={cx('section-1-img')}
                                src="https://oliver-new.netlify.app/images/testi/3.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('section-1-infor-wrapper')}>
                            <div className={cx('section-1-infor-name')}>
                                <span className={cx('section-1-name')}>Alex Smith,</span>
                                <span style={{ fontWeight: '300' }} className={cx('section-1-name')}>
                                    {' '}
                                    Oliver
                                </span>
                            </div>
                            <div className={cx('section-1-infor-icon')}>
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('section-2')}>
                        <p className={cx('section-2-desc')}>
                            Nulla metus metus sed euismod volutpat velit class aptent taciti sociosqu ad litora torquent
                            per conubia nostra.
                        </p>
                    </div>
                </div>
                <div className={cx('items-slide')}>
                    <div className={cx('section-1')}>
                        <div className={cx('section-1-img-wrapper')}>
                            <img
                                className={cx('section-1-img')}
                                src="https://oliver-new.netlify.app/images/testi/3.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('section-1-infor-wrapper')}>
                            <div className={cx('section-1-infor-name')}>
                                <span className={cx('section-1-name')}>Alex Smith,</span>
                                <span style={{ fontWeight: '300' }} className={cx('section-1-name')}>
                                    {' '}
                                    Oliver
                                </span>
                            </div>
                            <div className={cx('section-1-infor-icon')}>
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                                <FontAwesomeIcon className={cx('section-1-icon')} icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('section-2')}>
                        <p className={cx('section-2-desc')}>
                            Nulla metus metus sed euismod volutpat velit class aptent taciti sociosqu ad litora torquent
                            per conubia nostra.
                        </p>
                    </div>
                </div>
                <div className={cx('slider-control')}>
                    <button className={cx('slider-control-prev')}>
                        <FontAwesomeIcon className={cx('slider-control-icon', 'left')} icon={faArrowLeft} />
                    </button>
                    <button className={cx('slider-control-next')}>
                        <FontAwesomeIcon className={cx('slider-control-icon', 'right')} icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Client;
