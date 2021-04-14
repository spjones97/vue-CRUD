import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-10307142-admin.okta.com/oauth2/default',
  clientId: '0oal3g1qmkVJR90fb5d6',
  redirectUri: window.location.origin + '/callback',
  scopes: ['openid', 'profile', 'email']
})

Vue.use(Router)
Vue.use(OktaVue, { oktaAuth })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
       path: '/callback',
       component: LoginCallback
     },
     {
       path: '/posts-manager',
       name: 'PostsManager',
       component: PostsManager,
       meta: {
         requiresAuth: true
       }
     }
  ]
})
