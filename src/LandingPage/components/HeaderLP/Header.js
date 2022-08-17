/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './HeaderLP.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('logo')}>
                    <a href="#" className={cx('logo-link')}>
                        <h1 className={cx('logo-name')}>
                            <span className={cx('line')}></span>
                            ANH
                        </h1>
                    </a>
                </div>
                <div className={cx('link-items')}>
                    <ul className={cx('items')}>
                        <a href="#" className={cx('item-link')}>
                            <li className={cx('nav-link', 'home')}>Home</li>
                        </a>
                        <a href="#" className={cx('item-link')}>
                            <li className={cx('nav-link')}>Features</li>
                        </a>
                        <a href="#" className={cx('item-link')}>
                            <li className={cx('nav-link')}>Client</li>
                        </a>
                        <a href="#" className={cx('item-link')}>
                            <li className={cx('nav-link')}>Price</li>
                        </a>
                        <a href="#" className={cx('item-link')}>
                            <li className={cx('nav-link')}>Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
