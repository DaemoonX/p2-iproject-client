<script>

import Navbar from '../components/Navbar.vue'
import SidebarDoc from '../components/SidebarDoc.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions } from 'pinia';

export default {
    name: 'DoctorAppointment',
    components:{
        Navbar,
        SidebarDoc
    },
    computed:{
        ...mapState(useDoctorStores, ['doctors'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchDoctorAppointment'])
    },
    created(){
        this.fetchDoctorAppointment()
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
            <SidebarDoc />
        </div>
        <div
              className="col-9 col-md-9 p-4" >
              <h2>Appointment</h2>
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Patient Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ doctors.date }} </th>
      <td>{{ doctors.time }}</td>
      <td>{{ doctors.Patient.username }}</td>
      
    </tr>
  
   
  </tbody>
</table>

 </div>
    </div>
</div>


</template>