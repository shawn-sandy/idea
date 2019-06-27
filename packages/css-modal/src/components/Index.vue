<template>
  <div :id="name" class="cs-overlay">
    <a href="#" class="cancel"></a>
    <div class="modal" :class="size" v-bind="$attrs">
      <slot>Content...</slot>
      <a href="#" class="close">
        <slot name="close">&times;</slot>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      name: {
        default: null,
        type: String

      },
      size: {
        default: "modal-sm",
        type: String

      }
    }
  };
</script>

<style lang="scss">
  .cs-overlay {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: row;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s;
    opacity: 0;
    &:target {
      visibility: visible;
      opacity: 1;
    }
    .modal {
      position: relative;
      max-width: 80%;
      background: white;
      border-radius: 4px;
      padding: 2.5em;
      box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);

      .close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: grey;
        text-decoration: none;
      }

      &-sm {
        width: 20vw;
      }

      &-md {
        width: 40vw;
      }

      &-lg {
        width: 60vw;
      }

      &-xl {
        width: 80vw;
      }
    }

    .cancel {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
</style>
