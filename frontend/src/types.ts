export type DiscoverListing = {
	host: any;
	fullName: string;
    lat?: number;
    lon?: number;
    capacity?: number;
    remSpace: number;
    startDate: Date;
    endDate: Date;
	price: number;
	distance: number;
	image?: string;
	_id: string;
}