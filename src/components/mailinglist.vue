<template>
  <form @submit.prevent="signUp">
    <label for="mailingList" class="text-sm text-semibold">Sign up for our mailing list</label>
    <div>
      <input required v-if="!success" v-model="email" id="mailingList" type="email" class=" input rounded-r-none w-7/12 sm:w-auto"
             placeholder="Email">
      <button v-if="!success" type="submit" @click.prevent="signUp" class="btn  rounded-l-none w-5/12 sm:w-auto">Sign Up</button>
      <div class="input rounded-r-none inline-block" v-if="success">
        <p class="px-10">Success!</p>
      </div>

    </div>
    <p v-if="error" class="text-red">{{error}}</p>

  </form>
</template>
<script>
  export default {
    name: "Mailinglist",
    props: ['refferer'],
    data() {
      return {
         api: "https://2020.hyphen-hacks.com",
       // api: "http://localhost:3005",
        email: "",
        success: false,
        error: ""
      }
    },
    methods: {
      signUp() {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.email.length > 3 && re.test(this.email)) {
          fetch(this.api + "/api/v1/mailinglist/add", {
            method: 'post',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              email: this.email,
              referer: this.refferer
            })
          }).then(res => res.json()).then(res => {
            console.log(res)
            if (res.success) {
              this.success = true
              this.error = ""
              this.email = ""
              this.$analytics.logEvent('signUpForMailingList', {
              referer: this.refferer
              });
            } else {
              console.log("error", res.error)
              this.error = res.error
            }
          })
        } else {
          this.error = "invalid email"
        }
      }
    }
  }
</script>