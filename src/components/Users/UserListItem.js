import styles from './UserListItem.module.scss';
import { useDispatch } from 'react-redux';
import { userListActions } from '../../store/userList-slice';
import { uiActions } from '../../store/ui-slice'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";

const UserListItem = (props) => {

	const { id, firstName, lastName, country } = props.item;

	const dispatch = useDispatch();

	const removeUserHandler = () => {
		dispatch(userListActions.removeUserFromList(id));
		dispatch(uiActions.toggleAdded());
	}

	return (
		<tr className={styles.user}>
			<td className={styles.user__name}>{firstName + ' ' + lastName}</td>
			<td className={styles.user__country}>
			{country}</td>
			<td className={styles.user__remove}>
				<FontAwesomeIcon icon={faUserMinus} onClick={removeUserHandler}/>
			</td>
		</tr>
	)
}

export default UserListItem;