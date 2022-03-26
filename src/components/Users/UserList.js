import styles from './UserList.module.scss';
import Card from '../ui/Card';
import { useSelector, useDispatch } from 'react-redux';
import { userListActions } from '../../store/userList-slice';
import UserListItem from './UserListItem'

const UserList = () => {

	const users = useSelector(state => state.usersList.users);

	return (
		<Card>
			<div className={styles.users}>
		        <table className={styles.users__list}>
		         <thead className={styles.users__header}>
				    <tr className={styles.users__header__titles}>
				    	<th>Name</th>
				    	<th>Country</th>
				    	<th></th>
				    </tr>
				</thead>
		        <tbody>
			      {users.map((item) => (
			          <UserListItem
			            key={item.id}
			            item={{
			             id: item.id,
			             firstName: item.firstName,
						 lastName: item.lastName,
						 country: item.country
			             }}
			          />
			       ))}     
		        </tbody></table>
			</div>
		</Card>
	)
}

export default UserList;