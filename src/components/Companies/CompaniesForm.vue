<template>
  <div>
    <form @submit.prevent="saveCompany">
      <div class="notification is-danger" v-if="errors">
        {{ errors.error }}
        <ul>
          <li v-for="field in errors.fields">
            {{ field[0] }}
          </li>
        </ul>
      </div>
      <div class="field">
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Name" v-model="company.name" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <label class="label">Address</label>
        <p class="control">
          <input class="input" type="text" placeholder="Address" v-model="company.address" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <label class="label">City</label>
        <p class="control">
          <input class="input" type="text" placeholder="City" v-model="company.city" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <label class="label">Country</label>
        <p class="control">
          <input class="input" type="text" placeholder="Country" v-model="company.country" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <p class="control">
          <input class="input" type="text" placeholder="Email" v-model="company.email" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <label class="label">Phone</label>
        <p class="control">
          <input class="input" type="text" placeholder="Phone" v-model="company.phone" :disabled="isSaving">
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary" :class="{'is-loading': isSaving}">{{ buttonText }}</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      errors: {
        type: Object
      },
      initialCompany: {
        type: Object,
        default () {
          return {
            name: '',
            address: '',
            city: '',
            country: '',
            email: '',
            phone: ''
          }
        }
      },
      buttonText: {
        type: String,
        default: 'Save'
      },
      isSaving: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        company: this.initialCompany
      }
    },

    methods: {
      saveCompany () {
        this.$emit('savingCompany', this.company)
      }
    }
  }
</script>
