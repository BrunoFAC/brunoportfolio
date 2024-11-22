export type Visibility = 'visible' | 'hidden';

export interface CommonState {
	toast: Visibility;
}
export interface CommonActions {
	setToast(visibility: Visibility): void;
}

export interface CommonStore extends CommonState, CommonActions {}
