<template>
<div class="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
  
  <div class="flex flex-col">
    <header class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <div class="flex-1">
        <h1 class="font-semibold text-lg">Recent Orders</h1>
      </div>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div class="border shadow-sm rounded-lg p-2">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                  Order ID
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Producto
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Cantidad
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <template v-for="order in orders" :key="order._id">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" v-if="order.idUser === this.user && this.isToday(order.createdAt)">
                  <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{{ order._id }}</td>
                  <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.productName }}</td>
                  <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.amount}}</td>
                  <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.productPrice}}</td>
                  <td>
                    <button @click="deleteOrder(order._id)">Cancelar</button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <button @click="pedir">Pedir</button>
    </main>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';

const apiClient = axios.create({
  withCredentials: true,
});

export default {
    name: 'OrdersPage',
    data() {
       return {
         url: Global.url,
         orders: [],
         total: 0,
         user: {}
      };
    },
    async created() {
       await this.fetchOrders();
       await this.fetchUser();
    },
    methods: {
      async fetchUser() {
        try {
          const response = await axios.get(`${this.url}User/user`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          });

          const content = response.data;
          this.user = `${content._id}`;
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      },
      async fetchOrders() {
        try {
            const response = await apiClient.get(this.url+'Order/orders');
            this.orders = response.data.orders;

            for (let i = 0; i < this.orders.length; i++) {
              const productResponse = await apiClient.get(this.url+'Product/product?search='+this.orders[i].idProduct);
              this.orders[i].productName = productResponse.data.product[0].name;
            }

            for (let i = 0; i < this.orders.length; i++) {
              const productResponse = await apiClient.get(this.url+'Product/product?search='+this.orders[i].idProduct);
              this.orders[i].productPrice = productResponse.data.product[0].price;
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
      },
      async deleteOrder(id) {
        try {
          await apiClient.delete(this.url+'Order/delete/'+id);
          this.orders = this.orders.filter(order => order._id !== id);
        } catch (error) {
          console.error('Error deleting order:', error);
        }
      },
      isToday(dateString) {
          const orderDate = new Date(dateString);
          const today = new Date();
          return orderDate.toDateString() === today.toDateString();
      },
      async pedir() {
        const data = [];
        var count = 0;
    
        for (let i = 0; i < this.orders.length; i++){
          if(this.orders[i].idUser == this.user && this.isToday(this.orders[i].createdAt)){
            data[count] = this.orders[i];
            count ++;
          }
        }
    
        if(data.length != 0){
          const orderIds = data.map(order => order._id);
    
          for (let i = 0; i < data.length; i++) {
            this.total += data[i].productPrice * data[i].amount
          }
    
          this.$router.push({name: 'RealizarPedido', params: { orders: JSON.stringify(orderIds), total: this.total }});
        } else {
          alert('No hay ordenes realizadas')
        }
      }
    }
}
</script>
