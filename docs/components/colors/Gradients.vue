
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
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);     */
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
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FF6E01 92.46%);
}
.red-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #FB1A8F 92.46%);
}
.purple-to-blue{
    background: linear-gradient(254.81deg, #1A50FF 8.13%, #D96FF8 92.46%);
}

.green-to-pink{
    background: linear-gradient(254.81deg, #FA0082 8.13%, #1EE9B6 92.46%);
}

.yellow-to-pink{
    background: linear-gradient(254.81deg, #FA0082 8.13%, #FFDE54 92.46%);
}

.orange-to-pink{
    background: linear-gradient(254.81deg, #FA0082 8.13%, #FF6E01 92.46%);
}

.red-to-pink{
    background: linear-gradient(254.81deg, #FA0082 8.13%, #F42829 92.46%);
}
.purple-to-pink{
    background: linear-gradient(254.81deg, #FA0082 8.13%, #D96FF8 92.46%);
}
.red-to-orange{
    background: linear-gradient(254.81deg, #FF6E01 8.13%, #F42829 92.46%);
}
.orange-to-yellow{
    background: linear-gradient(254.81deg, #FFDE54 8.13%, #FF6E01 92.46%);
}

.red-to-yellow{
    background: linear-gradient(254.81deg, #FFDE54 8.13%, #F42829 92.46%);
}

.purple-to-yellow{
    background: linear-gradient(254.81deg, #FFDE54 8.13%, #D96FF8 92.46%);
}

.purple-to-orange{
    background: linear-gradient(254.81deg, #FF6E01 8.13%, #D96FF8 92.46%);
}

.purple-to-red{
    background: linear-gradient(254.81deg, #F42829 8.13%, #D96FF8 92.46%);
}

.red-to-green{
    background: linear-gradient(254.81deg, #1EE9B6 8.13%, #F42829 92.46%);
}

.yellow-to-green{
    background: linear-gradient(254.81deg, #1EE9B6 8.13%, #FFDE54 92.46%);
}

.orange-to-green{
    background: linear-gradient(254.81deg, #1EE9B6 8.13%, #FF6E01 92.46%);
}

.purple-to-green{
    background: linear-gradient(254.81deg, #1EE9B6 8.13%, #D96FF8 92.46%);
}

</style>