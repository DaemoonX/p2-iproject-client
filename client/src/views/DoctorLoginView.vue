<script>

import Navbar from '../components/Navbar.vue'
import {useDoctorStores} from '../stores/doctor';
import {mapState, mapActions} from 'pinia'

export default {
    name: 'DoctorLoginView',
    data(){
        return{
            login:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        ...mapActions(useDoctorStores, ['handleLoginDoctor'])
    },
    components:{
        Navbar,

    }
}

</script>

<template>

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
                    <h5>Welcome back Doc,</h5>
                    <h4>Login Here</h4>
                  </h1>

                  <form id="login-form" @submit.prevent="handleLoginDoctor(this.login.email, this.login.password)">
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
                    
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


</template>