export const config = {
  cookie: {
    session: 'session'
  },
  storage: {
    search: {
      terms: 'searchTerms'
    }
  },
  api: {
    search: 'https://devour.social/api/v1/search',
    turnstile: '/api/v1/turnstile',
    posts: '/api/v1/posts',
    test: '/api/v1/test',
    likes: '',
    shares: '',
    views: '',
    comments: '',
    user: {
      logout: '/api/v1/logout',
      login: '/api/v1/login',
      register: '/api/v1/register',
      forgot_password: '/api/v1/forgot-password',
      confirm_forgot_password: '/api/v1/confirm-forgot-password',
      session: '/api/v1/session'
    },
    log: {
      errors: ''
    }
  }
}
