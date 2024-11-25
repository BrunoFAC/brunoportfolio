export type Visibility = 'visible' | 'hidden';
export type Language = 'pt' | 'en';

export interface CommonState {
	toast: Visibility;
	language: Language;
	isOpenSidebar: boolean;
}
export interface CommonActions {
	setToast(visibility: Visibility): void;
	setLanguage(language: Language): void;
	setIsOpenSidebar(isOpenSidebar: boolean): void;
}

export interface CommonStore extends CommonState, CommonActions {}
