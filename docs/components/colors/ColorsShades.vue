<script setup>
    const copyColor = () => {
        console.log('copyColor')
    }
</script>

<template>
    <div class="container">
        <h3 class="title_shade">Gray</h3>        
        <div class="colors__base">
            <div class="color__base gray-1">#0F0D15</div>        
            <div class="color__base gray-2">#1D1929</div>        
            <div class="color__base gray-3">#34303E</div>        
            <div class="color__base gray-4">#4A4754</div>        
            <div class="color__base gray-5">#615E69</div>        
            <div class="color__base gray-6">#77757F</div>        
            <div class="color__base gray-7">#8E8C94</div>        
            <div class="color__base gray-8">#A5A3A9</div>  
            <div class="color__base gray-9">#BBBABF</div>        
            <div class="color__base gray-10">#D2D1D4</div>        
            <div class="color__base gray-11">#E8E8EA</div>        
            <div class="color__base gray-12">#F9F9F9</div>       
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

.colors__base{
    display: flex;
    justify-content: space-between;
    gap: 1rem;    
    flex-wrap: wrap;
}
.title_shade{
    text-align: center;
    margin-bottom: 1rem;
}

.color__base{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1D1929;
    border-radius: 40px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);     */
    color: #ffffff;    
    height: 104px;
    width: 104px;
    min-width: 104px;   
    cursor: pointer; 
    
}
.gray-1{
    background-color: #0F0D15;
}

.gray-2{
    background-color: #1D1929;
}

.gray-3{
    background-color: #34303E;
}

.gray-4{
    background-color: #4A4754;
}

.gray-5{
    background-color: #615E69;
}

.gray-6{
    background-color: #77757F;
}

.gray-7{
    background-color: #8E8C94;
}

.gray-8{
    background-color: #A5A3A9;    
}

.gray-9{
    background-color: #BBBABF;
    color: #0F0D15;

}

.gray-10{
    background-color: #D2D1D4;
    color: #0F0D15;

}

.gray-11{
    background-color: #E8E8EA;
    color: #0F0D15;
}

.gray-12{
    background-color: #F9F9F9;
    color: #0F0D15;    
}


</style>