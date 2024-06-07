import {defineConfig} from 'vite'

export default defineConfig({
    build:{
        lib:{
            entry:'src/index.ts',
            name:'useResizeHale',
            fileName:'v-resize-hale',
        },
        rollupOptions:{
            external:['vue'],//忽略不想打进包的依赖
            output:{
                globals:{
                    useResizeHale:'useResizeHale'
                }
            }
        }
    }
})