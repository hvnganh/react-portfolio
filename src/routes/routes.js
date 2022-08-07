import Home from '~/pages/Home';
// import Introduce from '~/pages/Introduce';
// import Contact from '~/pages/Contact';
// import Education from '~/pages/Education';
// import Experience from '~/pages/Experience';
// import Skill from '~/pages/Skill';
// import UseState from '~/pages/UseState';
// import UseEffect from '~/pages/UseEffect';
import config from '~/config';
import Work from '~/work';
import EShop from '~/EShop';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.projects, component: Work },
    { path: config.routes.eshop, component: EShop },
    // { path: config.routes.introduce, component: Introduce },
    // { path: config.routes.contact, component: Contact },
    // { path: config.routes.education, component: Education },
    // { path: config.routes.experience, component: Experience },
    // { path: config.routes.skill, component: Skill },
    // { path: config.routes.usestate, component: UseState },
    // { path: config.routes.useeffect, component: UseEffect },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
