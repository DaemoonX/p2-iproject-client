<script>

export default {
    name: 'SidebarDoc'
}
</script>

<template>
    <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebar-menu">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active fw-bold" href="" id="nav-dashboard"> Doctor Detail</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" id="nav-category" @click="this.$router.push('/doctor-appointment')" > Appointment Status</a>
              </li>
            </ul>
            
            
          </div>
        </nav>

</template>