<template>
  <div class="cookie" :class="containerPosition" v-if="isOpen">
    <div class="cookie__content">
      <slot name="message">
        {{ message }}
      </slot>
    </div>
    <div class="cookie__buttons">
      <a :href="buttonLink" v-if="buttonLink" :class="buttonClass">
        {{ buttonLinkText }}
      </a>
      <div :class="buttonClass" @click="accept">
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CookieMessage',
    props: {
      buttonText: {
        type: String,
        default: 'Accept'
      },
      buttonLink: {
        type: String
      },
      buttonLinkText: {
        type: String,
        default: 'More info'
      },
      message: {
        type: String,
        default: 'This website uses cookies to ensure you get the best experience on our website.'
      },
      position: {
        type: String,
        default: 'top'
      },
      buttonClass: {
        type: String,
        default: 'cookie__button'
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      containerPosition() {
        return `cookie--${this.position}`;
      }
    },
    created () {
      if (!this.getGDPR() === true) {
        this.isOpen = true;
      }
    },
    methods: {
      setGDPR() {
        localStorage.setItem('cookie:accepted', true);
      },
      getGDPR() {
        return localStorage.getItem('cookie:accepted');
      },
      accept() {
        this.setGDPR();
        this.isOpen = false;
        this.$emit('accept');
      }
    }
  }
</script>

<style>
  .cookie {
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    background: #F2F2F2;
    padding: 20px;
  }
  .cookie__buttons {
    display: flex;
    flex-direction: column;
  }
  .cookie__button {
    cursor: pointer;
    align-self: center;
    padding: 5px;
    background: #42B983;
    color: #FFFFFF;
  }
  .cookie--top {
    top: 0;
    left: 0;
    right: 0;
  }
  .cookie--bottom {
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
