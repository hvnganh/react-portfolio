import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleProjects = () => {
        navigate('/projects');
    };

    const handleEShop = () => {
        navigate('/eshop');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('link-items')}>
                <button onClick={handleHome} className={cx('link-btn')}>
                    About
                </button>
                <button onClick={handleProjects} className={cx('link-btn')}>
                    Projects
                </button>
                <button onClick={handleEShop} className={cx('link-btn')}>
                    E-Shop
                </button>
            </div>
        </div>
    );
}

export default Header;
