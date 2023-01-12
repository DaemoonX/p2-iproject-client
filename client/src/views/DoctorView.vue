<script>

import Navbar from '../components/Navbar.vue'
import SidebarDoc from '../components/SidebarDoc.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions, mapWritableState } from 'pinia';

export default {
    name: 'DoctorView',
    components:{
        Navbar,
        SidebarDoc
    },
    computed:{
        ...mapState(useDoctorStores, ['doctors'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchProfileDoctor'])
    },
    created(){
        this.fetchProfileDoctor()
    }

}
</script>

<template>

<Navbar/>

<div class="justify-content center position-relative">
    <div class="row m-5">
        <div
              className="col-3 col-md-3 p-4 bg-white "
            >
            <SidebarDoc />
        </div>
        <div
              className="col-9 col-md-9 p-4">
              <div className="row ">
                <div className="col-9 col-md-9 p-4">
                  <div className="card mb-4">
                    <h4 className="card-header">Personal Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        
                        <span className="badge badge-success mr-2 p-2">
                          Name: 
                        </span>
                        {{ doctors.Profile.name }}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Email:
                        </span>
                        {{ doctors.email }}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Specialization:
                        </span>
                        {{ doctors.Profile.specialization }}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Phone Number:
                        </span>
                        {{ doctors.Profile.phoneNumber }}
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            
        </div>
        
    </div>


    
</div>

</template>