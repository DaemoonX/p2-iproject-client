<script>

import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { useDoctorStores } from '../stores/doctor';
import { mapState, mapActions } from 'pinia';


export default {
    name: 'PatientView',
    components:{
        Navbar,
        Sidebar
    },
    computed:{
        ...mapState(useDoctorStores, ['patients'])
    },
    methods:{
        ...mapActions(useDoctorStores, ['fetchPatient', 'handleLogin'])
    },
    created(){
        this.fetchPatient()
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
              <div className="row ">
                <div className="col-9 col-md-9 p-4">
                  <div className="card mb-4">
                    <h4 className="card-header">Personal Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        
                        <span className="badge badge-success mr-2 p-2">
                          Name:
                        </span>
                         {{ patients.username }}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Email:
                        </span>
                        {{ patients.email }}
                      </li>
                    </ul>
                  </div>
                </div>
    </div>
            
        </div>
        
    </div>


    
</div>


</template>