export const dataState = {
	pages: [
		{
			heading: 1,
			about: 111,
		},
		{
			heading: 2,
			about: 222,
		},
		{
			heading: 3,
			about: 333,
		},
	],
}

export type DataStateType = {
	pages: PagesType[]
}

export type PagesType = {
	heading: number
	about: number
}