<template>
  <div ref="root" class="crafter-modal">
    <span>isOpen === {{ isOpen }}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { provide, ref, Ref, watch } from '@vue/composition-api';
import { useClickOutside } from '@/composables/useClickOutside';
import { useMenu } from '@/composables/menu/useMenu';

export default {
  setup(props) {
    const root = ref<null | Ref<HTMLElement>>(null);

    const { closeOnBlur = true } = props;

    const menuContext = useMenu();
    const { onClose, isOpen } = menuContext;
    provide('menuContext', menuContext);

    //TODO: Implement `useEscape` here

    return { root, isOpen };
  },
};
</script>
