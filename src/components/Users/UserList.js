import styles from './UserList.module.scss';
import Card from '../ui/Card';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userListActions } from '../../store/userList-slice';
import UserListItem from './UserListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from 'react-tooltip';

const UserList = () => {

	const dispatch = useDispatch();

	const users = useSelector(state => state.usersList.users);

	useEffect(() => {
		localStorage.setItem('storedUsers', JSON.stringify(users))
	}, [users]);

	const removeAllHandler = () => {
		dispatch(userListActions.removeAllUsers());
	}

	return (
		<Card>
			{(users.length === 0) ? <div className={styles.empty}>
				<p>There are currently no users.</p>
				<p>To add user to list first Generate New User and then click "Add User" Icon &rarr; <FontAwesomeIcon icon={faUserPlus} />
				</p>
				<p>You can store maximum 10 users. If you add eleveth user first one will be removed from list.</p>

			</div> :
			<div className={styles.users}>
		        <table className={styles.users__list}>
		         <thead className={styles.users__header}>
				    <tr className={styles.users__header__titles}>
				    	<th>Name</th>
				    	<th>Country</th>
				    	<th className={styles.users__remove}>
					    	<Tooltip id="removeAll" place="left" effect="solid" arrowColor="transparent" className={styles.tooltip}>
									Remove All
							</Tooltip>
				    		<FontAwesomeIcon data-tip data-for="removeAll" icon={faUserMinus} onClick={removeAllHandler} />	
				    	</th>
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
			</div>}
		</Card>
	)
}

export default UserList;