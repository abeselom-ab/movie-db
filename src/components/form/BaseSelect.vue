<template>
    <label v-if="label"> {{ label }} </label>
    <select :value="modelValue"
        v-bind="{ ...$attrs, onChange: (event) => { $emit('update:modelValue', event.target.value) } }">
        <option v-for="option in options" :value="option" :key="option" :selected="option === modelValue"></option>
    </select>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    options: {
        type: Array,
        required: true
    }
})
</script>

<style scoped></style>