<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Options({})
export default class HelloWorld extends Vue {
  @Prop({ type: String })
  private msg!: string;
}
</script>
