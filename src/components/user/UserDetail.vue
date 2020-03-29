<template>
    <div>
        <h1>User Detail</h1>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to="link">
            Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: { 
                        id: this.$route.params.id 
                    },
                    query: { 
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        }
    } 
</script>