<template>
  <div>
    <div class="content" v-if="isLoading">
      Loading...
    </div>
    <div class="content" v-if="company">
      <h1>{{ company.name }}</h1>
      <div class="columns">
        <div class="column">
          <h2 class="subtitle is-5">Details</h2>
          <companies-form
            :initialCompany="company"
            :isSaving="isSaving"
            @savingCompany="saveCompany">
          </companies-form>
        </div>

        <div class="column is-offset-1">
          <h2 class="subtitle is-5">People</h2>
          <ul>
            <li v-for="person in company.people">
              {{ person.name }} <span class="tag">{{ person.role }}</span>
            </li>
          </ul>

          <hr>
          <people-form
            :companyId="company.id"
            v-on:addedPerson="addedPerson">
          </people-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from '@/services/ApiService'
  import CompaniesForm from '@/components/Companies/CompaniesForm'
  import PeopleForm from '@/components/People/PeopleForm'

  export default {
    components: {
      CompaniesForm,
      PeopleForm
    },
    data () {
      return {
        isLoading: false,
        isSaving: false,
        company: null
      }
    },
    mounted () {
      this.getCompany()
    },
    methods: {
      addedPerson (person) {
        this.company.people.push(person)
      },

      getCompany () {
        this.isLoading = true
        Api.getCompany(this.$route.params.id)
        .then(company => {
          this.company = company.data
        })
        .then(() => {
          this.isLoading = false
        })
      },

      saveCompany (company) {
        this.isSaving = true
        Api.updateCompany(company.id, {
          name: company.name,
          address: company.address,
          city: company.city,
          country: company.country,
          email: company.email,
          phone: company.phone
        })
        .then(company => {
          console.log('saved', company)
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => {
          this.isSaving = false
        })
      }
    }
  }
</script>
