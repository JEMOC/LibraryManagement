<template>
    <div class="input">
        <div class="basebox clearfix">
            <div class="coverbox">
                <label for="up" class="cover-mask" :class="{add: !url}"></label>
                <input id="up" style="display:none" type="file" @change="update($event)">
                <img :src="getUrl" alt="" class="cover">
            </div>
            <div class="baseinfo">
                <div class="titlebox inputbox">
                    <input type="text" placeholder="书名">
                </div>
                <div class="sub-head inputbox">
                    <input type="text" placeholder="副标题">
                </div>
                <div class="orgial-name inputbox">
                    <input type="text" placeholder="原作名">
                </div>
                <div class="ISBN inputbox">
                    <input type="text" placeholder="ISBN">
                </div>
                <div class="author inputbox">
                    <input type="text" placeholder="作者"> 
                </div>
                <div class="publish inputbox">
                    <input type="text" placeholder="出版社">
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
                url: ''
            }
        },
        methods: {
            update: function (e) {
                let that = this
                console.log(e.target.files)
                let reader = new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onloadend = function () {
                    let URL = reader.result;
                    console.log(URL)
                    that.url = URL
                }

            }
        },
        computed: {
            getUrl: function () {
                return this.url
            }
        }
    }
</script>

<style lang="scss">
    .input {
        .basebox {
            .coverbox {
                box-sizing: border-box;
                width: 160px;
                height: 220px;
                margin-left: 20px;
                position: relative;
                float: left;

                .cover-mask {
                    display: block;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                    background-color: transparent;
                    z-index: 10;
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

            .baseinfo {
                display:block;
                overflow: hidden;


                input {
                    font-size: 16px;
                    padding: 2px 5px;
                    border: 0;
                    border-bottom: 1px solid #ccc;
                    background-color: #f2f2f2;
                    outline: 0;
                    &:focus{
                        background-color: #fff;
                    }
                }

                .inputbox{
                    float: left;
                    margin: 5px 20px 40px 20px;
  
                }
            }

        }
    }
</style>