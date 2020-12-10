<script>
import store from '../store';

export default {
    name: 'EditableText',
    data() {
        return {
            thisText: null
        }
    },
    props: {
        rel: String
    },
    mounted() {
        this.fetchText();
        console.log('edit mode?: ', this.editMode);
    },
    computed: {
        editMode() {
            return store.state.editMode;
        }
    },
    methods: {
        fetchText() {
            this.fireFetch("text", "rel == $rel", (docs) => {
                docs.forEach((doc) => {
                    console.log(doc.data());
                    this.thisText = doc.data().value;
                    console.log(this.thisText);
                });
            });
        }
    }
}
</script>

<template>
  <div :class="( !editMode ? '' : 'editable-text' )"><div class="icon editable-text-icon"></div><p>{{ thisText }}</p></div> 
</template>

<style scoped lang="scss">
@import '../assets/styles/global'



</style>