<script setup>
    import useCopy from '../../composables/useCopy'
    const { copyBaseColor } = useCopy()

</script>

<template>
    <div class="container">
        <div class="colors__base">
            <div class="color__base blue" ref="blue" @click="copyBaseColor('blue')" >#003CFF</div>        
            <div class="color__base pink" ref="pink" @click="copyBaseColor('pink')" >#FA0082</div>        
            <div class="color__base green" ref="green" @click="copyBaseColor('green')" >#1EE9B6</div>        
            <div class="color__base yellow" ref="yellow" @click="copyBaseColor('yellow')" >#FFDE54</div>        
            <div class="color__base orange" ref="orange" @click="copyBaseColor('orange')">#FF6E01</div>        
            <div class="color__base red" ref="red" @click="copyBaseColor('red')">#F42829</div>        
            <div class="color__base purple" ref="purple" @click="copyBaseColor('purple')">#D96FF8</div>        
            <div class="color__base gray" ref="gray" @click="copyBaseColor('gray')">#1D1929</div>        
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
.blue{
    background-color: #003CFF;
}
.pink{
    background-color: #FA0082;    
}
.green{
    background-color: #1EE9B6;
}
.yellow{
    background-color: #FFDE54;
}
.orange{
    background-color: #FF6E01
;
}
.red{
    background-color: #F42829;
}
.purple{
    background-color: #D96FF8;
}

.gray{
    background-color: #1D1929;
}


</style>