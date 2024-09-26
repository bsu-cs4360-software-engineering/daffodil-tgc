<script lang="ts">
	import { selectedCards } from "$lib/stores.svelte";
    import type { card } from "$lib/types";

    let {cardData}: {cardData:card} = $props()

    function setCard(){
        selectedCards.set(cardData.name)
    }   

    let cardIsGold = $state(false)

    $effect(()=>{
        if(selectedCards.get().includes(cardData.name)){
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
        min-height: 300px;
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

    .name {
        align-self: center;
        font-size: 2rem;
    }

    .gold {
        border-color: rgb(226, 197, 34) !important;
    }

</style>    


{#if !cardIsGold}
<div class="card" on:click={setCard}>
    <div class="name">{cardData.name}</div>
    <div class="id">CardID - {cardData.id}</div>
    <div class="damage">Damage - {cardData.damage}</div>
    <div class="effect">Effect - {cardData.effect}</div>
</div>
{:else}
<div class="card gold" on:click={setCard}>
    <div class="name">{cardData.name}</div>
    <div class="id">CardID - {cardData.id}</div>
    <div class="damage">Damage - {cardData.damage}</div>
    <div class="effect">Effect - {cardData.effect}</div>
</div>
{/if}