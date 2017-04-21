<template>
  <div>
    <div class="content">
      <h1>Overview <span class="tag is-info is-large" v-show="isLoading">Loading...</span></h1>
    </div>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Name
          </th>
          <th>
            City
          </th>
          <th>
            Country
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies">
          <td>
            {{ company.id }}
          </td>
          <td>
            <router-link :to="{ name: 'ShowCompany', params: { id: company.id } }">
              {{ company.name }}
            </router-link>
          </td>
          <td>
            {{ company.city }}
          </td>
          <td>
            {{ company.country }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Api from '@/services/ApiService'

export default {
  data () {
    return {
      isLoading: false,
      companies: []
    }
  },
  mounted () {
    this.getCompanies()
  },
  methods: {
    getCompanies () {
      this.isLoading = true
      Api.getCompanies()
      .then(companies => {
        this.companies = companies.data
        this.isLoading = false
      })
    }
  }
}
</script>
