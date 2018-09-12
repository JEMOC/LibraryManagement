<template>
    <div class="input">
        <div class="basebox clearfix">
            <div class="coverbox">
                <label for="up" class="cover-mask" :class="{add: !info.cover}"></label>
                <input id="up" style="display:none" type="file" @change="getImage($event)">
                <img :src="info.cover" alt="" class="cover">
            </div>
            <div class="info">
                <div class="baseinfo">
                    <div style="width: 80%; border-bottom: 1px solid #a9a9a9" class="clearfix">
                        <input type="text" placeholder="书名" v-model="info.name">
                        <input type="text" placeholder="副标题" v-model="info.subHead">
                        <input type="text" placeholder="原作名" v-model="info.original">
                        <input type="text" placeholder="ISBN" v-model="info.isbn">
                        <input type="text" placeholder="作者" v-model="info.author">
                        <input type="text" placeholder="出版社" v-model="info.publish">
                        <input type="date" v-model="info.date">
                    </div>
                </div>
                <div class="synopsis">
                    <div class="biography">
                        <label for="p2">个人简介</label>
                        <textarea id="p2" style="resize: none; height: 160px; width: 80%; font-size: 14px" v-model="info.synopsis.author"></textarea>
                    </div>
                    <div class="content-validity">
                        <label for="p3">内容简介</label>
                        <textarea name="" id="p3" style="resize: none; height: 160px; width: 80%; font-size: 14px"
                            v-model="info.synopsis.content"></textarea>
                    </div>
                    <button @click="sumbit()">提交</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data() {
            return {
                url: '',
                info: {
                    name: '',
                    cover: '',
                    subHead: '',
                    original: '',
                    isbn: '',
                    author: '',
                    publish: '',
                    date: '',
                    synopsis: {
                        author: '',
                        content: ''
                    }
                }
            }
        },
        methods: {
            getImage: function (e) {
                let that = this
                let reader = new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onloadend = function () {
                    let URL = reader.result;
                    that.info.cover = URL
                }

            },
            print: function(){
                console.log(this.info)
            },
            sumbit: function(){
                let that = this
                that.$http
                    .get('http://123')
                    .then((data) => {
                        return data
                    })
                    .catch((err) => {
                        console.log(err)
                        console.log('未设定交互url')
                    })
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    .input {
        .basebox {
            .coverbox {
                width: 160px;
                height: 220px;
                margin-left: 20px;
                position: relative;
                float: left;
                overflow: hidden;

                .cover-mask {
                    display: block;
                    position: absolute;
                    height: 216px;
                    width: 156px;
                    cursor: pointer;
                    background-color: transparent;
                }

                .add {
                    border: 2px dashed;
                    color: #ccc;
                }

                .cover {
                    width: 100%;
                    height: 100;
                }
            }

            .info {
                display: block;
                overflow: hidden;
                padding: 0 40px 0 80px;



                .baseinfo {
                    margin-bottom: 10px;


                    input {
                        width: 200px;
                        font-size: 16px;
                        line-height: 20px;
                        text-indent: 5px;
                        padding: 5px 10px;
                        margin: 0 40px 20px 0;
                        border: 0;
                        border-bottom: 1px solid #ccc;
                        outline: none;


                    }
                }

                .synopsis {
                    div {
                        margin-bottom: 30px;
                    }

                    label {
                        display: block;
                        padding-bottom: 8px;
                    }
                }
            }

        }
    }
</style>