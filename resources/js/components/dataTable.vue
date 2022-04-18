<template>
    <v-client-table
        :data="usersCollection"
        :options="tableOptions"
        :columns="tableColumns">
    </v-client-table>
</template>

<script>

export default {
    data() {
        return {
            tableColumns: [
              'id', 
              'name', 
              'email', 
              'website'
            ],
            usersCollection: [],
            tableOptions: {
                headings: {
                    id: 'ID',
                    name: 'Name',
                    email: 'Email',
                    website: 'Website'
                },
                sortable: ['name', 'email'],
                filterable: ['name', 'email']
            }
        }
    },
    mounted() {
        this.axios.get('http://localhost:8888/users').then((response) => {
            this.usersCollection = response.data
        })
    }
 
}
</script>