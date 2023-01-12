<script>

import { useDoctorStores } from '../stores/doctor';
import { mapActions, mapState } from 'pinia';

export default {
    name: 'Navbar',
    data(){
        return{
            isLogin: ''
        }
    },
    methods:{
        ...mapActions(useDoctorStores, ['handleLogout', 'handleLogin'] )
    },
    created(){
      if(localStorage.getItem('access_token')){
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    }
}

</script>

<template>
<nav
      class="navbar navbar-expand-lg bg-image navbar-light fixed-top"
    >
    <div>
        <a href="" @click="this.$router.push('/')">
        <img
          src="https://img.freepik.com/premium-vector/doctor-wordmark-logo-design_562229-181.jpg?w=1060"
          alt=""
          width="75"
          height="75"
        >
        <b>Janji Dokter</b>
    </a>
    
    </div>
    
      <div class="container">
        <a class="navbar-brand" href="#"
        ></a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a  class="nav-link mx-2" href=""
                
                > Login as a Doctor</a
              >
            </li>
            
            <li class="nav-item ms-3">
              <a v-if="isLogin === false" class="btn btn-primary btn-rounded" href="" @click="this.$router.push('/login')" >Log In</a>
            </li>
            <li class="nav-item ms-3">
              <a v-if="isLogin === true" class="btn btn-primary btn-rounded" href="" @click="handleLogout" >Log Out</a>
            </li>
          </ul>
        </div>
      </div>
 </nav>

</template>