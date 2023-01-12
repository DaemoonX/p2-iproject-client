<script>

import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions } from 'pinia';

export default {
    name: 'StatusAppointment',
    components:{
        Navbar,
        Sidebar
    },
    computed:{
        ...mapState(useDoctorStores, ['doctors'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchAppointment'])
    },
    created(){
        this.fetchAppointment()
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
              className="col-9 col-md-9 p-4" >
              <h2>Appointment</h2>
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Doctor Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> {{ doctors.date }}</th>
      <td>{{ doctors.time }}</td>
      <td>{{ doctors.Doctor.name }}</td>
      
    </tr>
  
   
  </tbody>
</table>

 </div>
    </div>
</div>


</template>