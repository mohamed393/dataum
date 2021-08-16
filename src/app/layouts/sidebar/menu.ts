import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 38,
        label: 'Tasks',
        icon: 'bx-task',
        subItems: [
            {
                id: 40,
                label: 'Kanban Board',
                link: '/tasks/all-tasks',
                parentId: 38
            }
        ]
    },
    {
        id: 96,
        label: 'Icons',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 97,
                label: 'Boxicons',
                link: '/icons/boxicons',
                parentId: 96
            },
            {
                id: 98,
                label: 'Material Design',
                link: '/icons/materialdesign',
                parentId: 96
            },
            {
                id: 99,
                label: 'Dripicons',
                link: '/icons/dripicons',
                parentId: 96
            },
            {
                id: 100,
                label: 'Font awesome',
                link: '/icons/fontawesome',
                parentId: 96
            },
        ]
    }
];

