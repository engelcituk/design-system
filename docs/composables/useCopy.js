// import { createToaster } from "@meforma/vue-toastclearer"
// import pkg from '@meforma/vue-toaster';
// const { createToaster } = pkg;
import { gradients, baseColors, colorShades } from "../data/colors"

// const toaster = createToaster()

const useCopy = () => {

    const copyGradient = async ( gradientToCopy ) => {
        try {
            const toCopy = gradients[gradientToCopy]
            
            await navigator.clipboard.writeText(toCopy)
            // toaster.show(`${gradientToCopy} copiado`,{type: 'success', position: 'top-right', duration: 2000})
        } catch($e) {
            console.log($e)
        }
    }

    const copyBaseColor = async ( colorBase ) => {
        try {
            const toCopy = baseColors[colorBase]
            
            await navigator.clipboard.writeText(toCopy.code)

            // toaster.show(`${toCopy.name} | ${toCopy.code} copiado`,{type: 'success', position: 'top-right', duration: 2000})
        } catch($e) {
            console.log($e)
        }
    }

    const copyShadeColor = async ( colorBase, variant ) => {
        try {
            const toCopy = colorShades[colorBase][variant]
            
            await navigator.clipboard.writeText(toCopy.code)

            // toaster.show(`${toCopy.name} | ${toCopy.code} copiado`,{type: 'success', position: 'top-right', duration: 2000})
        } catch($e) {
            console.log($e)
        }
    }


    return {
        copyGradient,
        copyBaseColor,
        copyShadeColor
    }

  }

export default useCopy