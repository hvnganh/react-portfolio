/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import logoReact from '../../assets/images/React.svg.png';
import Introduce from '../Introduce';
import Education from '../Education';
import Experience from '../Experience';
import Skill from '../Skill';
import Contact from '../Contact';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            {/* <h1 className={cx('text')}>Hi I'm Anh Nguyen</h1>
            <img className={cx('icon')} src={logoReact} /> */}
            <div className={cx('components')}>
                <Introduce />
            </div>
            <div className={cx('components')}>
                <Education />
            </div>
            <div className={cx('components')}>
                <Experience />
            </div>
            <div className={cx('components')}>
                <Skill />
            </div>
            <div className={cx('components')}>
                <Contact />
            </div>
        </div>
    );
}

export default Home;
