<script>

import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions } from 'pinia';


export default {
    name: 'Payment',
    components:{
        Navbar,
        Sidebar
    },
    computed:{
        ...mapState(useDoctorStores, ['doctors'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchAppointment', 'payment'])
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
              <h2>RECEIPT</h2>
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Doctor Name</th>
      <th scope="col">Specialization</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ doctors.Doctor.name }}</th>
      <td>{{doctors.Doctor.Profile.specialization}}</td>
      <td>{{doctors.Doctor.Profile.fee}}</td>
      
    </tr>
  
   
  </tbody>
</table>
<a  class="btn btn-primary btn-rounded" href="" @click.prevent="payment" >Pay Now</a>
 </div>
    </div>
</div>


</template>