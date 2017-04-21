import axios from 'axios'

function CompanyDBApi () {
  var config = {
    apiBaseUrl: 'https://serene-basin-92125.herokuapp.com/'
  }

  var headers = {}

  var buildUrl = function (endpoint) {
    return config.apiBaseUrl + endpoint
  }

  var Api = {}

  Api.makeRequest = function (args) {
    args.url = buildUrl(args.endpoint)

    args.headers = args.headers || headers || {}

    // manipulate/reformat response
    let interceptor = axios.interceptors.response.use(function (response) {
      if (response.data && response.data.data) {
        response.meta = response.data.meta
        response.data = response.data.data
      }
      return response
    }, function (error) {
      return Promise.reject(error)
    })

    var request = axios(args)

    axios.interceptors.response.eject(interceptor)

    return request
  }

  Api.createCompany = function (data) {
    if (data.email.trim() === '') {
      delete data.email
    }

    if (data.phone.trim() === '') {
      delete data.phone
    }

    return Api.makeRequest({
      endpoint: 'companies',
      method: 'post',
      data
    })
  }

  Api.getCompanies = function () {
    return Api.makeRequest({
      endpoint: 'companies',
      method: 'get'
    })
  }

  Api.getCompany = function (id) {
    return Api.makeRequest({
      endpoint: `companies/${id}`,
      method: 'get'
    })
  }

  Api.updateCompany = function (id, data) {
    return Api.makeRequest({
      endpoint: `companies/${id}`,
      method: 'put',
      data
    })
  }

  Api.addNewPersonToCompany = function (companyId, data) {
    return Api.makeRequest({
      endpoint: `companies/${companyId}/people`,
      method: 'post',
      data
    })
  }

  Api.getPeople = function () {
    return Api.makeRequest({
      endpoint: 'people',
      method: 'get'
    })
  }

  return Api
}

export default new CompanyDBApi()
