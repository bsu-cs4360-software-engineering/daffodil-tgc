<script lang="ts">
    import Card from "$lib/components/card.svelte";

    let {data} = $props();
    const cardData = data.cardData


</script>
<style>
    .cardLayout {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 25px;
        justify-items: center;
    }
</style>
<div class="cardLayout">
    {#each cardData as data}
        <Card cardData={data}/>
    {/each}
</div>