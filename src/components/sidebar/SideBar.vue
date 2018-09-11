<template>
    <div class="sidebar">
        <NavLink></NavLink>
        <div class="nav-list">
            <ul class="main-list">
                <li class="list-item">
                    <!-- <router-link to="/Data">数据管理</router-link> -->
                    <!-- <div class="item-mask"></div> -->
                    <a class="item-title" :class="{'show-list':target == 'bar1'}" @click="toggle('bar1')">数据管理</a>
                    <div class="item-list">
                        <router-link to="/Data">查询</router-link>
                        <router-link to="/input">入库</router-link>
                    </div>
                </li>
                <li class="list-item">
                    <a class="item-title" :class="{'show-list': target == 'bar2'}" @click="toggle('bar2')">账号管理</a>
                    <!-- <router-link to="/User">账号管理</router-link> -->
                </li>
                <li class="list-item">
                    <a class="item-title" :class="{'show-list': target == 'bar3'}" @click="toggle('bar3')">服务器管理</a>
                    <!-- <router-link to="/Server">服务器管理</router-link> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./SideBar.js"></script>
<style lang="scss" src="./SideBar.scss"></style>