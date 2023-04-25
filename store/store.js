import { create } from 'zustand';

export const useStore = create((set) => ({
	info: {},
	updateInfo: (data) => set((state) => ({ info: { ...state.info, ...data } })),
	reset: () => set((state) => state)
}));
