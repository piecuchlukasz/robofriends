import React from 'react';

const SerchBox = ({ serchchange }) => {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-lightest-blue br4'
			type='serch'
			placeholder='Serch for Robot..'
			onChange={serchchange}
			/>
		</div>
	);
}

export default SerchBox;
