<template>
    <div>
        <h1>Please select a User</h1>
        <hr>
        <ul>
            <router-link 
                tag="li"
                to="/user/1"
                >User 1</router-link>
            <router-link 
                tag="li"
                to="/user/2"
                >User 2</router-link>
            <router-link 
                tag="li"
                to="/user/3"
                >User 3</router-link>
        </ul>
    </div>
</template>

<style scoped>
    li {
        cursor: pointer;
        list-style: none;
        padding: .5rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        border: 1px solid #000;
        width: 10rem;
        text-align: center;
        margin-top: 5px;
    }
</style>