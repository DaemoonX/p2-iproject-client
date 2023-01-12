import { defineStore } from "pinia";
import axios from 'axios'

export const useDoctorStores = defineStore('doctor', {
    state(){
        return{
            doctors: [],
            patients: [],
            isLogin: false,
            query:{
                search: ''
            }
        }
    },
    actions:{
        async handleLogin(email, password){
            try {
                let {data} = await axios({
                    method: 'POST',
                    url: "http://localhost:3000/pub/login",
                    data:{
                        email,
                        password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                console.log(localStorage.getItem('access_token'), 'habis login')
                this.isLogin = true
                this.router.push('/patient')
                
            } catch (error) {
                console.log(error);
            }
        },
        async handleCredentialResponse(response){
            try {
                console.log(response);
                let {data} = await axios({
                    url: "http://localhost:3000/pub/google-login",
                    method: "POST",
                    headers: {
                        google_auth_token: response.credential,
                    },
                })
                console.log(data, "ini data");
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("email", data.email);
                this.isLogin = true
                this.router.push('/patient')
                
            } catch (error) {
                console.log(error);
                
            }
        },
        async handleLogout(){
            localStorage.clear()
            this.isLogin = false
            this.router.push('/')
        },
        async fetchPatient(){
            try {
                let {data} = await axios ({
                    method: "GET",
                    url: "http://localhost:3000/pub/patient",
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    }
                })
                let access_token = localStorage.getItem('access_token');
                console.log(access_token);
                console.log(data);
                this.patients = data
                console.log(this.patients);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchDoctor(){
            try {

                let haveQuery = this.query
                if(!haveQuery.search){
                    delete haveQuery.search
                }

                let {data} = await axios({
                    method: 'GET',
                    url: 'http://localhost:3000/doctor/profile',
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    },
                    params: haveQuery

                })

                this.doctors = data
            } catch (error) {
                console.log(error);
            }
        },
        async addAppointment(id){
            try {
                let {data} = await axios({
                    method: 'POST',
                    url: `http://localhost:3000/pub/appointment/${id}`,
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data);
                this.router.push('/appointment')
            } catch (error) {
                console.log(error);
            }
        },
        async updateTime(date, time){
            try {
                let {data} = await axios({
                    method: 'PUT',
                    url: 'http://localhost:3000/pub/appointment',
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    },
                    data:{
                        date, time
                    }
                })
                console.log(data);
                this.router.push('/payment')
            } catch (error) {
                console.log(error);
            }
        },
        async fetchAppointment(){
            try {
                let {data} = await axios({
                    method: 'GET',
                    url: 'http://localhost:3000/pub/appointment',
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log(data.data);
                console.log(data.data.Doctor.Profile);
                this.doctors = data.data

            } catch (error) {
                console.log(error);
            }
        },
        async payment(){
            try {
                console.log('udah di klik');
                let {data} = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/pub/payment',
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    }
                })

                console.log(data);
                let cb = this.router.push

                window.snap.pay(data.token, {
                    onSuccess: function(result){
                      /* You may add your own implementation here */
                      console.log('seharusnya berhasil');
                      cb('/status')
                      alert("payment success!"); console.log(result);
                    },
                    onPending: function(result){
                      /* You may add your own implementation here */
                      alert("wating your payment!"); console.log(result);
                    },
                    onError: function(result){
                      /* You may add your own implementation here */
                      alert("payment failed!"); console.log(result);
                    },
                    onClose: function(){
                      /* You may add your own implementation here */
                      alert('you closed the popup without finishing the payment');
                    }
                  })
            } catch (error) {
                console.log(error);
            }
        }

    }
})
