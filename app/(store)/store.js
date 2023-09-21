import { create } from 'zustand'
const useStore = create((set, get) => ({
    listImageSlide: [],
    setListImageSlide: (data) => {
        set((state) => {
            return {
                ...state,
                listImageSlide: data,
            }
        })
    },
}))
export default useStore