import { userActions } from './user-slice';
import { v4 as uuidv4 } from 'uuid';

const url = "https://randomuser.me/api/?inc=name,picture,nat,registered,location";

export const fetchUserData = () => {	

	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error('Fetching data failed ');
			}

			const data = await response.json();
			return data.results[0];
		};

		try {
			const userData = await fetchData();
			dispatch(userActions.getUser({
				id: uuidv4(),
				firstName: userData.name.first,
				lastName: userData.name.last,
				nationality: userData.nat,
				regDate: userData.registered.date.slice(0,10),
				image: userData.picture.medium,
				address: {
					street: userData.location.street,
					city: userData.location.city,
					state: userData.location.state,
					postcode: userData.location.postcode,
					country: userData.location.country
				}
			}))
		}
		catch (error) {
			alert(error);
		}
	}
}