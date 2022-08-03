import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTools, faContactBook, faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate(config.routes.home);
    };
    const handleNavigateEducation = () => {
        navigate(config.routes.education);
    };

    const handleNavigateIntroduce = () => {
        navigate(config.routes.introduce);
    };
    const handleNavigateExperience = () => {
        navigate(config.routes.experience);
    };

    const handleNavigateSkill = () => {
        navigate(config.routes.skill);
    };
    const handleNavigateContact = () => {
        navigate(config.routes.contact);
    };

    const handleNavigateUseState = () => {
        navigate(config.routes.usestate);
    };
    const handleNavigateUseEffect = () => {
        navigate(config.routes.useeffect);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-1')}>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button', 'active')} onClick={handleNavigateHome}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faHome} />
                            <p className={cx('title')}>Home</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateIntroduce}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            <p className={cx('title')}>Introduce</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateEducation}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBook} />
                            <p className={cx('title')}>Education</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateExperience}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faProjectDiagram} />
                            <p className={cx('title')}>Experience</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateSkill}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faTools} />
                            <p className={cx('title')}>Skill</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateContact}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faContactBook} />
                            <p className={cx('title')}>Contact</p>
                        </div>
                    </Button>
                </div>
            </div>
            <div className={cx('list-2')}>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button', 'active')} onClick={handleNavigateUseState}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faReact} />
                            <p className={cx('title')}>UseState</p>
                        </div>
                    </Button>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button className={cx('button')} onClick={handleNavigateUseEffect}>
                        <div className={cx('icon-wrapper')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faReact} />
                            <p className={cx('title')}>UseEffect</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
