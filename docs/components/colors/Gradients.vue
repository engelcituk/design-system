
<script setup>
    import useCopy from '../../composables/useCopy'
    const { copyContent } = useCopy()
</script>

<template>
    <div class="container">
        <div class="gradients">
            <div class="gradient pink-to-blue" @click="copyContent('pinkToBlue')">Pink to Blue</div>        
            <div class="gradient green-to-blue">Green to Blue</div>        
            <div class="gradient yellow-to-blue">34303E</div>        
            <div class="gradient gradient-4">4A4754</div>        
            <div class="gradient gradient-5">615E69</div>        
            <div class="gradient gradient-6">77757F</div>        
            <div class="gradient gradient-7">8E8C94</div>        
            <div class="gradient gradient-8">A5A3A9</div>  
            <div class="gradient gradient-9">BBBABF</div>        
            <div class="gradient gradient-10">D2D1D4</div>        
            <div class="gradient gradient-11">E8E8EA</div>        
            <div class="gradient gradient-12">F9F9F9</div>   
            <div class="gradient gradient-13">0F0D15</div>        
            <div class="gradient gradient-14">1D1929</div>        
            <div class="gradient gradient-15">34303E</div>        
            <div class="gradient gradient-16">4A4754</div>        
            <div class="gradient gradient-17">615E69</div>        
            <div class="gradient gradient-18">77757F</div>        
            <div class="gradient gradient-19">8E8C94</div>        
            <div class="gradient gradient-20">A5A3A9</div>  
            <div class="gradient gradient-21">BBBABF</div>        
        </div> 
    </div>
</template>


<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.gradients{
    display: flex;
    justify-content: space-between;
    gap: 1rem;    
    flex-wrap: wrap;
}

.gradient{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    color: #ffffff;    
    height: 104px;
    width: 200px;
    min-width: 104px;   
    cursor: pointer; 
    font-weight: 600;
}

.pink-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FB1A8F 92.46%);
}

.green-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #1EE9B6 92.46%);
}

.yellow-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FFDE54 92.46%);
}

.orange-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FB1A8F 92.46%);
}
.red-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FB1A8F 92.46%);
}
.purple-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FB1A8F 92.46%);
}
</style>