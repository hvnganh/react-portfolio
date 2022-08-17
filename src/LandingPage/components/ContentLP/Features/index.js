import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeadphones,
    faLink,
    faMessage,
    faBookOpen,
    faStar,
    faDownload,
    faCloudDownload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Features.module.scss';

const cx = classNames.bind(styles);

function Features() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-1')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-text')}>
                        <span className={cx('line')}></span>
                        Explore About Our Awesome Features
                    </h1>
                </div>
                <div className={cx('desc')}>
                    <h3 className={cx('desc-text')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci facilis.
                    </h3>
                </div>
            </div>
            <div className={cx('section-2')}>
                <div className={cx('section-mini-1')}>
                    <div className={cx('section-mini-title-wrapper')}>
                        <p className={cx('section-mini-title-text')}>
                            <span className={cx('section-mini-line')}></span>
                            PERFACT DESIGN
                        </p>
                    </div>
                    <div className={cx('section-mini-slogan-wrapper')}>
                        <h1 className={cx('section-mini-slogan-text')}>It’s Everything You’ll Ever Need.</h1>
                    </div>
                    <div className={cx('section-mini-desc-wrapper')}>
                        <p className={cx('section-mini-desc-text')}>
                            Create custom landing pages with Landik that converts more visitors than any website. With
                            lots of unique blocks, you can easily build a page without coding.
                        </p>
                    </div>
                    <div className={cx('section-mini-btn-wrapper')}>
                        <button className={cx('section-mini-btn')}>Explore</button>
                    </div>
                </div>
                <div className={cx('section-mini-2')}>
                    <img className={cx('img')} src="https://oliver-new.netlify.app/images/features-one.png" alt="" />
                </div>
            </div>
            <div className={cx('section-3')}>
                <div className={cx('section-3-1')}>
                    <img
                        className={cx('img-3-1')}
                        src="https://oliver-new.netlify.app/images/features-two.png"
                        alt=""
                    />
                </div>
                <div className={cx('section-3-2')}>
                    <div className={cx('title-wrapper')}>
                        <p className={cx('section-mini-title-text')}>
                            <span className={cx('section-mini-line')}></span>
                            USER INTERFACE
                        </p>
                    </div>
                    <div className={cx('slogan-wrapper')}>
                        <h1 className={cx('slogan-text')}>Unlimited Features Awaiting For You.</h1>
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <p className={cx('section-mini-desc-text')}>
                            Create custom landing pages with Landik that converts more visitors than any website. With
                            lots of unique blocks, you can easily build a page without coding.
                        </p>
                    </div>
                    <div className={cx('btn-wrapper')}>
                        <button className={cx('btn')}>Explore</button>
                    </div>
                </div>
            </div>
            <div className={cx('section-4')}>
                <div className={cx('section-4-1')}>
                    <div className={cx('section-4-1-title')}>
                        <h1 className={cx('section-4-1-title-text')}>
                            <span className={cx('section-4-1-line')}></span>
                            What We Do
                        </h1>
                    </div>
                    <div className={cx('section-4-1-desc')}>
                        <h3 className={cx('section-4-1-desc-text')}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                            facilis.{' '}
                        </h3>
                    </div>
                </div>
                <div className={cx('section-4-2')}>
                    <div className={cx('row')}>
                        <div className={cx('col-c-6')}>
                            <div className={cx('section-4-2-items')}>
                                <div className={cx('section-4-2-icon')}>
                                    <FontAwesomeIcon className={cx('section-4-2-icon')} icon={faBookOpen} />
                                </div>
                                <div className={cx('section-4-2-text-wrapper')}>
                                    <h1 className={cx('section-4-2-text')}>Well Documented</h1>
                                    <p className={cx('section-4-2-desc')}>
                                        Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-c-6')}>
                            <div className={cx('section-4-2-items')}>
                                <div className={cx('section-4-2-icon')}>
                                    <FontAwesomeIcon className={cx('section-4-2-icon')} icon={faLink} />
                                </div>
                                <div className={cx('section-4-2-text-wrapper')}>
                                    <h1 className={cx('section-4-2-text')}>Highly Customizable </h1>
                                    <p className={cx('section-4-2-desc')}>
                                        The point of using Lorem Ipsum is has a normal distribution of letters, as
                                        opposed to using.{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-c-6')}>
                            <div className={cx('section-4-2-items')}>
                                <div className={cx('section-4-2-icon')}>
                                    <FontAwesomeIcon className={cx('section-4-2-icon')} icon={faHeadphones} />
                                </div>
                                <div className={cx('section-4-2-text-wrapper')}>
                                    <h1 className={cx('section-4-2-text')}>24/7 Support</h1>
                                    <p className={cx('section-4-2-desc')}>
                                        There are many variations of but the majority have suffered alteration in some
                                        form.{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-c-6')}>
                            <div className={cx('section-4-2-items')}>
                                <div className={cx('section-4-2-icon')}>
                                    <FontAwesomeIcon className={cx('section-4-2-icon')} icon={faMessage} />
                                </div>
                                <div className={cx('section-4-2-text-wrapper')}>
                                    <h1 className={cx('section-4-2-text')}>Highly Customizable</h1>
                                    <p className={cx('section-4-2-desc')}>
                                        If you are going to use a Ipsum, you need to be sure there isn't anything in the
                                        middle of text.{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('section-5')}>
                <div className={cx('section-5-1')}>
                    <div className={cx('section-1')}>
                        <div className={cx('title')}>
                            <h1 className={cx('title-text')}>
                                <span className={cx('line')}></span>
                                Hosts Like You, Worldwide
                            </h1>
                        </div>
                        <div className={cx('desc')}>
                            <h3 className={cx('desc-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                facilis.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={cx('section-5-2')}>
                    <div className={cx('section-5-2-1')}>
                        <div className={cx('section-5-2-1-box')}>
                            <FontAwesomeIcon className={cx('section-5-2-1-icon')} icon={faStar} />
                            <div className={cx('section-5-2-1-count-wrapper')}>
                                <span className={cx('section-5-2-1-count')}>4.92</span>
                                <span className={cx('section-5-2-1-count')}>/5</span>
                            </div>
                            <p className={cx('section-5-2-1-desc')}>Average ratings</p>
                        </div>
                        <div className={cx('section-5-2-1-box')}>
                            <FontAwesomeIcon className={cx('section-5-2-1-icon')} icon={faUser} />

                            <div className={cx('section-5-2-1-count-wrapper')}>
                                <span className={cx('section-5-2-1-count')}>260</span>
                                <span className={cx('section-5-2-1-count')}>k+</span>
                            </div>
                            <p className={cx('section-5-2-1-desc')}>Monthly Installs</p>
                        </div>
                        <div className={cx('section-5-2-1-box')}>
                            <FontAwesomeIcon className={cx('section-5-2-1-icon')} icon={faDownload} />

                            <div className={cx('section-5-2-1-count-wrapper')}>
                                <span className={cx('section-5-2-1-count')}>40</span>
                                <span className={cx('section-5-2-1-count')}>k+</span>
                            </div>
                            <p className={cx('section-5-2-1-desc')}>Weekly Downloads</p>
                        </div>
                        <div className={cx('section-5-2-1-box')}>
                            <FontAwesomeIcon className={cx('section-5-2-1-icon')} icon={faCloudDownload} />

                            <div className={cx('section-5-2-1-count-wrapper')}>
                                <span className={cx('section-5-2-1-count')}>4.9</span>
                                <span className={cx('section-5-2-1-count')}>M</span>
                            </div>
                            <p className={cx('section-5-2-1-desc')}>Total Downloads</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('section-6')}>
                <div className={cx('section-6-1')}>
                    <h1 className={cx('section-6-1-title')}>We’re Ready for a Challenging Project</h1>
                    <p className={cx('section-6-1-desc')}>
                        The point of using Lorem Ipsum is that opposed to using 'Content here, content here', making it
                        look like readable English.
                    </p>
                    <button className={cx('section-6-1-btn')}>Start Trial Free</button>
                </div>
            </div>
            <div className={cx('section-7')}>
                <div className={cx('section-7-1')}>
                    <div className={cx('section-1')}>
                        <div className={cx('title')}>
                            <h1 className={cx('title-text')}>
                                <span className={cx('line')}></span>
                                How Easy Is It To Get Started?
                            </h1>
                        </div>
                        <div className={cx('desc')}>
                            <h3 className={cx('desc-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                facilis.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={cx('section-7-2')}>
                    <div className={cx('section-7-2-1')}>
                        <div className={cx('section-7-2-1-wrapper')}>
                            <span className={cx('section-7-2-1-step')}>STEP 1</span>
                            <h1 className={cx('section-7-2-1-title')}>Design & Devloping</h1>
                            <p className={cx('section-7-2-1-desc')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={cx('section-7-2-1-wrapper')}>
                            <span className={cx('section-7-2-1-step')}>STEP 2</span>
                            <h1 className={cx('section-7-2-1-title')}>Testing Project</h1>
                            <p className={cx('section-7-2-1-desc')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={cx('section-7-2-1-wrapper')}>
                            <span className={cx('section-7-2-1-step')}>STEP 3</span>
                            <h1 className={cx('section-7-2-1-title')}>Publisher Project</h1>
                            <p className={cx('section-7-2-1-desc')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
