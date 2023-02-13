
<script setup>
    import useCopy from '../../composables/useCopy'
    const { copyGradient } = useCopy()
</script>

<template>
    <div class="container">
        <div class="gradients">
            <div class="gradient pink-to-blue" @click="copyGradient('pinkToBlue')" >Pink to Blue</div>        
            <div class="gradient green-to-blue" @click="copyGradient('greenToBlue')" >Green to Blue</div>                
            <div class="gradient yellow-to-blue" @click="copyGradient('yellowToBlue')">Yellow to Blue</div>        
            <div class="gradient orange-to-blue" @click="copyGradient('yellowToBlue')">Orange to Blue</div>        
            <div class="gradient red-to-blue" @click="copyGradient('yellowToBlue')">Red to Blue</div>        
            <div class="gradient purple-to-blue" @click="copyGradient('purpleToBlue')">Purple to Blue</div>        

            <div class="gradient green-to-pink" @click="copyGradient('greenToPink')">Green to Pink</div>        
            <div class="gradient yellow-to-pink" @click="copyGradient('yellowToPink')">Yellow to pink</div>  
            <div class="gradient orange-to-pink" @click="copyGradient('orangeToPink')">Orange to Pink</div>        
            <div class="gradient red-to-pink" @click="copyGradient('redToPink')">Red to Pink</div>        
            <div class="gradient purple-to-pink" @click="copyGradient('purpleToPink')">Purple to Pink</div>        
            <div class="gradient red-to-orange" @click="copyGradient('redToOrange')">Red to Orange</div>  

            <div class="gradient orange-to-yellow" @click="copyGradient('orangeToYello')">Orange to Yellow</div>        
            <div class="gradient red-to-yellow" @click="copyGradient('redToYellow')">Red to Yellow</div>        
            <div class="gradient purple-to-yellow" @click="copyGradient('purpleToYellow')">Purple to Yellow</div>        
            <div class="gradient purple-to-orange" @click="copyGradient('purpleToOrange')">Purple to Orange</div>        
            <div class="gradient purple-to-red" @click="copyGradient('purpleToRed')">Purple to Red</div>        
            <div class="gradient red-to-green" @click="copyGradient('redToGreen')">Red to Green</div> 

            <div class="gradient yellow-to-green" @click="copyGradient('yellowToGreen')">Yellow to Green</div>        
            <div class="gradient orange-to-green" @click="copyGradient('orangeToGreen')">Orange to Green</div>  
            <div class="gradient purple-to-green" @click="copyGradient('purpleToGreen')">Purple to Green</div>
        </div> 
    </div>
</template>

<style scoped>
    @import './../styles/color-gradients.css';
</style>
