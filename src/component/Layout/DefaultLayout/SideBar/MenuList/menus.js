// assets
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// constant
const icons = {
    DashboardIcon,
    AssignmentIcon,
    QuizIcon,
    AssignmentIndIcon
};

const menuItems = [
        {
            id: '1',
            title: 'menuList.home',
            type: 'item',
            url: '/',
            icon: icons.DashboardIcon,
        },
        {
            id: '2',
            title: 'menuList.contestManagement',
            type: 'item',
            url: '/contest',
            icon: icons.AssignmentIcon,
        },
        {
            id: '3',
            title: 'menuList.questionManagement',
            type: 'item',
            url: '/question',
            icon: icons.QuizIcon,
        },
        {
            id: '4',
            title: 'menuList.accountInformation',
            type: 'item',
            url: '/account',
            icon: icons.AssignmentIndIcon,
        }
    ]
export default menuItems;
