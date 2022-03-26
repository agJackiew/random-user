import { Suspense } from 'react';
import styles from './User.module.scss';
import Button from '../ui/Button';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../store/user-actions';
import { userListActions } from '../../store/userList-slice'; 
import { uiActions } from '../../store/ui-slice'; 	
import Dummy from '../../assets/dummy-avatar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";

const User = () => {

	const dispatch = useDispatch();

	const user = useSelector(state => state.user.user);

	const isAdded = useSelector(state => state.ui.isAdded);

	const generateUserHandler = () => {
		dispatch(fetchUserData());
		dispatch(uiActions.setAddedFalse());
	}

	const addUserHandler = () => {
		dispatch(userListActions.addUserToList({
			id: user.id,		
			firstName: user.firstName,
			lastName: user.lastName,
			country: user.address.country,
		}));
		dispatch(uiActions.toggleAdded());
	}

	return (
		<section>
			<div className={styles.actions}>	
				<Button text="Generate New User" onClick={generateUserHandler}></Button>
			</div>
			<Card>
				<Suspense fallback={<LoadingSpinner />}>
					<div className={styles.user}>
					<div className={styles.user__info}>
						<div><span className={styles.user__label}>first name: </span><span>{user.firstName}</span></div>
						<div><span className={styles.user__label}>last name: </span><span>{user.lastName}</span></div> 
						<div><span className={styles.user__label}>nationality: </span><span>{user.nationality}</span></div>
						<div><span className={styles.user__label}>registration date: </span><span>{user.regDate}</span></div>
						<div>
							<span className={styles.user__label}>address:</span> 
							<p>{user.address.street.name + '\n' + user.address.street.number}</p>		
							<p>{user.address.city + '\n' + user.address.state}</p>
							<p>{user.address.postcode + '\n' + user.address.country}</p>			
						</div>
					</div>	
					<figure className={styles['user__img']}>
						<img src={user.image ? user.image : Dummy} alt="user" className={styles.user__photo}/>
						<figcaption>
							<span>Hi, I am {user.firstName}!&nbsp;</span>
							<FontAwesomeIcon icon={faHand} className={styles.hand} color='#90E0EF' />
						</figcaption>
						
					</figure>	
				</div>
				{user.id && 
				<div className={styles['add']}>
					<span className={styles[!isAdded ? 'add__span-yes' : 'add__span-no']}>{isAdded ? "User has been added to list" : "Add User to list"}</span>
					{!isAdded ? <FontAwesomeIcon 
						icon={faUserPlus} 
						size='2x' 
						onClick={addUserHandler}
						className={styles['add__yes-icon']}
						
					 /> :
					 <FontAwesomeIcon 
						icon={faUserXmark} 
						size='2x' 			
						className={styles['add__no-icon']}
					 />
					}
				</div>}
				</Suspense>
			</Card>
			
		</section>
	)
}

export default User;

/**/