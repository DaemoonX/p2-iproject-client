<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions } from 'pinia';

export default {
    name : 'Appointment',
    components:{
        Navbar,
        Sidebar
    },
    data(){
        return {
            date: "",
            time: ""
        }
    },
    methods:{
        ...mapActions(useDoctorStores, ['updateTime'])
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
              <form action="" @submit.prevent="updateTime(date, time)">
                <h4>Choose your date appointment</h4><br>
         <br> <input v-model="date" style="width:500px" type="date" id="typeNumber" class="form-control "  />

               <br> <h4> times</h4> <br>
            <input v-model="time" style="width:200px" type="text" id="typeNumber" class="form-control "  />
                  
       
                <br> <button type="submit" class="btn btn-primary btn-block text-center" style="width:500px" >Submit</button>
              </form>
        
        </div>
    </div>
</div>


</template>