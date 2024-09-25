<script lang="ts">
	import type { card } from "$lib/types";
	import { onMount } from "svelte";

    let {cardData}: {cardData:card} = $props()
    let keys = Object.keys(cardData)
    let data = cardData[keys[0]]
</script>

<style>
    .card{
        display: flex;
        flex-direction: column;
        width: 200px;
        min-height: 300px;
        border-radius: 1rem;
        border: 3px solid #090F13;
        box-shadow: 2px 3px 20px 5px rgba(35, 59, 69, 0.575);
        transition: .35s;
        padding: 5px;
        background-color: #213740;
        color: white;
        
    }

    .card:hover {
        border-color: rgb(226, 197, 34);
        transition: .35s;
    }

    .name {
        align-self: center;
        font-size: 2rem;
    }

</style>
<div class="card">
    <div class="name">{data.name}</div>
    <div class="damage">Damage - {data.damage}</div>
    <div class="effect">Effect - {data.effect}</div>
</div>