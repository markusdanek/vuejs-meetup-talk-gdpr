<template>
  <div class="cookie" :class="containerPosition" v-if="isOpen">
    <div class="cookie__content">
      <slot name="message">
        {{ message }}
      </slot>
    </div>
    <div :class="buttonClassAccept" @click="accept">
      {{ buttonTextAccept }}
    </div>
    <div :class="buttonClassDeny" @click="deny">
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
        default: 'This website uses cookies to ensure you get the best experience on our website.'
      },
      position: {
        type: String,
        default: 'top'
      },
      buttonClassAccept: {
        type: String,
        default: 'cookie__button-accept'
      },
      buttonClassDeny: {
        type: String,
        default: 'cookie__button-deny'
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
        localStorage.setItem('GDPR:cookie', true);
      },
      unsetGDPR() {
        localStorage.setItem('GDPR:cookie', false);
      },
      getGDPR() {
        return localStorage.getItem('GDPR:cookie');
      },
      accept() {
        this.setGDPR();
        this.isOpen = false;
        this.$emit('accept');
      },
      deny() {
        this.unsetGDPR();
        this.isOpen = false;
        this.$emit('deny');
      }
    }
  }
</script>

<style>
  .cookie {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 12px;
    padding: 10px;
    background: #F2F2F2;
  }

  .cookie__content {
    grid-column: auto / span 3;
    padding: 5px;
  }

  .cookie__button-accept,
  .cookie__button-deny {
    grid-column: auto / span 1;
    padding: 5px;
    background: #42B983;
    color: #FFFFFF;
  }

  /* Positions */
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
