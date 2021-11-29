<template>
  1<i width="100%" viewBox="0 0 24 24" :aria-labelledby="name">
    <component :is="getIcon" />
  </i>2
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  props: {
    name: String
  }
})
export default class Icon extends Vue {
  readonly name!: string;
  getIcon() {
    console.log(this.name)
    let iconData = import('@mdi/js').then(val => val[this.name])
    console.log(iconData)
   return iconData
  }
}
</script>