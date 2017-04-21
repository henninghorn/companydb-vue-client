<template>
  <div>
    <div class="content">
      <h1>New company</h1>
      <div class="columns">
        <div class="column is-6">
          <companies-form
            :isSaving="isSaving"
            :errors="errors"
            buttonText="Create"
            @savingCompany="createCompany">
          </companies-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from '@/services/ApiService'
  import CompaniesForm from '@/components/Companies/CompaniesForm'

  export default {
    components: {
      CompaniesForm
    },

    data () {
      return {
        isSaving: false,
        errors: null
      }
    },

    methods: {
      createCompany (company) {
        this.isSaving = true

        Api.createCompany(company)
        .then(result => {
          this.$router.push({
            name: 'ShowCompany',
            params: {
              id: result.data.id
            }
          })
        })
        .catch(error => {
          this.errors = error.data
        })
        .then(() => {
          this.isSaving = false
        })
      }
    }
  }
</script>
