
export const overlay = {
  camera: 'camera',
  comments: 'comments',
  dashboard: 'dashboard',
  dialog: 'dialog',
  editor: 'editor',
  notifications: 'notifications',
  login: 'login',
  profile: 'profile',
  register: 'register',
  search: 'search',
  wizard: 'wizard'
}

export const api = {
  comments: '/api/v1/comments',
  login: '/api/v1/login',
  logout: '/api/v1/logout',
  posts: '/api/v1/posts',
  register: '/api/v1/register',
  session: '/api/v1/session'
}

export const storage = {
  activeCaption: 'activeCaption',
  composition: 'composition',
  captions: 'captions',
  footage: 'footage',
  publisher: 'publisher'
}

// consider moving to its own config file:
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
