<script lang="ts">
	import { selectedClass } from "$lib/stores.svelte";
	import type { card, classCard } from "$lib/types";

    let {cardData}: {cardData:classCard} = $props()

    function setClass(){
        selectedClass.set(cardData.className)
    }   

    let cardIsGold = $state(false)

    $effect(()=>{
    if(selectedClass.get() == cardData.className){
        cardIsGold = true
    } else {
        cardIsGold = false
    }
    })
    
    
</script>

<style>
    .card{
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 300px;
        border-radius: 2rem;
        border: 3px solid #090F13;
        box-shadow: 2px 3px 20px 5px rgba(35, 59, 69, 0.575);
        transition: .35s;
        padding: 5px;
        background-color: #213740;
        color: white;
        
        cursor: pointer;
    }

    .card:hover {
        border-color: rgb(226, 197, 34);
        transition: .35s;
    }

    .gold {
        border-color: rgb(226, 197, 34) !important;
    }

    .name {
        align-self: center;
        font-size: 2rem;
    }

</style>    
{#if !cardIsGold}
<div class="card" on:click={setClass}>
    <div class="name">{cardData.className}</div>
    <div class="effect">{cardData.description}</div>
</div>
{:else}
<div class="card gold" on:click={setClass}>
    <div class="name">{cardData.className}</div>
    <div class="effect">{cardData.description}</div>
</div>
{/if}