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
// ==============================|| UTILITIES MENU ITEMS ||============================== //

const menuItems =[
        {
            id: 'Home',
            title: 'menuList.home',
            type: 'item',
            icon: icons.DashboardIcon,
            children: [
                {
                    id: '',
                    title: '',
                    type: 'item',
                    url: '',
                },
                {
                    id: '',
                    title: '',
                    type: 'item',
                    url: '',
                }
            ]
        },
        {
            id: 'contestManagement',
            title: 'menuList.contestManagement',
            type: 'item',
            url: '',
            icon: icons.AssignmentIcon,
        },
        {
            id: 'questionManagement',
            title: 'menuList.questionManagement',
            type: 'item',
            url: '',
            icon: icons.QuizIcon,
        },
        {
            id: 'accountInformation',
            title: 'menuList.accountInformation',
            type: 'item',
            url: '',
            icon: icons.AssignmentIndIcon,
        }
    ]
export default menuItems;
