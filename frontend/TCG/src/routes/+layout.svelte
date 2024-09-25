<script>

</script>
<div class="main">
    <div class="header">
        <h1>Dungeonstone</h1>
    </div>
    <div class="gameContent">
        <slot />
    </div>
</div>
<style>
    .main {
        width: 100%;
        min-height: 100vh;
        background-color: rgb(95, 95, 95);
        color: white;
    }

    .header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #1b2d34;
    }

    h1 {
        margin: 10px 0px;
        color: white;
    }

    .gameContent {
        padding: 1%;
    }

</style>