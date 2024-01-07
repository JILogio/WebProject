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
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" v-for="order in orders" :key="order._id">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{{ order._id }}</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.productName }}</td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.amount}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button>Pedir</button>
      <button>Cancelar</button>
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
      };
    },
    created() {
       this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        try {
            const response = await apiClient.get(this.url+'Order/orders');
            this.orders = response.data.orders;

            // Iterate through each order and fetch the product details
            for (let i = 0; i < this.orders.length; i++) {
              const productResponse = await apiClient.get(this.url+'Product/product?search='+this.orders[i].idProduct);
              this.orders[i].productName = productResponse.data.product[0].name;
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
      },
      isToday(dateString) {
          const orderDate = new Date(dateString);
          const today = new Date();
          return orderDate.toDateString() === today.toDateString();
      },
      computed: {
        filteredOrders() {
            return this.orders.filter(order => this.isToday(order.createdAt));
        }
      }
    }
}
</script>
