<template>
    <div class="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      
      <div class="flex flex-col">
        <header class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div class="flex-1">
            <h1 class="font-semibold text-lg">Orders</h1>
          </div>
        </header>
        <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div class="border shadow-sm rounded-lg p-2">
            <div class="relative w-full overflow-auto">
              <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                  <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                      Cliente
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
                  <template v-for="order in orders" :key="order._id">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{{ order.Client }}</td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.Product }}</td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ order.Amount}}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
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
             orders: []
          };
        },
        async created() {
           await this.fetchOrders();
        },
        methods: {
          async fetchOrders() {
            try {
                const response = await apiClient.get(this.url+'Report/OrdersWithClients');
                this.orders = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
          },
        }
    }
</script>