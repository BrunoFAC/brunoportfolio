import { create, StateCreator } from 'zustand';
import { devtools } from '@pavlobu/zustand/middleware';
import { CommonActions, CommonState, CommonStore, Visibility } from './common.types';

const storeIdentifier = 'Common-store';

const initialData: CommonState = {
	toast: 'hidden',
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

	return { setToast };
};

const storeData: StateCreator<CommonStore> = (set) => ({
	...initialData,
	...actions(set),
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useCommonStore = create<CommonStore>(devtools(storeData));
