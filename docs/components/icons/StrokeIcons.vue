<template>
    <div class="container">
        <h3>Basics</h3>
        <div class="icons">
            <svg width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon__basic">
                <path d="M7.5 4V11M4 7.5H11" stroke="#1D1929"/>
            </svg>    
        </div>    
    </div>
</template>



<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    /* max-width: 900px; */
}

.icons{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;    
    flex-wrap: wrap;
}

.icon__basic{
    cursor: pointer;
}
</style>