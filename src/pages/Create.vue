<template>
    <form action="" class="create-form" @submit.prevent="submitHandler">
        <h2 class="form__title">
        Create task
        </h2>
        <div class="form-content">
            <input type="text" v-model="title" placeholder="Title" class="form__input">

            <div class="chips" ref="chips"></div>

            <textarea type="text" v-model="description" placeholder="Description" class="form__input"></textarea>

            <button class="btn" type="submit"> 
                CREATE TASK
            </button>
        </div>
    </form>
</template>

<script>
import M from 'materialize-css'

export default {
    data: () => ({
        title: '',
        description: '',
        chips: null,

    }),

    mounted() {
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: 'Task tags',
            secondaryPlaceholder: '+Tag',
        });
    },

    methods: {
        submitHandler() {
            const task = {
                id: Date.now(),
                title: this.title,
                description: this.description,
                chips: this.chips.chipsData,
            }

            this.$store.dispatch('createTask', task);
            this.$router.push('/list');
        }
    },
    destroyed() {
        if (this.chips && this.chips.destroy) {
            this.chips.destroy()
        }
    }
}
</script>