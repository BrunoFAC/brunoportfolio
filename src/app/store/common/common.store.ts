import { create, StateCreator } from 'zustand';
import { devtools } from '@pavlobu/zustand/middleware';
import { CommonActions, CommonState, CommonStore, Language, Visibility } from './common.types';

const storeIdentifier = 'Common-store';

const initialData: CommonState = {
	toast: 'hidden',
	language: 'en',
	isOpenSidebar: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const actions = (set: any): CommonActions => {
	const setToast = (toast: Visibility) => {
		set(
			(state: CommonState) => {
				state.toast = toast;
			},
			false,
			`${storeIdentifier}/set-toast`
		);
	};
	const setLanguage = (language: Language) => {
		set(
			(state: CommonState) => {
				state.language = language;
			},
			false,
			`${storeIdentifier}/set-language`
		);
	};
	const setIsOpenSidebar = (isOpenSidebar: boolean) => {
		set(
			(state: CommonState) => {
				state.isOpenSidebar = isOpenSidebar;
			},
			false,
			`${storeIdentifier}/set-is-open-sidebar`
		);
	};

	return { setToast, setIsOpenSidebar, setLanguage };
};

const storeData: StateCreator<CommonStore> = (set) => ({
	...initialData,
	...actions(set),
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useCommonStore = create<CommonStore>(devtools(storeData));
