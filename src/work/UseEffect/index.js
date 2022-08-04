import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './UseEffect.module.scss';

const cx = classNames.bind(styles);

function UseEffect() {
    const tabs = ['posts', 'comments', 'albums'];
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    // NO DEPENDANCIES
    useEffect(() => {
        if (title === '') {
            document.title = 'Test';
        } else {
            document.title = title;
        }
    });

    // EMPTY DEPENDANCIES
    // useEffect(() => {
    //     const fetchAPi = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await response.json();
    //         setPosts(data);
    //     };
    //     fetchAPi();
    // }, []);

    //HAVE DEPENDANCIES
    // useEffect(() => {
    //     const fetchAPi = async () => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    //         const data = await response.json();
    //         setPosts(data);
    //     };
    //     fetchAPi();
    // }, [type]);

    //====================================================================================================
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
            // setShowGoToTop(window.screenY >= 200)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //====================================================================================================
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    //====================================================================================================
    const [countdown, setCountdown] = useState(1000);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    //====================================================================================================
    const [avatar, setAvatar] = useState();
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    };
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    //====================================================================================================

    return (
        <div className={cx('container')}>
            <div className={cx('practice')}>
                <div className={cx('example')}>
                    <input
                        className={cx('input-text')}
                        placeholder="Make your change..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={cx('example')}>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>{post.title || post.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={cx('example')}>
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setType(tab)} className={cx('button')}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className={cx('example')}>
                    <h1>Width: {width}</h1>
                </div>
                <div className={cx('example')}>
                    <h1>countdown: {countdown}</h1>
                </div>
                <div className={cx('example')}>
                    <input type="file" onChange={handlePreviewAvatar} />
                    {avatar && <img style={{ width: '200px' }} src={avatar.preview} alt="Anh" />}
                </div>
                <div className={cx('example')}>
                    <input type="file" onChange={handlePreviewAvatar} />
                    {avatar && <img style={{ width: '200px' }} src={avatar.preview} alt="Anh" />}
                </div>
            </div>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    className={cx('button')}
                >
                    GO TO TOP
                </button>
            )}
        </div>
    );
}

export default UseEffect;
