<script >

import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomeView',
  components:{
    Navbar
  }
}
</script>

<template>
  
  <Navbar />
  <div className="container">
    <div className="card my-5  ">
      <div className="row g-0">
        <div className="col-md-4 order-md-2" class="text-center">
          <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=1060&t=st=1673437575~exp=1673438175~hmac=17db1ad3828ebc9cc288903e3a2aaa6b9c55fee495f221edeed07912bbfc70bf" alt="" width="1000" height="500">
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Doctor Appointment Booking System</h5>
            <p className="card-text">
              The aim was to build a minimalist procedure so,
              this will make it easier for you to make an appointment with your doctor that you need.
              Patients can search doctors from varied specialization for consultation.
            </p>
          </div>
        </div>
    </div>
  </div>
</div>

</template>
