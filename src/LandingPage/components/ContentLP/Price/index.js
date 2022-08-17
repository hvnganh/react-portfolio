import classNames from 'classnames/bind';
import styles from './Price.module.scss';

const cx = classNames.bind(styles);

function Price() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')}>
                <div className={cx('section-1')}>
                    <div className={cx('title')}>
                        <h1 className={cx('title-text')}>
                            <span className={cx('line')}></span>
                            Find A Plan That Works For You
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
                    <div className={cx('section-2-wrapper')}>
                        <div className={cx('section-2-box')}>
                            <h1 className={cx('section-2-title')}>Basic</h1>
                            <h2 className={cx('section-2-intro')}>Start building beautiful websites.</h2>
                            <button className={cx('section-2-btn')}>Choose Now</button>
                            <h1 className={cx('section-2-price')}>
                                <span className={cx('section-2-currency')}>$/</span>199
                            </h1>
                            <p className={cx('section-2-desc')}>Price Includes GST.</p>
                        </div>
                        <div className={cx('section-2-box', 'decorate')}>
                            <h1 className={cx('section-2-title')}>Professional</h1>
                            <h2 className={cx('section-2-intro')}>Start building beautiful websites.</h2>
                            <button className={cx('section-2-btn')}>Choose Now</button>
                            <h1 className={cx('section-2-price')}>
                                <span className={cx('section-2-currency')}>$/</span>299
                            </h1>
                            <p className={cx('section-2-desc')}>Price Includes GST.</p>
                        </div>
                        <div className={cx('section-2-box')}>
                            <h1 className={cx('section-2-title')}>Ultimate</h1>
                            <h2 className={cx('section-2-intro')}>Start building beautiful websites.</h2>
                            <button className={cx('section-2-btn')}>Choose Now</button>
                            <h1 className={cx('section-2-price')}>
                                <span className={cx('section-2-currency')}>$/</span>399
                            </h1>
                            <p className={cx('section-2-desc')}>Price Includes GST.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;
