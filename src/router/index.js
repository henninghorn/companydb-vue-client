import Vue from 'vue'
import Router from 'vue-router'
import CompaniesOverview from '@/components/Companies/CompaniesOverview'
import CompaniesShow from '@/components/Companies/CompaniesShow'
import CompaniesNew from '@/components/Companies/CompaniesNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: CompaniesOverview
    },
    {
      path: '/companies/new',
      name: 'NewCompany',
      component: CompaniesNew
    },
    {
      path: '/companies/:id',
      name: 'ShowCompany',
      component: CompaniesShow
    }
  ]
})
