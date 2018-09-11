<template>
    <div class="data">
        <div class="filter">
            <div class="selectbox">
                <select name="classify">
                    <option value="0">----</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <select name="label" id="">
                    <option value="0">---</option>
                </select>
            </div>

            <div class="search" style="float: right">
                <input type="text" class="text-box">
            </div>
        </div>
        <div class="showdata">
            <table>
                <thead>
                    <tr>
                        <th width="160px">书名</th>
                        <th width="120px">作者</th>
                        <th width="150px">出版社</th>
                        <th width="150px">ISBN</th>
                        <th class="auto-show">作者简介</th>
                        <th class="auto-show">内容简介</th>
                        <th width="26px"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in list" :key="index">
                        <td :title="item.name">{{item.name}}</td>
                        <td :title="item.info.作者">{{item.info.作者}}</td>
                        <td :title="item.info.出版社">{{item.info.出版社}}</td>
                        <td :title="item.info.ISBN">{{item.info.ISBN}}</td>
                        <td :title="item.synopsis.author||'none'" class="auto-show">{{item.synopsis.author}} </td>
                        <td :title="item.synopsis.content||'none'" class="auto-show">{{item.synopsis.content}}</td>
                        <td class="icon-edit">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1536650785624" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" p-id="1072" width="16" height="16"><path d="M932.981 644.538c-16.379 0-35.29 13.401-35.29 29.78v120.165c0 57.030-46.011 103.189-102.594 103.189h-569.106c-56.732 0-102.594-46.159-102.594-103.189v-567.914c0-57.030 45.862-103.189 102.594-103.189h252.091c16.379 0 29.632 1.489 29.632-14.89s-13.252-44.67-29.632-44.67h-295.87c-65.368 0-118.377 53.307-118.377 119.122v655.171c0 65.815 53.009 119.122 118.377 119.122h656.66c65.368 0 118.377-53.307 118.377-119.122v-163.793c0.001-16.379-7.891-29.78-24.27-29.78zM247.731 742.963c-4.765 32.46 17.422 54.2 49.584 48.245l188.808-34.099-209.208-210.549-29.185 196.403zM639.643 280.024c23.229-23.377 60.603-23.377 83.832 0l41.842 41.99c23.080 23.377 23.080 61.050 0 84.278l-188.363 189.554c-23.080 23.229-60.603 23.229-83.683 0l-41.842-42.14c-23.080-23.229-23.080-60.901 0-84.278l188.214-189.405zM535.113 722.264l355.728-358.11-209.208-210.548-355.728 357.962 209.208 210.697zM935.809 304.594c34.694-34.844 24.42-81.152-10.274-115.995l-83.683-84.279c-34.694-34.844-90.831-34.844-125.525 0l209.208 210.548 10.274-10.274z" p-id="1073"/></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
    import data from './test.json'
    export default {
        name: 'Data',
        data: function () {
            return {
                a: 1,
                list: [],

            }
        },
        methods: {
            getData: function () {
                // this.$http
                //     .get('http://111.230.63.173/api/books?state=search&title=1')
                //     .then((res) => {
                //         console.log(res.data)
                //         this.list = res.data.value
                //     })
                this.list = data.slice(0, 50)

            },
            toString: function(arr) {
                return arr.reduce(function(str, item_str){
                    return str + item_str + '。'
                })
            }
        },
        created: function () {
            this.getData()
        },
        computed: {
            show: function () {
                return this.str1 + this.str2
            }
        }
    }
</script>
<style lang="scss">
    .data {
        .filter {
            padding: 10px 0;
            border-bottom: 1px solid #222;

            .selectbox {
                display: inline-block;

                select {
                    outline: 0;
                    margin-right: 20px;
                    height: 26px;
                    width: 80px;
                }
            }

            .search {
                .text-box {
                    height: 24px;
                    border-radius: 20px;
                    text-indent: 12px;
                    border: 1px solid #e3e3e3;
                    outline: none;

                    &:focus{
                        border-color: #42b983;
                    }
                }
            }


        }

        .showdata {
            width: 100%;
            margin: 20px auto 0;

            table {
                table-layout: fixed;
                width: 100%;

                @media (max-width: 719px) {
                    margin: 0 auto;
                }

                thead {

                    .name {
                        width: auto;
                    }
                }

                th {
                    text-align: left;
                    text-indent: 10px;
                    white-space: nowrap;
                    padding-bottom: 4px;
                }
                tbody{
                    tr {
                    width: 100%;
                    &:hover{
                        background-color: #fff;
                        .icon-edit{
                            display: block;
                            cursor: pointer;
                        }
                    }

                    td {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 5 5px;
                        font-size: 14px;
                        line-height: 25px;
                        text-indent: 4px;
                        white-space: nowrap;
                    }

                    .icon-edit{
                        display: none;
                        vertical-align: middle;
                    }
                }
                }
                

            }

            .auto-show {
                @media (max-width: 719px) {
                    display: none;
                }
            }

        }
    }
</style>