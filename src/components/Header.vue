<template>
    <div>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 14rem;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        list-style: none;
        font-size: .8rem;
        background: green;
        color: #fff;
        outline: none;
        padding: .5rem;
        border-radius: 5px;
        text-transform: uppercase;
    }
</style>