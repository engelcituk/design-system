import { createToaster } from "@meforma/vue-toaster"
import { gradients } from "../data/colors"

const toaster = createToaster()

const useCopy = () => {

    const copyGradient = async ( gradientToCopy) => {
        try {
            const toCopy = gradients[gradientToCopy]
            
            await navigator.clipboard.writeText(toCopy)
            toaster.show(`${gradientToCopy} copiado`,{type: 'success', position: 'top-right', duration: 2000})
        } catch($e) {
            console.log($e)
        }
    }

    return {
        copyGradient
    }

  }

export default useCopy