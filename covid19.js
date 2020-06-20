
$(document).ready(function(){
   
    var url="https://api.covid19india.org/state_district_wise.json"
    //var url="https://api.covid19india.org/data.json"
     $.getJSON(url,function(data){
         var total_active=0,total_recovered=0,total_deaths=0,total_confirmed=0
          var district=[]
          var confirmed=[]
          var deaths=[]
          var recovered=[]
          var active=[]

          $.each(data.Maharashtra.districtData,function(id,obj){
              district.push(id)
              confirmed.push(obj.confirmed)
              recovered.push(obj.recovered)
              deaths.push(obj.deceased)
              active.push(obj.active)
          })

          var total_confirmed = confirmed.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);

        var total_active = active.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);

        var total_recovered = recovered.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);

        var total_deaths = deaths.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

          var myChart=document.getElementById("myChart").getContext('2d')

          var chart=new Chart(myChart,{
              type:'line',
              data:{
                  labels:district,
                  datasets:[
                      {
                          label:"Confirmed Cases",
                          data:confirmed,
                          backgroundColor:"#f1c40f",
                          minBarLength:100
                      },
                      {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"#2ec771",
                        minBarLength:100
                    },
                    {
                        label:"Deaths Cases",
                        data:deaths,
                        backgroundColor:"#e74c3c",
                        minBarLength:100
                    },

                  ]
          }
        })

         

          
          
    })
})
