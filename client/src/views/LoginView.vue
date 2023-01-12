<script>

import Navbar from '../components/Navbar.vue'
import { GoogleLogin } from 'vue3-google-login';
import {useDoctorStores} from '../stores/doctor';
import {mapState, mapActions} from 'pinia'

export default {
    name: "LoginView",
    data(){
        return{
            login:{
                email: "",
                password: ""
            }
        }
    },
    components:{
        Navbar,
        GoogleLogin
    },
    methods:{
        ...mapActions(useDoctorStores, ['handleLogin', 'handleCredentialResponse'])
    },
    created(){
      this.handleLogin()
      this.handleCredentialResponse()
    }
}
</script>

<template>

<Navbar />

<section
      id="login-section"
      class="vh-100 bg-image"
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                class="card bg-image"
              >
                <div class="card-body p-5">
                  <h1
                    class="text-uppercase text-center mb-5"
                  >
                    <h5>Welcome at Janji Dokter,</h5>
                    <h4>Login Here</h4>
                  </h1>

                  <form id="login-form" @submit.prevent="handleLogin(this.login.email, this.login.password)">
                    <p>Email</p>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="login-email"
                        class="form-control form-control-lg"
                        autocomplete="off"
                        v-model="login.email"
                      />
                    </div>
                    <p>Password</p>
                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="login-password"
                        class="form-control form-control-lg"
                        v-model="login.password"
                      />
                    </div>
                    <div class="d-flex justify-content-center m-4 p-4">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body bi"
                      >
                          Sign in
                      </button>
                    </div>
                    <div class="d-grid gap-2 d-flex justify-content-center">
                      <GoogleLogin :callback="handleCredentialResponse"/>  
                  </div>
                  </form>
                  <div class="text-center text-muted mt-3 mb-0">
                    <p >
                      <b> You dont have account?</b>
                      <a  href="" class="fw-bold text-body" id="login-direct"
                        >
                          Register here
                        </a
                      >
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


</template>