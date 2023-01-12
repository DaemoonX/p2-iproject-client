<script>

import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions, mapWritableState } from 'pinia';

export default {
    name: 'ListDoctorView',
    data(){
        return {
            specialization: ""
        }
    },
    components:{
        Navbar,
        Sidebar
    },
    computed:{
        ...mapState(useDoctorStores, ['doctors']),
        ...mapWritableState(useDoctorStores, ['query'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchDoctor', 'addAppointment']),
        addQuery(newQuery, str){
            if(newQuery === 'search'){
                this.query.search = str
            }
            this.fetchDoctor()
        }
    },
    created(){
        this.fetchDoctor()
    }
}

</script>

<template>

<Navbar />

<div class="justify-content center position-relative">
    <div class="row m-5">
        <div
              className="col-3 col-md-3 p-4 bg-white "
            >
            <Sidebar />
        </div>
        <div
              className="col-9 col-md-9 p-4">
    <div class="input-group">
            <input v-model="specialization" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary" @click.prevent="addQuery('search', specialization)">search</button>
    </div> <br>
    <div class="row">
  <div class="col-sm-6" v-for="doctor in doctors" :key="doctor.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{doctor.name}}</h5>
        <div>Specialization : {{doctor.specialization}}</div>
        <div>Phone Number : {{doctor.phoneNumber}}</div>
        
        <div className="col-md-6 ">
            Fees Per Session: {{doctor.fee}}
        </div>
        <a href="#" class="btn btn-primary" @click="addAppointment(doctor.id)">Book</a>
      </div>
    </div>
  </div>
</div>
            
        </div>
        
    </div>


    
</div>
</template>