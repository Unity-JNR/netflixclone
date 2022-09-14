// importing item array
import { ItemArray } from "../classes/ItemArray.js";

const { createApp } = window.Vue;

// local storage keys
const SIGNED_IN_KEY = "logged-in-user-storage-key";
const MY_LIST_KEY = "my-list-storage-key";

const Component = {
  data() {
    return {
      itemList: ItemArray,
      userArray: [],
      username: "",
      watchListArray: [],
    };
  },

  // signs user out
  methods: {
    logout() {
      localStorage.removeItem(SIGNED_IN_KEY);
      window.location.href = "../../index.html";
    },

    removeFromWatchList(index) {
      this.watchListArray = JSON.parse(localStorage.getItem(MY_LIST_KEY));
      this.watchListArray.splice(index, 1);
      localStorage.setItem(MY_LIST_KEY, JSON.stringify(this.watchListArray));
    },
  },

  // html template
  template: /* html */ `
    <div id="myHeader">
      <a href="#" class="netflix-logo"><img src="./../images/netflix.png" alt="Netflix logo"/></a>
      <ul class="navigation-list">
        <li><a href="./home.html">Home</a></li>
        <li>My List</li>
      </ul>
      <div class="dropdown">
        <button class="pfp-button"><img src="./../images/pfp.png" alt="profile picture" class="pfp"></button>
        <div class="dropdown-content">
          <p>{{ username }}</p>
          <p @click="logout">Log out</p>
        </div>
      </div>
    </div>

      <section id="content-grid">
        <div class="container-heading">My List:</div>
          <div class="container">
            <div class="box hover-button-display" v-for="item in watchListArray.slice(0, 6)">
              <img class="bg" :src="item.poster" />
              <button type="button" class="hover-button" @click="removeFromWatchList(index)"><i class="fa fa-minus"></i></button>
            </div>
          </div>

          <div class="container">
            <div class="box hover-button-display" v-for="item in watchListArray.slice(7, 13)">
              <img class="bg" :src="item.poster" />
              <button type="button" class="hover-button" @click="removeFromWatchList(index)"><i class="fa fa-minus"></i></button>
            </div>
          </div>

          <div class="container">
            <div class="box hover-button-display" v-for="item in watchListArray.slice(12, 17)">
              <img class="bg" :src="item.poster" />
              <button type="button" class="hover-button" @click="removeFromWatchList(index)"><i class="fa fa-minus"></i></button>
            </div>
          </div>

          <div class="container">
            <div class="box hover-button-display" v-for="item in watchListArray.slice(18, 23)">
              <img class="bg" :src="item.poster" />
              <button type="button" class="hover-button" @click="removeFromWatchList(index)"><i class="fa fa-minus"></i></button>
            </div>
          </div>
      </section>

    <footer id="myFooter">
      <div class="social-links">
        <a href="https://www.instagram.com/oliver.vermeulen/" class="social-link" target="_blank"><i class="fab fa-instagram icon" alt="Instagram"></i></a>
        <a href="https://github.com/OliverVermeulen" class="social-link" target="_blank"><i class="fab fa-github icon" alt="GitHub"></i></a>
        <a href="https://www.linkedin.com/in/oliver-vermeulen-311221222/" class="social-link" target="_blank"><i class="fab fa-linkedin-in icon" alt="Linkedin"></i></a>
      </div>

      <ul class="footer-grid">
        <li class="footer-grid-item">Audio and Subtitles</li>
        <li class="footer-grid-item">Audio Description</li>
        <li class="footer-grid-item">Help Centre</li>
        <li class="footer-grid-item">Gift Cards</li>
        <li class="footer-grid-item">Media Centre</li>
        <li class="footer-grid-item">Investor Relations</li>
        <li class="footer-grid-item">Jobs</li>
        <li class="footer-grid-item">Terms of Use</li>
        <li class="footer-grid-item">Privacy</li>
        <li class="footer-grid-item">Legal Notices</li>
        <li class="footer-grid-item">Cookie Preferences</li>
        <li class="footer-grid-item">Corporate Information</li>
      </ul>

      <p>© 2022-2022 Viswinkel, Ltd.</p>
    </footer>
  `,
  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(SIGNED_IN_KEY));
    this.username = this.userArray[0]._username;
    if (!localStorage.getItem(MY_LIST_KEY)) {
      let initArray = [];
      localStorage.setItem(MY_LIST_KEY, JSON.stringify(initArray));
    }
    this.watchListArray = JSON.parse(localStorage.getItem(MY_LIST_KEY));
  },
};

// mounting app
window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Component);
  app.mount("#app");
  // sticky header
  let header = document.querySelector("#myHeader");
  let sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  window.onscroll = function () {
    myFunction();
  };
});
