
export const overlay = {
  camera: 'camera',
  comments: 'comments',
  dashboard: 'dashboard',
  notifications: 'notifications',
  login: 'login',
  profile: 'profile',
  register: 'register',
  search: 'search'
}

export const api = {
  login: '/api/v1/login',
  logout: '/api/v1/logout',
  register: '/api/v1/register',
  session: '/api/v1/session'
}

export const contextmenu = {
  default: {
    actions: [],
    information: []
  },
  feednode: {
    actions: ['like', 'comment', 'share', 'fullscreen', 'report', 'blockuser'],
    information: []
  },
  camera: {
    actions: [],
    information: []
  },
  search: {
    actions: [],
    information: []
  },
  profile: {
    actions: [],
    information: []
  },
  notifications: {
    actions: [],
    information: []
  },
  dashboard: {
    actions: [],
    information: []
  },
  login: {
    actions: [],
    information: []
  },
}
