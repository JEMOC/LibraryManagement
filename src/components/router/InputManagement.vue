<template>
  <div class="input">
    <div class="container">
      <div class="info clearfix">
        <div class="cover">
          <label for="file"></label>
          <a class="noimage">点击添加图片</a>
          <input type="file" name="file" id="file" accept="image/*" style="display: none;" @change="uploadImg($event)">
          <img :src="info.cover" alt="" class="cover_img">
        </div>
        <div class="baseinfo">
          <div class="text-box">
            <input type="text" id="name" v-model="info.name">
            <label for="name" :class="{'rise': info.name}">书名</label>
          </div>
          <div class="text-box">
            <input type="text" id="subhead" v-model="info.subHead">
            <label for="subhead" :class="{'rise': info.subHead}">副标题</label>
          </div>
          <div class="text-box">
            <input type="text" id="isbn" v-model="info.isbn">
            <label for="isbn" :class="{'rise': info.isbn}">ISBN</label>
          </div>
          <div class="text-box">
            <input type="text" id="author" v-model="info.author">
            <label for="author" :class="{'rise': info.author}">作者</label>
          </div>
          <div class="text-box">
            <input type="text" id="publish" v-model="info.publish">
            <label for="publish" :class="{'rise': info.publish}">出版社</label>  
          </div>
          <div class="text-box">
            <input type="date" v-model="info.date" id="date">
          </div>
        </div>
      </div>
      <hr>
      <div class="synopsis">
        <div class="author-box">
          <p>作者简介</p>
          <textarea v-model="info.synopsis.author"></textarea>
        </div>
        <div class="content-box">
          <p>内容简介</p>
          <textarea v-model="info.synopsis.content"></textarea>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">

.input {
  .container {
    width: 800px;
    margin: auto;

    input{
      -webkit-appearance: none;
      outline: none;
    }

    .cover {
      position: relative;
      float: right;
      width: 160px;
      height: 212px;
      margin-right: 15px;

      a{
        display: none;
      }

      .cover_img{
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }      

      .noimage{
        display: block;
        width: 156px;
        height: 208px;
        border: 2px dashed #ccc;
        line-height: 210px;
        text-align: center;
        color: #ccc;
      }

      label {
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        cursor: pointer;
        z-index: 99;
      }
    }

    .baseinfo {


      .text-box{
        position: relative;
        display: inline-block;
        margin-bottom: 40px;
        margin-right: 15px;

        input{
          border: solid #798695;
          border-width: 2px 0;
          width: 280px;
          line-height: 30px;
          background: transparent;
          font-size: 14px;
        }

        label{
          position: absolute;
          left: 0;
          line-height: 36px;
          cursor: text;
          top: 0;
          color: #798695;
          font-size: 14px;
          transition: all .1s linear;
        }

        input:focus + label {
          line-height: 20px;
          top: -22px;
        }

        .rise{
          line-height: 20px;
          top: -22px;
        }
      }
    }

    .synopsis{
      margin-right: 15px;
      margin-top: 20px;

      p{
        padding: 0 0 .5em 0;
        font-size: 15px;
      };

      .author-box, .content-box{
        margin-bottom: 15px;
      }

      textarea{
        resize: none;
        width: 100%;
        height: 160px;
        outline: none;
        font-size: 16px;
        text-indent: .8em;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Input",
  data() {
    return {
      url: "",
      info: {
        name: "",
        cover: "",
        subHead: "",
        original: "",
        isbn: "",
        author: "",
        publish: "",
        date: "",
        synopsis: {
          author: "",
          content: ""
        }
      }
    };
  },
  methods: {
    uploadImg: function(e) {
      let that = this;
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = function() {
        that.info.cover = reader.result;
      };
      let file = e.target.files[0];
      let param = new FormData();
      param.append("file", file, file.name);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      that.$http.post("http://localhost/upload", param, config).then(data => {
        console.log(data);
      });
    },
    print: function() {
      console.log(this.info);
    },
    sumbit: function() {
      let that = this;
      that.$http
        .get("http://123")
        .then(data => {
          return data;
        })
        .catch(err => {
          console.log(err);
          console.log("未设定交互url");
        });
    }
  },
  computed: {}
};
</script>