export type TListItem = {
    id: string,
    name: string,
}

export type TDetails = {
    city: string,
    company: string,
    position: string,
}

export type TDetailItem = {
    id: string,
    name: string,
    avatar: string,
    details: TDetails,
}
