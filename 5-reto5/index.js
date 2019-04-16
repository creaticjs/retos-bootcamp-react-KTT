Vue.component('products', {
    props: ['nombre_producto', 'precio', 'cantidad', 'subtotal'],
    data: function() {
      return {
        
      };
    },
    methods: {
      
    },
    template:  `<div>
    <div class="col s3"> {{nombre_producto}}</div>
               
                <div class="col s3">{{precio}} </div>
                <div class="col s3">{{cantidad}} </div>
                <div class="col s3">{{subtotal}}  </div>
                </div>
                `
});
  


let app = new Vue({
    el: '#app',
    data: {
        id: 1, 
        nombre: '',
        cedula: '',
        email: '',
        productos: [],
        nombre_producto: '',
        precio: '',
        cantidad: '',
        subtotal: '',
        total: '',
        sum: 0
  },
  computed: {
    result: function () {
      return this.precio * this.cantidad;
    }
    },
    filters: {
      uppercase: function (str) {
        return str.toUpperCase()
      }
    },
    methods: {
        addProduct: function () {
        this.subtotal = this.precio * this.cantidad;
        this.productos.push({ id: this.id, nombre_producto: this.nombre_producto, precio: this.precio, cantidad: this.cantidad, subtotal: this.subtotal});  
        this.id = this.id + 1;
        console.log(this.productos);
            
        
            this.nombre_producto = '';
            this.precio = '';
            this.cantidad = '';
            this.getTotal()
        },
        getTotal: function () {
           // const self = this;
          app.sum = 0;
            this.productos.forEach(function (p, i) {
                app.sum = app.sum + p.subtotal;
                console.log('subtotal:'+p.subtotal);
            })
            this.total = app.sum;
            console.log('total'+this.total);
            return this.total;
        },
        
    }
  })