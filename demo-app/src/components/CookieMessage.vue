<template>
  <div class="cookie" :class="containerPosition" v-if="isOpen">
    <div class="cookie__content">
      <slot name="message">
        {{ message }}
      </slot>
    </div>
    <div class="cookie__button accept" @click="accept">
      {{ buttonTextAccept }}
    </div>
    <div class="cookie__button deny" @click="deny">
      {{ buttonTextDeny }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CookieMessage',
    props: {
      buttonTextAccept: {
        type: String,
        default: 'Accept'
      },
      buttonTextDeny: {
        type: String,
        default: 'Deny'
      },
      message: {
        type: String,
        default: 'We use cookies to personalise content and ads, to provide social \
        media features and to analyse our traffic. We also share information about \
        your use of our site with our social media, advertising and analytics partners \
        who may combine it with other information you’ve provided to them or they’ve \
        collected from your use of their services.'
      },
      position: {
        type: String,
        default: 'top'
      },
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
      getGDPR() {
        return localStorage.getItem('GDPR:accepted', true);
      },
      accept() {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', true);
      },
      deny() {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', false);
      }
    }
  }
</script>

<style>
  .cookie {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 12px;
    padding: 10px;
    background: #F2F2F2;
  }

  .cookie__content {
    grid-column: auto / span 5;
    padding: 5px;
    text-align: left;
  }

  .cookie__button {
    margin: 15px 0;
    grid-column: auto / span 1;
  }

  .cookie__button.accept {
    padding: 5px;
    background: #42B983;
    color: #FFFFFF;
    cursor: pointer;
  }

  .cookie__button.accept:hover {
    background: #42B955;
  }

  .cookie__button.deny {
    padding: 5px;
    background: #42B983;
    color: #FFFFFF;
    cursor: pointer;
  }

  .cookie__button.deny:hover {
    background: #42B955;
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
