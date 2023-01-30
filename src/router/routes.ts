import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '/tmp',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: 'Auth',
        path: '/auth',
        component: () => import('pages/AuthPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      {
        name: 'Logout',
        path: '/logout',
        component: () => import('pages/LogoutPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      {
        name: 'Boards',
        path: '/',
        component: () => import('src/budget/pages/BoardsPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: 'ViewBoard',
        path: '/board/:boardId',
        component: () => import('src/budget/pages/BoardPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'JoinBoard',
        path: '/board/join',
        component: () => import('src/budget/pages/JoinBoardPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'BoardSettings',
        path: '/board/:boardId/settings',
        component: () => import('src/budget/pages/BoardSettingsPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'AddBoardEntry',
        path: '/board/:boardId/add',
        component: () => import('src/budget/pages/BoardEntryAddPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'EditBoardEntry',
        path: '/board/:boardId/edit/:boardEntryId',
        component: () => import('src/budget/pages/BoardEntryAddPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'AddBoardSplit',
        path: '/board/:boardId/split/add',
        component: () => import('src/budget/pages/BoardSplitAddPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
      {
        name: 'EditBoardSplit',
        path: '/board/:boardId/split/:boardSplitId/edit',
        component: () => import('src/budget/pages/BoardSplitAddPage.vue'),
        meta: {
          requiresAuth: true,
        },
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
