import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('https://hvnganh.github.io/react-portfolio/');
    };

    const handleProjects = () => {
        navigate('https://hvnganh.github.io/react-portfolio/projects');
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
            </div>
        </div>
    );
}

export default Header;
