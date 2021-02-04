var app= new Vue({
    el: '#app',
    data:{
        datos: null,
        idioma: true
    },

    mounted(){
        axios.get('datos.json')
        .then((response)=> {
            this.datos=response.data;
            console.log(this.datos);
        })
        .catch(function (error){
                console.log("Error al cargar el JSON" +error);
        });
},

    methods:{
        idiomaCambiar: function(){
            this.idioma = !this.idioma;
        }
    },
    computed:{
        obtenerjson: function() {
            if (this.datos ===  null){
                return "";
            }
            if (this.idioma){
                return this.datos.espanol;
            }else{
                return this.datos.ingles
            }
          
        }
    }

})