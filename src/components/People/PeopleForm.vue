<template>
  <div>
    <form @submit.prevent="addPersonToCompany">
      <div class="content">
        <h3 class="title is-5">
          Add person
        </h3>
        <div class="notification is-danger" v-if="errors">
          {{ errors.error }}
          <ul>
            <li v-for="field in errors.fields">
              {{ field[0] }}
            </li>
          </ul>
        </div>
      </div>
      <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Name of person" v-model="person.name" :disabled="isLoading">
        </p>
        <p class="control">
          <span class="select">
            <select v-model="person.role" :disabled="isLoading">
              <option value="founder">Founder</option>
              <option value="owner">Owner</option>
            </select>
          </span>
        </p>
        <p class="control">
          <button class="button is-info" :class="{'is-loading': isLoading}">
            Add
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  import Api from '@/services/ApiService'

  export default {
    data () {
      return {
        isLoading: false,
        errors: null,
        person: {
          name: '',
          role: 'founder'
        }
      }
    },

    props: {
      companyId: {
        type: Number,
        required: true
      }
    },

    methods: {
      addPersonToCompany () {
        this.isLoading = true
        Api.addNewPersonToCompany(this.companyId, this.person)
        .then(person => {
          this.$emit('addedPerson', person.data)
          this.person.name = ''
        })
        .catch(error => {
          this.errors = error.data
        })
        .then(() => {
          this.isLoading = false
        })
      }
    }
  }
</script>
